// Revenue data for area chart (monthly)
export const revenue = [32000, 48000, 42000, 55000, 46000, 58000, 65000, 60000, 75000, 68000, 72000, 84000];

// Categories data for bar chart
export const categories = [
  { name: 'Electronics', value: 54200 },
  { name: 'Clothing', value: 42800 },
  { name: 'Home', value: 38500 },
  { name: 'Beauty', value: 28900 },
  { name: 'Other', value: 16800 }
];

// Traffic sources for donut chart
export const trafficSources = [
  { name: 'Direct', value: 40 },
  { name: 'Social', value: 25 },
  { name: 'Search', value: 20 },
  { name: 'Referral', value: 10 },
  { name: 'Email', value: 5 }
];

// Recent activity data
export const recentActivity = [
  {
    description: 'New order placed',
    details: 'Order #38294 - $299.99',
    timestamp: new Date().getTime() - 1000 * 60 * 10, // 10 minutes ago
    type: 'success'
  },
  {
    description: 'Payment failed',
    details: 'Customer: john.doe@example.com',
    timestamp: new Date().getTime() - 1000 * 60 * 30, // 30 minutes ago
    type: 'error'
  },
  {
    description: 'New user signed up',
    details: 'sarah.smith@example.com',
    timestamp: new Date().getTime() - 1000 * 60 * 55, // 55 minutes ago
    type: 'success'
  },
  {
    description: 'Subscription upgraded',
    details: 'Basic to Pro plan',
    timestamp: new Date().getTime() - 1000 * 60 * 120, // 2 hours ago
    type: 'success'
  },
  {
    description: 'Low inventory alert',
    details: 'Product ID: 5839 (3 left)',
    timestamp: new Date().getTime() - 1000 * 60 * 180, // 3 hours ago
    type: 'warning'
  },
  {
    description: 'New review received',
    details: '★★★★★ for Product ID: 2984',
    timestamp: new Date().getTime() - 1000 * 60 * 240, // 4 hours ago
    type: 'success'
  }
];

// User data for user table
export const users = [
  {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    status: 'active',
    spent: 5840,
    conversion: 68
  },
  {
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    status: 'active',
    spent: 4620,
    conversion: 75
  },
  {
    name: 'Michael Brown',
    email: 'michael@example.com',
    status: 'inactive',
    spent: 3200,
    conversion: 42
  },
  {
    name: 'Emma Davis',
    email: 'emma@example.com',
    status: 'active',
    spent: 6100,
    conversion: 81
  },
  {
    name: 'James Wilson',
    email: 'james@example.com',
    status: 'active',
    spent: 3840,
    conversion: 56
  },
  {
    name: 'Olivia Taylor',
    email: 'olivia@example.com',
    status: 'inactive',
    spent: 2100,
    conversion: 38
  }
];