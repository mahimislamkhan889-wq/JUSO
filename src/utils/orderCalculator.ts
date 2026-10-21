import { DeliveryZone, ProductPackage } from '../types.ts';

export const DHAKA_DELIVERY_FEE = 60;
export const OUTSIDE_DHAKA_DELIVERY_FEE = 120;

/**
 * Validates Bangladeshi mobile numbers.
 * Accepts formats like: 01712345678, +8801712345678, 8801712345678
 */
export function validateBdPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-]/g, '');
  // Matches 013-019 followed by 8 digits, with optional +88 or 88 prefix
  const regex = /^(?:\+?880|0)?1[3-9]\d{8}$/;
  return regex.test(cleaned);
}

/**
 * Normalizes phone number to standard 11-digit local format: 01XXXXXXXXX
 */
export function normalizeBdPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-]/g, '');
  if (cleaned.startsWith('+880')) {
    return '0' + cleaned.slice(4);
  }
  if (cleaned.startsWith('880')) {
    return '0' + cleaned.slice(3);
  }
  return cleaned;
}

export interface CalculationResult {
  unitPrice: number;
  quantity: number;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  savingsTotal: number;
}

/**
 * Calculates complete order pricing breakdown
 */
export function calculateOrderSummary(
  pack: ProductPackage,
  quantity: number,
  zone: DeliveryZone,
  couponCode?: string
): CalculationResult {
  const safeQuantity = Math.max(1, Math.floor(quantity || 1));
  const unitPrice = pack.discountedPrice;
  const subtotal = unitPrice * safeQuantity;

  // If package provides free delivery or quantity >= 2, delivery is free
  let deliveryFee = 0;
  if (!pack.freeDelivery && safeQuantity === 1) {
    deliveryFee = zone === 'dhaka' ? DHAKA_DELIVERY_FEE : OUTSIDE_DHAKA_DELIVERY_FEE;
  }

  let discount = 0;
  const cleanCoupon = (couponCode || '').trim().toUpperCase();
  if (cleanCoupon === 'JUSO50') {
    discount = 50;
  } else if (cleanCoupon === 'HEALTH100') {
    discount = 100;
  }

  const total = Math.max(0, subtotal + deliveryFee - discount);
  const regularCost = pack.originalPrice * safeQuantity + (zone === 'dhaka' ? DHAKA_DELIVERY_FEE : OUTSIDE_DHAKA_DELIVERY_FEE);
  const savingsTotal = Math.max(0, regularCost - total);

  return {
    unitPrice,
    quantity: safeQuantity,
    subtotal,
    deliveryFee,
    discount,
    total,
    savingsTotal,
  };
}

/**
 * Formats amount into Bengali Taka symbol string
 */
export function formatTaka(amount: number): string {
  return `৳${Math.round(amount).toLocaleString('en-US')}`;
}

/**
 * Generates an authentic Bangladeshi order reference ID like JUSO-BD-7482
 */
export function generateOrderId(prefix = 'JUSO-BD'): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}
