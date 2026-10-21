export type DeliveryZone = 'dhaka' | 'outside_dhaka';

export type PaymentMethod = 'cod' | 'bkash' | 'nagad';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

export interface ProductPackage {
  id: string;
  name: string;
  bengaliName: string;
  sachetsCount: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  tag?: string;
  isPopular?: boolean;
  savingsAmount: number;
  freeDelivery: boolean;
  freeGift?: string;
  description: string;
  image: string;
}

export interface OrderItem {
  packageId: string;
  packageName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CustomerOrder {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  deliveryZone: DeliveryZone;
  deliveryFee: number;
  paymentMethod: PaymentMethod;
  item: OrderItem;
  subtotal: number;
  discount: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  notes?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  verified: boolean;
  date: string;
  productPack: string;
  avatarBg: string;
}

export interface Ingredient {
  id: string;
  nameBn: string;
  nameEn: string;
  benefitBn: string;
  descriptionBn: string;
  iconName: string;
  badge: string;
}
