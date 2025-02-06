
// Product Schema (Inventory Management)
export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Home Textiles', value: 'home_textiles' }
        ]
      }
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string'
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Like New', value: 'like_new' },
          { title: 'Good', value: 'good' },
          { title: 'Worn', value: 'worn' }
        ]
      }
    },
    {
      name: 'availableStock',
      title: 'Available Stock',
      type: 'number'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }] 
    }
  ]
}

// Order Schema (Order Processing)
export const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string'
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string'
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string'
    },
    {
      name: 'productsOrdered',
      title: 'Products Ordered',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }]
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'string'
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Completed', value: 'completed' }
        ]
      }
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' }
        ]
      }
    }
  ]
}

// EcoPoints Schema (EcoPoints System Integration)
export const ecoPointsSchema = {
  name: 'ecoPoints',
  title: 'EcoPoints',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string'
    },
    {
      name: 'pointsBalance',
      title: 'Points Balance',
      type: 'number'
    },
    {
      name: 'transactionHistory',
      title: 'Transaction History',
      type: 'array',
      of: [{ type: 'ecoPointTransaction' }]
    }
  ]
}

// EcoPointTransaction Schema (Individual Transaction Record)
export const ecoPointTransactionSchema = {
  name: 'ecoPointTransaction',
  title: 'EcoPoint Transaction',
  type: 'object',
  fields: [
    {
      name: 'transactionDate',
      title: 'Transaction Date',
      type: 'datetime'
    },
    {
      name: 'pointsChanged',
      title: 'Points Changed',
      type: 'number'
    },
    {
      name: 'transactionType',
      title: 'Transaction Type',
      type: 'string',
      options: {
        list: [
          { title: 'Earned', value: 'earned' },
          { title: 'Spent', value: 'spent' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}

// Payment Schema (Payment Integration)
export const paymentSchema = {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string'
    },
    {
      name: 'paymentGateway',
      title: 'Payment Gateway',
      type: 'string',
      options: {
        list: [
          { title: 'Stripe', value: 'stripe' },
          { title: 'Bank Transfer', value: 'bank_transfer' }
        ]
      }
    },
    {
      name: 'paymentAmount',
      title: 'Payment Amount',
      type: 'number'
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' },
          { title: 'Failed', value: 'failed' }
        ]
      }
    },
    {
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime'
    }
  ]
}

// Shipping Schema (Shipping Information)
export const shippingSchema = {
  name: 'shipping',
  title: 'Shipping',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string'
    },
    {
      name: 'shippingMethod',
      title: 'Shipping Method',
      type: 'string'
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string'
    },
    {
      name: 'shippingStatus',
      title: 'Shipping Status',
      type: 'string',
      options: {
        list: [
          { title: 'Not Shipped', value: 'not_shipped' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' }
        ]
      }
    },
    {
      name: 'shippingDate',
      title: 'Shipping Date',
      type: 'datetime'
    }
  ]
}

// User Schema (User Authentication & Profile)
export const userSchema = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string'
    },
    {
      name: 'profile',
      title: 'Profile',
      type: 'object',
      fields: [
        {
          name: 'firstName',
          title: 'First Name',
          type: 'string'
        },
        {
          name: 'lastName',
          title: 'Last Name',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string'
        },
        {
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string'
        }
      ]
    }
  ]
}
