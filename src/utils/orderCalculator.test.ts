import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBdPhone,
  normalizeBdPhone,
  calculateOrderSummary,
  formatTaka,
  generateOrderId,
  DHAKA_DELIVERY_FEE,
  OUTSIDE_DHAKA_DELIVERY_FEE
} from './orderCalculator.ts';
import { ProductPackage } from '../types.ts';

const mockTrialPack: ProductPackage = {
  id: 'trial-pack',
  name: 'Trial Pack (10 Sachets)',
  bengaliName: 'ট্রায়াল প্যাক (১০ টি স্যাশে)',
  sachetsCount: 10,
  originalPrice: 600,
  discountedPrice: 450,
  discountPercent: 25,
  savingsAmount: 150,
  freeDelivery: false,
  description: '10 days trial',
  image: '/images/pack-trial.png',
};

const mockFamilyPack: ProductPackage = {
  id: 'family-pack',
  name: 'Family Pack (20 Sachets)',
  bengaliName: 'জনপ্রিয় ফ্যামিলি প্যাক (২০ টি স্যাশে)',
  sachetsCount: 20,
  originalPrice: 1200,
  discountedPrice: 850,
  discountPercent: 30,
  savingsAmount: 350,
  freeDelivery: true,
  freeGift: 'ফ্রি হোম ডেলিভারি',
  description: 'Most popular',
  image: '/images/pack-family.png',
};

test('validateBdPhone identifies valid Bangladeshi mobile numbers', () => {
  assert.equal(validateBdPhone('01712345678'), true);
  assert.equal(validateBdPhone('01898765432'), true);
  assert.equal(validateBdPhone('01911223344'), true);
  assert.equal(validateBdPhone('01300000000'), true);
  assert.equal(validateBdPhone('+8801712345678'), true);
  assert.equal(validateBdPhone('8801812345678'), true);
  assert.equal(validateBdPhone('01712-345678'), true);
});

test('validateBdPhone rejects invalid phone numbers', () => {
  assert.equal(validateBdPhone('01212345678'), false); // 012 is not valid BD prefix
  assert.equal(validateBdPhone('0171234567'), false);  // too short
  assert.equal(validateBdPhone('017123456789'), false); // too long
  assert.equal(validateBdPhone('abcdefghijk'), false);
  assert.equal(validateBdPhone(''), false);
});

test('normalizeBdPhone converts prefix to standard 11 digits', () => {
  assert.equal(normalizeBdPhone('+8801712345678'), '01712345678');
  assert.equal(normalizeBdPhone('8801812345678'), '01812345678');
  assert.equal(normalizeBdPhone('01912-345-678'), '01912345678');
});

test('calculateOrderSummary handles trial pack with Dhaka and outside delivery charges', () => {
  const dhakaResult = calculateOrderSummary(mockTrialPack, 1, 'dhaka');
  assert.equal(dhakaResult.subtotal, 450);
  assert.equal(dhakaResult.deliveryFee, DHAKA_DELIVERY_FEE);
  assert.equal(dhakaResult.total, 450 + DHAKA_DELIVERY_FEE);

  const outsideResult = calculateOrderSummary(mockTrialPack, 1, 'outside_dhaka');
  assert.equal(outsideResult.deliveryFee, OUTSIDE_DHAKA_DELIVERY_FEE);
  assert.equal(outsideResult.total, 450 + OUTSIDE_DHAKA_DELIVERY_FEE);
});

test('calculateOrderSummary respects free delivery on Family Pack', () => {
  const result = calculateOrderSummary(mockFamilyPack, 1, 'outside_dhaka');
  assert.equal(result.subtotal, 850);
  assert.equal(result.deliveryFee, 0); // Free delivery
  assert.equal(result.total, 850);
});

test('calculateOrderSummary applies promo code discount correctly', () => {
  const result = calculateOrderSummary(mockFamilyPack, 1, 'dhaka', 'JUSO50');
  assert.equal(result.discount, 50);
  assert.equal(result.total, 800);
});

test('formatTaka formats currency properly', () => {
  assert.equal(formatTaka(850), '৳850');
  assert.equal(formatTaka(1550), '৳1,550');
});

test('generateOrderId formats with prefix and 4-digit number', () => {
  const id = generateOrderId('JUSO-BD');
  assert.match(id, /^JUSO-BD-\d{4}$/);
});
