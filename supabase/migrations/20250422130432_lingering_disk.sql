/*
  # Initial Schema for A3 Mart Retail System

  1. New Tables
    - categories
    - brands
    - products
    - batches
    - customers
    - discounts
    - bills
    - bill_items

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create brands table
CREATE TABLE brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  barcode TEXT UNIQUE,
  category_id UUID REFERENCES categories(id),
  brand_id UUID REFERENCES brands(id),
  base_price DECIMAL(10,2) NOT NULL,
  current_price DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create batches table
CREATE TABLE batches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  batch_number TEXT NOT NULL,
  mrp DECIMAL(10,2) NOT NULL,
  purchase_price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  manufacturing_date DATE,
  expiry_date DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create customers table
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT UNIQUE,
  email TEXT UNIQUE,
  address TEXT,
  loyalty_points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create discounts table
CREATE TABLE discounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('BRAND', 'CATEGORY', 'BILL')),
  value DECIMAL(10,2) NOT NULL,
  is_percentage BOOLEAN DEFAULT true,
  min_bill_amount DECIMAL(10,2),
  brand_id UUID REFERENCES brands(id),
  category_id UUID REFERENCES categories(id),
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create bills table
CREATE TABLE bills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  subtotal DECIMAL(10,2) NOT NULL,
  discount DECIMAL(10,2) DEFAULT 0,
  tax DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('CASH', 'CARD', 'UPI')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create bill_items table
CREATE TABLE bill_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bill_id UUID REFERENCES bills(id),
  product_id UUID REFERENCES products(id),
  batch_id UUID REFERENCES batches(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  discount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE discounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bills ENABLE ROW LEVEL SECURITY;
ALTER TABLE bill_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow full access to authenticated users" ON categories
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON brands
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON products
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON batches
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON customers
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON discounts
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON bills
  FOR ALL TO authenticated USING (true);

CREATE POLICY "Allow full access to authenticated users" ON bill_items
  FOR ALL TO authenticated USING (true);

-- Create indexes for better performance
CREATE INDEX idx_products_barcode ON products(barcode);
CREATE INDEX idx_customers_phone ON customers(phone);
CREATE INDEX idx_batches_expiry ON batches(expiry_date);
CREATE INDEX idx_bills_customer ON bills(customer_id);
CREATE INDEX idx_bill_items_bill ON bill_items(bill_id);