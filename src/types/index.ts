export interface Product {
  id: string;
  name: string;
  barcode: string;
  category: string;
  brand: string;
  basePrice: number;
  currentPrice: number;
  stock: number;
  batchNumber: string;
  expiryDate: Date;
  created_at: Date;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  loyaltyPoints: number;
  created_at: Date;
}

export interface Discount {
  id: string;
  name: string;
  type: 'BRAND' | 'CATEGORY' | 'BILL';
  value: number;
  isPercentage: boolean;
  minBillAmount?: number;
  brandId?: string;
  categoryId?: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
}

export interface BillItem {
  product: Product;
  quantity: number;
  unitPrice: number;
  discount: number;
  total: number;
}

export interface Bill {
  id: string;
  customer?: Customer;
  items: BillItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paymentMethod: 'CASH' | 'CARD' | 'UPI';
  created_at: Date;
}

export interface Batch {
  id: string;
  productId: string;
  batchNumber: string;
  mrp: number;
  purchasePrice: number;
  quantity: number;
  manufacturingDate: Date;
  expiryDate: Date;
  created_at: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  parent_id?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
}