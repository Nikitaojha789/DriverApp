import { OrderStatus } from "./type";

export const stepTitles = [
  'Personal Information',
  'Business Information',
  'Document Verification',
  'Payment Details',
  'Service Details',
];

export const bankNames = [
  'State Bank of India (SBI)',
  'HDFC Bank',
  'ICICI Bank',
  'Axis Bank',
  'Punjab National Bank (PNB)',
  'Bank of Baroda',
  'Canara Bank',
  'Kotak Mahindra Bank',
  'Union Bank of India',
  'Indian Bank',
];



export const IN_PROGRESS = [
  {
    id: '1',
    orderId: 'DL2026-020',
    dateTime: 'Jan 15, 2026 • 1:30 PM',
    restaurantAddress: 'Pizza Hub, Downtown',
    customerAddress: '12 Main Street',
    distance: '2.1 km',
    amount: '$6.50',
    status: OrderStatus.IN_PROGRESS,
  },
]

export const COMPLETED_ORDERS = [
  {
    id: '2',
    orderId: 'DL2026-012',
    dateTime: 'Jan 12, 2026 • 2:30 PM',
    restaurantAddress: 'Hollywoodbets, Downtown',
    customerAddress: '456 Customer St',
    distance: '3.5 km',
    amount: '$8.50',
    status: OrderStatus.COMPLETED,
  },
]

export const CANCELLED_ORDERS = [
  {
    id: '3',
    orderId: 'DL2026-015',
    dateTime: 'Jan 10, 2026 • 11:00 AM',
    restaurantAddress: 'Cafe Rio',
    customerAddress: '22 Park Lane',
    distance: '1.2 km',
    amount: '$4.00',
    status: OrderStatus.CANCELLED,
  },
]

export const orders = [
  {
    orderId: 'DL2026-012',
    dateTime: 'Jan 12, 2026 • 2:30 PM',
    restaurantAddress: 'DL2026-Hollywoodbets, Downtown',
    customerAddress: '456 Customer St, Uptown',
    distance: '3.5 km',
    amount: '$8.50',
    status: OrderStatus.COMPLETED,
  },
  {
    orderId: 'DL2026-013',
    dateTime: 'Jan 13, 2026 • 4:10 PM',
    restaurantAddress: 'Food Plaza',
    customerAddress: '789 Main St',
    distance: '2.1 km',
    amount: '$6.20',
    status: OrderStatus.IN_PROGRESS,
  },
  {
    orderId: 'DL2026-014',
    dateTime: 'Jan 14, 2026 • 1:00 PM',
    restaurantAddress: 'Burger House',
    customerAddress: '123 Park Ave',
    distance: '5.0 km',
    amount: '$10.00',
    status: OrderStatus.CANCELLED,
  },
];

