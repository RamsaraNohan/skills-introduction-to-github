# EventiFy Project Implementation Guide
## Complete Instructions and Properties for All Pages

**Version:** 1.0  
**Last Updated:** March 2026  
**Group:** 88, Plymouth Batch 13

---

## Table of Contents

1. [Overview](#overview)
2. [Page-by-Page Specifications](#page-by-page-specifications)
3. [Common Components](#common-components)
4. [API Specifications](#api-specifications)
5. [Database Schema](#database-schema)
6. [Security Requirements](#security-requirements)
7. [UI/UX Guidelines](#uiux-guidelines)
8. [Testing Requirements](#testing-requirements)
9. [Deployment Checklist](#deployment-checklist)

---

## Overview

This guide provides complete implementation specifications for all EventiFy platform pages, including required fields, validation rules, API endpoints, and integration requirements.

### Technology Stack
- **Frontend:** React.js with HTML5, CSS3, JavaScript ES6+
- **Backend:** Node.js with Express.js
- **Database:** MySQL 8.0+
- **AI/ML:** Python with Scikit-learn
- **Payment:** Stripe/PayPal API
- **Notifications:** Twilio (SMS), Nodemailer (Email)

---

## Page-by-Page Specifications

### 1. Registration Page (`/register`)

#### Page Purpose
Allow new users to create accounts as either Clients or Vendors.

#### Required Fields

**Common Fields (All Users):**
| Field Name | Property Name | Type | Validation | Required | Max Length |
|------------|--------------|------|------------|----------|------------|
| Full Name | `fullName` | Text | Min 2 chars, letters & spaces only | Yes | 100 |
| Email Address | `email` | Email | Valid email format, unique | Yes | 255 |
| Phone Number | `phone` | Tel | Sri Lankan format: +94XXXXXXXXX or 0XXXXXXXXX | Yes | 15 |
| Password | `password` | Password | Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char | Yes | 255 |
| Confirm Password | `confirmPassword` | Password | Must match password | Yes | 255 |
| User Role | `role` | Radio | Client or Vendor | Yes | - |
| Terms Accepted | `termsAccepted` | Checkbox | Must be checked | Yes | - |

**Additional Vendor Fields:**
| Field Name | Property Name | Type | Validation | Required | Max Length |
|------------|--------------|------|------------|----------|------------|
| Business Name | `businessName` | Text | Min 2 chars | Yes | 200 |
| Service Category | `serviceCategory` | Select | One of predefined categories | Yes | - |
| Business Registration | `businessRegNo` | Text | Valid format | No | 50 |
| Location | `location` | Text | City/Area in Sri Lanka | Yes | 100 |

#### Validation Rules

**Email Validation:**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Check format
// Check uniqueness via API
```

**Password Strength:**
```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Strength indicator: Weak/Medium/Strong
```

**Phone Number:**
```javascript
const phoneRegex = /^(\+94|0)[0-9]{9}$/;
// Format: +94771234567 or 0771234567
```

#### API Endpoints

**POST** `/api/auth/register`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+94771234567",
  "password": "SecurePass123!",
  "role": "client",
  "termsAccepted": true,
  // Vendor-specific fields if role is "vendor"
  "businessName": "Elite Events",
  "serviceCategory": "venue",
  "location": "Colombo"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration successful",
  "user": {
    "userId": 1,
    "email": "john@example.com",
    "role": "client",
    "token": "jwt_token_here"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Email already exists",
    "password": "Password too weak"
  }
}
```

#### UI Components
- Role selection cards (visual buttons)
- Password strength indicator (progress bar)
- Real-time validation messages
- Success modal/notification
- Loading spinner during submission

#### State Management
```javascript
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  role: 'client',
  termsAccepted: false
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [passwordStrength, setPasswordStrength] = useState('weak');
```

---

### 2. Login Page (`/login`)

#### Page Purpose
Authenticate existing users and provide access to their accounts.

#### Required Fields

| Field Name | Property Name | Type | Validation | Required |
|------------|--------------|------|------------|----------|
| Email | `email` | Email | Valid email format | Yes |
| Password | `password` | Password | Min 8 characters | Yes |
| Remember Me | `rememberMe` | Checkbox | Optional | No |

#### API Endpoints

**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!",
  "rememberMe": true
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "userId": 1,
    "email": "john@example.com",
    "fullName": "John Doe",
    "role": "client",
    "token": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  }
}
```

#### Additional Features
- "Forgot Password" link
- Social login options (Google, Facebook) - Optional
- Account lockout after 5 failed attempts (30 min)
- CAPTCHA after 3 failed attempts

---

### 3. Event Creation Dashboard (`/dashboard/create-event`)

#### Page Purpose
Guide clients through creating and customizing their events.

#### Wizard Steps

**Step 1: Basic Information**
| Field Name | Property Name | Type | Validation | Required |
|------------|--------------|------|------------|----------|
| Event Name | `eventName` | Text | Min 3 chars, max 200 | Yes |
| Event Type | `eventType` | Select | Wedding, Corporate, Festival, etc. | Yes |
| Event Date | `eventDate` | Date | Future date only | Yes |
| Event Time | `eventTime` | Time | Valid time format | Yes |
| Location/Venue | `location` | Text | Min 5 chars | Yes |
| Estimated Budget | `budget` | Number | Min 10000 LKR | Yes |

**Step 2: Event Details**
| Field Name | Property Name | Type | Validation | Required |
|------------|--------------|------|------------|----------|
| Guest Count | `guestCount` | Number | Min 10, max 10000 | Yes |
| Event Description | `description` | Textarea | Max 1000 chars | No |
| Special Requirements | `specialRequirements` | Textarea | Max 500 chars | No |
| Event Theme | `theme` | Text | Max 100 chars | No |

**Step 3: Service Selection**
| Service Category | Property Name | Type | Selection |
|-----------------|--------------|------|-----------|
| Venue | `services.venue` | Checkbox | Optional |
| Catering | `services.catering` | Checkbox | Optional |
| Decoration | `services.decoration` | Checkbox | Optional |
| Photography | `services.photography` | Checkbox | Optional |
| Music/DJ | `services.music` | Checkbox | Optional |
| Lighting | `services.lighting` | Checkbox | Optional |
| Transportation | `services.transportation` | Checkbox | Optional |
| Entertainment | `services.entertainment` | Checkbox | Optional |

**Step 4: Review and Submit**
- Display all entered information
- Allow editing (go back to specific step)
- Save as draft option
- Final submit button

#### API Endpoints

**POST** `/api/events/create`

**Request Body:**
```json
{
  "eventName": "John's Wedding",
  "eventType": "wedding",
  "eventDate": "2026-06-15",
  "eventTime": "18:00",
  "location": "Kingsbury Hotel, Colombo",
  "budget": 500000,
  "guestCount": 200,
  "description": "Traditional wedding ceremony",
  "specialRequirements": "Vegetarian catering required",
  "theme": "Traditional Sri Lankan",
  "services": {
    "venue": true,
    "catering": true,
    "decoration": true,
    "photography": true,
    "music": false,
    "lighting": true,
    "transportation": false,
    "entertainment": false
  }
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Event created successfully",
  "event": {
    "eventId": 123,
    "eventName": "John's Wedding",
    "status": "draft",
    "createdAt": "2026-03-05T10:30:00Z"
  },
  "recommendations": {
    "recommendationId": 456,
    "totalRecommendations": 15
  }
}
```

#### Draft Saving
**POST** `/api/events/save-draft`
- Auto-save every 30 seconds
- Manual save button
- Store in localStorage as backup

#### State Management
```javascript
const [currentStep, setCurrentStep] = useState(1);
const [eventData, setEventData] = useState({
  step1: {},
  step2: {},
  step3: {},
  step4: {}
});
const [validationErrors, setValidationErrors] = useState({});
const [isAutoSaving, setIsAutoSaving] = useState(false);
```

---

### 4. Vendor Listing Page (`/vendors`)

#### Page Purpose
Display available vendors with filtering, searching, and sorting capabilities.

#### Display Components

**Vendor Card Properties:**
| Property | Type | Display | Source |
|----------|------|---------|--------|
| Vendor ID | Number | Hidden | Database |
| Business Name | String | Header | `vendor.businessName` |
| Service Category | String | Badge | `vendor.category` |
| Rating | Float | Stars (1-5) | `vendor.rating` |
| Review Count | Number | Text | `vendor.reviewCount` |
| Base Price | Number | Currency | `vendor.basePrice` |
| Location | String | Icon + Text | `vendor.location` |
| Verified Status | Boolean | Badge | `vendor.verified` |
| Profile Image | URL | Image | `vendor.profileImage` |
| Features | Array | Tags | `vendor.features` |

#### Filter Options

**Category Filter:**
```javascript
const categories = [
  { value: 'all', label: 'All Services' },
  { value: 'venue', label: 'Venues' },
  { value: 'catering', label: 'Catering' },
  { value: 'decoration', label: 'Decoration' },
  { value: 'photography', label: 'Photography' },
  { value: 'music', label: 'Music & DJ' },
  { value: 'lighting', label: 'Lighting' }
];
```

**Price Range Filter:**
```javascript
const priceRanges = [
  { min: 0, max: 50000, label: 'Under 50,000 LKR' },
  { min: 50000, max: 100000, label: '50,000 - 100,000 LKR' },
  { min: 100000, max: 200000, label: '100,000 - 200,000 LKR' },
  { min: 200000, max: 500000, label: '200,000 - 500,000 LKR' },
  { min: 500000, max: null, label: 'Above 500,000 LKR' }
];
```

**Rating Filter:**
```javascript
const ratings = [
  { value: 4.5, label: '4.5+ Stars' },
  { value: 4.0, label: '4.0+ Stars' },
  { value: 3.5, label: '3.5+ Stars' },
  { value: 3.0, label: '3.0+ Stars' }
];
```

**Location Filter:**
```javascript
const locations = [
  'Colombo', 'Gampaha', 'Kandy', 'Galle', 
  'Negombo', 'Kalutara', 'Matara', 'Kurunegala'
];
```

#### Sort Options

```javascript
const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'rating-high', label: 'Highest Rated' },
  { value: 'rating-low', label: 'Lowest Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'reviews', label: 'Most Reviews' },
  { value: 'newest', label: 'Newest First' }
];
```

#### API Endpoints

**GET** `/api/vendors`

**Query Parameters:**
```
?category=venue
&minPrice=50000
&maxPrice=200000
&rating=4.0
&location=Colombo
&search=photographer
&sort=rating-high
&page=1
&limit=12
```

**Response (200):**
```json
{
  "success": true,
  "vendors": [
    {
      "vendorId": 1,
      "businessName": "Elite Venues",
      "category": "venue",
      "rating": 4.8,
      "reviewCount": 156,
      "basePrice": 150000,
      "location": "Colombo",
      "verified": true,
      "profileImage": "/images/vendors/1.jpg",
      "features": ["Air Conditioned", "Parking", "Outdoor Space"],
      "description": "Premium wedding venue in heart of Colombo"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalResults": 58,
    "resultsPerPage": 12
  },
  "filters": {
    "applied": {
      "category": "venue",
      "location": "Colombo"
    }
  }
}
```

#### Search Functionality

**Search Algorithm:**
1. Search in business name (highest priority)
2. Search in category
3. Search in description
4. Search in features/tags
5. Fuzzy matching for typos

#### Pagination

```javascript
const pagination = {
  resultsPerPage: 12,
  maxPagesToShow: 5,
  showFirstLast: true,
  showPrevNext: true
};
```

---

### 5. Vendor Profile Page (`/vendor/:id`)

#### Page Purpose
Display detailed information about a specific vendor.

#### Page Sections

**1. Header Section:**
| Component | Properties | Display |
|-----------|-----------|---------|
| Business Name | `businessName` | H1 heading |
| Rating | `rating`, `reviewCount` | Stars + number |
| Verified Badge | `verified` | Badge if true |
| Location | `location` | Icon + text |
| Contact Button | Action | Button |
| Book Now Button | Action | Primary button |

**2. Gallery Section:**
- Profile/cover image
- Portfolio images (carousel)
- Video gallery (if available)

**3. About Section:**
| Field | Property | Type |
|-------|----------|------|
| Description | `description` | Text |
| Years in Business | `yearsInBusiness` | Number |
| Service Category | `category` | Badge |
| Specializations | `specializations` | Tags |

**4. Services & Pricing:**
| Field | Property | Type |
|-------|----------|------|
| Service Name | `services[].name` | String |
| Description | `services[].description` | Text |
| Price | `services[].price` | Currency |
| Duration | `services[].duration` | Time |

**5. Availability Calendar:**
- Interactive calendar
- Show booked dates (red)
- Show available dates (green)
- Allow date selection for inquiry

**6. Reviews Section:**
| Field | Property | Display |
|-------|----------|---------|
| Reviewer Name | `reviews[].userName` | Text |
| Rating | `reviews[].rating` | Stars |
| Review Text | `reviews[].comment` | Text |
| Date | `reviews[].date` | Date |
| Event Type | `reviews[].eventType` | Badge |

**7. Contact Information:**
| Field | Property | Display |
|-------|----------|---------|
| Phone | `phone` | Clickable (tel:) |
| Email | `email` | Clickable (mailto:) |
| Website | `website` | Link |
| Social Media | `socialMedia` | Icons |

#### API Endpoints

**GET** `/api/vendors/:id`

**Response (200):**
```json
{
  "success": true,
  "vendor": {
    "vendorId": 1,
    "businessName": "Elite Venues",
    "rating": 4.8,
    "reviewCount": 156,
    "verified": true,
    "location": "Colombo 07",
    "description": "Premium wedding venue...",
    "yearsInBusiness": 10,
    "category": "venue",
    "specializations": ["Weddings", "Corporate Events"],
    "services": [
      {
        "serviceId": 1,
        "name": "Grand Ballroom",
        "description": "Capacity: 500 guests",
        "price": 200000,
        "duration": "12 hours"
      }
    ],
    "availability": {
      "calendar": ["2026-06-15", "2026-06-22"],
      "bookedDates": ["2026-06-20"]
    },
    "reviews": [...],
    "contact": {
      "phone": "+94771234567",
      "email": "info@elitevenues.lk",
      "website": "https://elitevenues.lk"
    },
    "gallery": [
      "/images/vendor1/1.jpg",
      "/images/vendor1/2.jpg"
    ]
  }
}
```

---

### 6. Booking Management Page (`/dashboard/bookings`)

#### Page Purpose
Allow clients to view and manage their event bookings.

#### Display Columns

| Column | Property | Type | Actions |
|--------|----------|------|---------|
| Booking ID | `bookingId` | Number | Link to details |
| Event Name | `eventName` | String | Link to event |
| Vendor | `vendorName` | String | Link to vendor |
| Service | `serviceName` | String | Text |
| Booking Date | `bookingDate` | Date | Formatted date |
| Event Date | `eventDate` | Date | Formatted date |
| Amount | `amount` | Currency | LKR format |
| Deposit Paid | `depositPaid` | Boolean | Badge |
| Status | `status` | Enum | Status badge |

#### Status Types

```javascript
const bookingStatuses = {
  pending: { label: 'Pending', color: 'yellow', icon: 'clock' },
  confirmed: { label: 'Confirmed', color: 'green', icon: 'check' },
  cancelled: { label: 'Cancelled', color: 'red', icon: 'x' },
  completed: { label: 'Completed', color: 'blue', icon: 'checkCircle' },
  refunded: { label: 'Refunded', color: 'gray', icon: 'undo' }
};
```

#### Actions Available

| Action | Condition | API Endpoint |
|--------|-----------|--------------|
| View Details | Always | GET `/api/bookings/:id` |
| Pay Deposit | status = pending, depositPaid = false | POST `/api/payments/deposit` |
| Cancel Booking | status != completed/cancelled | PUT `/api/bookings/:id/cancel` |
| Contact Vendor | Always | Navigate to messaging |
| Download Receipt | depositPaid = true | GET `/api/bookings/:id/receipt` |
| Leave Review | status = completed | POST `/api/reviews/create` |

#### API Endpoints

**GET** `/api/bookings?clientId=:clientId&status=:status`

**Response (200):**
```json
{
  "success": true,
  "bookings": [
    {
      "bookingId": 101,
      "eventId": 123,
      "eventName": "John's Wedding",
      "vendorId": 1,
      "vendorName": "Elite Venues",
      "serviceId": 1,
      "serviceName": "Grand Ballroom",
      "bookingDate": "2026-03-01T10:00:00Z",
      "eventDate": "2026-06-15",
      "amount": 200000,
      "depositAmount": 40000,
      "depositPaid": true,
      "status": "confirmed",
      "notes": "Confirmed for 200 guests"
    }
  ],
  "summary": {
    "total": 5,
    "pending": 2,
    "confirmed": 2,
    "completed": 1
  }
}
```

---

### 7. Payment Page (`/payment/:bookingId`)

#### Page Purpose
Process payments for bookings (deposit or full amount).

#### Payment Information Display

| Field | Property | Display |
|-------|----------|---------|
| Booking Reference | `bookingId` | Text |
| Event Name | `eventName` | Heading |
| Vendor Name | `vendorName` | Text |
| Service Name | `serviceName` | Text |
| Total Amount | `amount` | Currency (large) |
| Deposit Amount (20%) | `depositAmount` | Currency |
| Amount Due | `amountDue` | Currency (highlighted) |

#### Payment Methods

```javascript
const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: 'creditCard',
    processors: ['Stripe', 'PayPal']
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    icon: 'bank',
    requiresManualVerification: true
  },
  {
    id: 'mobile_payment',
    name: 'Mobile Payment',
    icon: 'mobile',
    options: ['eZcash', 'mCash']
  }
];
```

#### Payment Form Fields

**For Card Payment:**
| Field | Property | Type | Validation |
|-------|----------|------|------------|
| Card Number | `cardNumber` | Text | 16 digits, Luhn algorithm |
| Card Holder | `cardHolder` | Text | Min 2 words |
| Expiry Date | `expiryDate` | Text | MM/YY format, future date |
| CVV | `cvv` | Password | 3-4 digits |
| Billing Address | `billingAddress` | Text | Min 10 chars |

#### API Endpoints

**POST** `/api/payments/process`

**Request Body:**
```json
{
  "bookingId": 101,
  "amount": 40000,
  "paymentType": "deposit",
  "paymentMethod": "card",
  "paymentDetails": {
    "cardNumber": "4111111111111111",
    "cardHolder": "John Doe",
    "expiryDate": "12/28",
    "cvv": "123",
    "billingAddress": "123 Main St, Colombo"
  }
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Payment processed successfully",
  "payment": {
    "paymentId": 789,
    "bookingId": 101,
    "amount": 40000,
    "transactionId": "TXN_20260305_789",
    "status": "completed",
    "paymentDate": "2026-03-05T10:30:00Z",
    "receiptUrl": "/receipts/789.pdf"
  }
}
```

#### Security Requirements
- SSL/TLS encryption (HTTPS only)
- PCI DSS compliance
- Tokenization of card details
- 3D Secure authentication
- Transaction logging
- Fraud detection

---

### 8. Messaging/Chat Page (`/messages`)

#### Page Purpose
Enable real-time communication between clients and vendors.

#### Layout Structure

**Sidebar (Conversation List):**
| Component | Property | Display |
|-----------|----------|---------|
| Conversation Item | `conversations[]` | List |
| Contact Name | `contactName` | Text (bold if unread) |
| Last Message | `lastMessage` | Text (truncated) |
| Timestamp | `lastMessageTime` | Relative time |
| Unread Count | `unreadCount` | Badge |
| Online Status | `isOnline` | Indicator |

**Main Chat Area:**
| Component | Property | Type |
|-----------|----------|------|
| Chat Header | `contactName`, `status` | Header bar |
| Message List | `messages[]` | Scrollable |
| Message Input | `messageText` | Textarea |
| Send Button | Action | Button |
| Attachment Button | Action | Icon button |

#### Message Properties

```javascript
const message = {
  messageId: 1,
  conversationId: 10,
  senderId: 1,
  receiverId: 2,
  content: "Hello, I'd like to inquire about...",
  timestamp: "2026-03-05T10:30:00Z",
  isRead: false,
  attachmentUrl: null,
  messageType: "text" // text, image, file
};
```

#### API Endpoints

**GET** `/api/messages/conversations`
**GET** `/api/messages/conversation/:conversationId`
**POST** `/api/messages/send`
**PUT** `/api/messages/:messageId/read`

**WebSocket Events:**
```javascript
socket.on('message:new', (message) => {
  // Handle incoming message
});

socket.on('message:read', (data) => {
  // Update read status
});

socket.on('user:typing', (data) => {
  // Show typing indicator
});
```

#### Features to Implement
- Real-time messaging (WebSocket)
- Typing indicators
- Read receipts
- File attachments (images, PDFs)
- Message search
- Conversation archiving
- Push notifications

---

### 9. Admin Dashboard (`/admin`)

#### Page Purpose
Provide system administrators with oversight and management capabilities.

#### Dashboard Metrics

| Metric | Property | Widget Type | API Endpoint |
|--------|----------|-------------|--------------|
| Total Users | `totalUsers` | Number card | GET `/api/admin/stats` |
| Active Events | `activeEvents` | Number card | GET `/api/admin/stats` |
| Total Bookings | `totalBookings` | Number card | GET `/api/admin/stats` |
| Revenue (Monthly) | `monthlyRevenue` | Currency card | GET `/api/admin/stats` |
| New Registrations | `newUsers` | Chart | GET `/api/admin/analytics` |
| Booking Trends | `bookingTrends` | Line chart | GET `/api/admin/analytics` |
| Revenue Breakdown | `revenueByCategory` | Pie chart | GET `/api/admin/analytics` |

#### Management Sections

**1. User Management:**
- List all users (clients, vendors, admins)
- Search and filter users
- View user details
- Activate/deactivate accounts
- Reset passwords
- View user activity logs

**2. Vendor Management:**
- Approve new vendor registrations
- Verify vendor credentials
- Suspend vendors
- View vendor performance metrics
- Handle vendor disputes

**3. Event Management:**
- View all events
- Monitor event status
- Handle event issues
- Generate reports

**4. Booking Management:**
- View all bookings
- Handle cancellations
- Process refunds
- Resolve disputes

**5. Payment Management:**
- View all transactions
- Process manual refunds
- Generate financial reports
- Monitor payment gateway status

**6. System Settings:**
- Configure system parameters
- Manage service categories
- Set commission rates
- Update email templates
- Configure notification settings

#### API Endpoints

**GET** `/api/admin/stats`
**GET** `/api/admin/users?role=:role&status=:status&page=:page`
**PUT** `/api/admin/users/:id/status`
**GET** `/api/admin/vendors/pending-approval`
**PUT** `/api/admin/vendors/:id/verify`
**GET** `/api/admin/analytics?period=:period`

---

### 10. User Profile Page (`/profile`)

#### Page Purpose
Allow users to view and update their profile information.

#### Profile Sections

**1. Personal Information:**
| Field | Property | Editable | Validation |
|-------|----------|----------|------------|
| Profile Picture | `profileImage` | Yes | Max 5MB, JPG/PNG |
| Full Name | `fullName` | Yes | Min 2 chars |
| Email | `email` | No | System locked |
| Phone | `phone` | Yes | Valid format |
| Date of Birth | `dateOfBirth` | Yes | Past date |
| Address | `address` | Yes | Min 10 chars |

**2. Account Settings:**
| Setting | Property | Type | Options |
|---------|----------|------|---------|
| Email Notifications | `emailNotifications` | Boolean | On/Off |
| SMS Notifications | `smsNotifications` | Boolean | On/Off |
| Language | `language` | Select | English, Sinhala, Tamil |
| Time Zone | `timeZone` | Select | Colombo (UTC+5:30) |

**3. Security:**
| Field | Property | Action |
|-------|----------|--------|
| Current Password | `currentPassword` | Change password |
| New Password | `newPassword` | Change password |
| Two-Factor Auth | `twoFactorEnabled` | Enable/Disable |
| Active Sessions | `sessions[]` | View & revoke |

**4. Vendor-Specific (if vendor):**
| Field | Property | Editable |
|-------|----------|----------|
| Business Name | `businessName` | Yes |
| Service Category | `category` | No (contact admin) |
| Business Description | `description` | Yes |
| Business Hours | `businessHours` | Yes |
| Portfolio Images | `portfolioImages` | Yes |
| Bank Account Details | `bankDetails` | Yes |

#### API Endpoints

**GET** `/api/users/profile`
**PUT** `/api/users/profile`
**PUT** `/api/users/password`
**POST** `/api/users/profile-image`
**GET** `/api/users/sessions`
**DELETE** `/api/users/sessions/:sessionId`

---

## Common Components

### Navigation Bar

**Desktop Navigation:**
```javascript
const navigation = {
  public: [
    { label: 'Home', path: '/' },
    { label: 'Browse Vendors', path: '/vendors' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],
  client: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'My Events', path: '/events' },
    { label: 'Bookings', path: '/bookings' },
    { label: 'Messages', path: '/messages' }
  ],
  vendor: [
    { label: 'Dashboard', path: '/vendor/dashboard' },
    { label: 'My Services', path: '/vendor/services' },
    { label: 'Bookings', path: '/vendor/bookings' },
    { label: 'Messages', path: '/messages' }
  ],
  admin: [
    { label: 'Admin Dashboard', path: '/admin' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Vendors', path: '/admin/vendors' },
    { label: 'Reports', path: '/admin/reports' }
  ]
};
```

### Footer

**Footer Sections:**
- Company information
- Quick links
- Contact information
- Social media links
- Newsletter subscription
- Legal links (Terms, Privacy Policy)

### Modals/Dialogs

**Confirmation Dialog:**
```javascript
const confirmationModal = {
  title: 'Confirm Action',
  message: 'Are you sure you want to proceed?',
  confirmButton: 'Yes, Continue',
  cancelButton: 'Cancel',
  onConfirm: () => {},
  onCancel: () => {}
};
```

### Loading States

```javascript
const loadingStates = {
  skeleton: 'Show skeleton loaders',
  spinner: 'Show spinner overlay',
  progress: 'Show progress bar',
  inline: 'Show inline loading indicator'
};
```

### Error Handling

```javascript
const errorDisplay = {
  toast: 'Show temporary notification',
  inline: 'Show error below field',
  modal: 'Show error modal',
  page: 'Show error page (404, 500)'
};
```

---

## API Specifications

### Base URL
```
Development: http://localhost:3000/api
Production: https://api.eventify.lk/api
```

### Authentication

**Header Format:**
```
Authorization: Bearer {jwt_token}
```

**Token Expiry:**
- Access Token: 1 hour
- Refresh Token: 30 days

**Refresh Token Endpoint:**
```
POST /api/auth/refresh
Body: { "refreshToken": "token_here" }
```

### Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2026-03-05T10:30:00Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": {}
  },
  "timestamp": "2026-03-05T10:30:00Z"
}
```

### Rate Limiting

```javascript
const rateLimits = {
  anonymous: '10 requests/minute',
  authenticated: '100 requests/minute',
  premium: '500 requests/minute'
};
```

### Pagination

**Query Parameters:**
```
?page=1&limit=20&sort=createdAt&order=desc
```

**Response Format:**
```json
{
  "data": [],
  "pagination": {
    "currentPage": 1,
    "totalPages": 10,
    "totalItems": 200,
    "itemsPerPage": 20,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  role ENUM('client', 'vendor', 'admin') NOT NULL,
  profile_image VARCHAR(255),
  date_of_birth DATE,
  address TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_role (role),
  INDEX idx_status (status)
);
```

### Clients Table

```sql
CREATE TABLE clients (
  client_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE NOT NULL,
  preferences TEXT,
  budget_range VARCHAR(50),
  event_history INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

### Vendors Table

```sql
CREATE TABLE vendors (
  vendor_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE NOT NULL,
  business_name VARCHAR(200) NOT NULL,
  category ENUM('venue', 'catering', 'decoration', 'photography', 'music', 'lighting', 'transportation', 'entertainment') NOT NULL,
  description TEXT,
  location VARCHAR(100),
  rating DECIMAL(3,2) DEFAULT 0.00,
  review_count INT DEFAULT 0,
  base_price DECIMAL(10,2),
  verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP NULL,
  years_in_business INT,
  business_reg_no VARCHAR(50),
  status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  INDEX idx_category (category),
  INDEX idx_location (location),
  INDEX idx_rating (rating),
  INDEX idx_verified (verified)
);
```

### Events Table

```sql
CREATE TABLE events (
  event_id INT PRIMARY KEY AUTO_INCREMENT,
  client_id INT NOT NULL,
  event_name VARCHAR(200) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  location VARCHAR(255) NOT NULL,
  budget DECIMAL(12,2) NOT NULL,
  guest_count INT NOT NULL,
  description TEXT,
  special_requirements TEXT,
  theme VARCHAR(100),
  status ENUM('draft', 'published', 'cancelled', 'completed') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(client_id) ON DELETE CASCADE,
  INDEX idx_client (client_id),
  INDEX idx_event_date (event_date),
  INDEX idx_status (status)
);
```

### Services Table

```sql
CREATE TABLE services (
  service_id INT PRIMARY KEY AUTO_INCREMENT,
  vendor_id INT NOT NULL,
  service_name VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  duration VARCHAR(50),
  availability BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES vendors(vendor_id) ON DELETE CASCADE,
  INDEX idx_vendor (vendor_id),
  INDEX idx_category (category)
);
```

### Bookings Table

```sql
CREATE TABLE bookings (
  booking_id INT PRIMARY KEY AUTO_INCREMENT,
  event_id INT NOT NULL,
  vendor_id INT NOT NULL,
  service_id INT NOT NULL,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  event_date DATE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  deposit_amount DECIMAL(10,2),
  deposit_paid BOOLEAN DEFAULT FALSE,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed', 'refunded') DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
  FOREIGN KEY (vendor_id) REFERENCES vendors(vendor_id) ON DELETE CASCADE,
  FOREIGN KEY (service_id) REFERENCES services(service_id) ON DELETE CASCADE,
  INDEX idx_event (event_id),
  INDEX idx_vendor (vendor_id),
  INDEX idx_status (status)
);
```

### Payments Table

```sql
CREATE TABLE payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  booking_id INT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(100) UNIQUE,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  receipt_url VARCHAR(255),
  FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE,
  INDEX idx_booking (booking_id),
  INDEX idx_transaction (transaction_id),
  INDEX idx_status (status)
);
```

### Messages Table

```sql
CREATE TABLE messages (
  message_id INT PRIMARY KEY AUTO_INCREMENT,
  sender_id INT NOT NULL,
  receiver_id INT NOT NULL,
  content TEXT NOT NULL,
  attachment_url VARCHAR(255),
  message_type ENUM('text', 'image', 'file') DEFAULT 'text',
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (receiver_id) REFERENCES users(user_id) ON DELETE CASCADE,
  INDEX idx_sender (sender_id),
  INDEX idx_receiver (receiver_id),
  INDEX idx_read (is_read)
);
```

### AI Recommendations Table

```sql
CREATE TABLE ai_recommendations (
  recommendation_id INT PRIMARY KEY AUTO_INCREMENT,
  client_id INT NOT NULL,
  vendor_id INT NOT NULL,
  event_id INT,
  score DECIMAL(5,4) NOT NULL,
  reason TEXT,
  factors JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(client_id) ON DELETE CASCADE,
  FOREIGN KEY (vendor_id) REFERENCES vendors(vendor_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE SET NULL,
  INDEX idx_client (client_id),
  INDEX idx_vendor (vendor_id),
  INDEX idx_score (score)
);
```

### Notifications Table

```sql
CREATE TABLE notifications (
  notification_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('sent', 'read', 'deleted') DEFAULT 'sent',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sent_at TIMESTAMP NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  INDEX idx_user (user_id),
  INDEX idx_status (status)
);
```

---

## Security Requirements

### Authentication & Authorization

**Password Requirements:**
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number
- At least 1 special character
- Password hashing using bcrypt (salt rounds: 10)

**JWT Token Security:**
- RS256 algorithm
- Token expiry: 1 hour
- Refresh token expiry: 30 days
- Store refresh tokens in database
- Implement token blacklist for logout

**Session Management:**
- Maximum concurrent sessions: 3
- Session timeout: 30 minutes inactivity
- Automatic logout on suspicious activity

### Data Protection

**Encryption:**
- All data in transit: TLS 1.3
- Sensitive data at rest: AES-256
- Database encryption enabled
- Secure password storage (bcrypt)

**PII Protection:**
- Mask credit card numbers (show last 4 digits)
- Hash email addresses in logs
- Secure file uploads (scan for malware)
- GDPR compliance for data handling

### Input Validation

**Client-Side:**
- HTML5 validation attributes
- JavaScript validation functions
- Real-time error messages

**Server-Side:**
- Joi/Yup schema validation
- SQL injection prevention (parameterized queries)
- XSS prevention (input sanitization)
- CSRF tokens for forms

### API Security

**Rate Limiting:**
```javascript
const rateLimits = {
  login: '5 attempts per 15 minutes',
  register: '3 attempts per hour',
  api: '100 requests per minute',
  payment: '10 requests per minute'
};
```

**CORS Configuration:**
```javascript
const corsOptions = {
  origin: ['https://eventify.lk', 'https://www.eventify.lk'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
};
```

### Payment Security

- PCI DSS Level 1 compliance
- Never store CVV codes
- Tokenize payment information
- Use 3D Secure authentication
- SSL certificate (minimum TLS 1.2)
- Regular security audits

### File Upload Security

```javascript
const fileUploadConfig = {
  maxSize: 5242880, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
  virusScan: true,
  sanitizeFilename: true,
  storageLocation: 's3://eventify-uploads/'
};
```

---

## UI/UX Guidelines

### Color Scheme

```css
:root {
  /* Primary Colors */
  --primary-50: #eef2ff;
  --primary-100: #e0e7ff;
  --primary-500: #6366f1; /* Main brand color */
  --primary-600: #4f46e5;
  --primary-700: #4338ca;

  /* Secondary Colors */
  --secondary-50: #fce7f3;
  --secondary-500: #ec4899;
  --secondary-700: #be185d;

  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-900: #111827;

  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Text Colors */
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-disabled: #9ca3af;
}
```

### Typography

```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing System

```css
:root {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.125rem;  /* 2px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;  /* Fully rounded */
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
:root {
  --breakpoint-sm: 640px;   /* Small devices (phones) */
  --breakpoint-md: 768px;   /* Medium devices (tablets) */
  --breakpoint-lg: 1024px;  /* Large devices (desktops) */
  --breakpoint-xl: 1280px;  /* Extra large devices */
  --breakpoint-2xl: 1536px; /* 2X large devices */
}
```

### Accessibility Requirements

**WCAG 2.1 AA Compliance:**
- Contrast ratio minimum 4.5:1 for normal text
- Contrast ratio minimum 3:1 for large text
- All interactive elements keyboard accessible
- Proper ARIA labels for screen readers
- Focus indicators visible (outline or shadow)
- Skip to main content link
- Alt text for all images

**Keyboard Navigation:**
- Tab order logical and intuitive
- Enter/Space for button activation
- Arrow keys for dropdown navigation
- Escape to close modals/dropdowns
- Ctrl+S to save forms (where applicable)

### Loading States

**Skeleton Loaders:**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-200) 0%,
    var(--gray-300) 50%,
    var(--gray-200) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}
```

**Spinner:**
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Animations & Transitions

```css
:root {
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Fade in */
.fade-in {
  animation: fadeIn var(--transition-base);
}

/* Slide in */
.slide-in {
  animation: slideIn var(--transition-base);
}

/* Scale in */
.scale-in {
  animation: scaleIn var(--transition-fast);
}
```

---

## Testing Requirements

### Unit Testing

**Framework:** Jest + React Testing Library

**Coverage Requirements:**
- Minimum 80% code coverage
- 100% coverage for critical paths (payment, booking)
- All utility functions tested

**Test Categories:**
```javascript
describe('Registration Form', () => {
  test('validates email format', () => {});
  test('checks password strength', () => {});
  test('submits form with valid data', () => {});
  test('shows error for duplicate email', () => {});
});
```

### Integration Testing

**Framework:** Cypress / Playwright

**Test Scenarios:**
- Complete user registration flow
- Event creation and booking flow
- Payment processing flow
- Messaging between users
- Admin approval workflow

### End-to-End Testing

**Critical User Journeys:**
1. Client registers → creates event → browses vendors → makes booking → pays deposit
2. Vendor registers → waits for approval → adds services → receives booking → confirms
3. Admin logs in → approves vendor → monitors system → generates report

### Performance Testing

**Metrics to Monitor:**
- Page load time < 3 seconds
- Time to interactive < 5 seconds
- API response time < 500ms (95th percentile)
- Database query time < 100ms
- Maximum concurrent users: 500

**Tools:**
- Lighthouse for performance audits
- Artillery for load testing
- New Relic for APM

### Security Testing

**Penetration Testing:**
- SQL injection attempts
- XSS attack vectors
- CSRF token validation
- Authentication bypass attempts
- Authorization checks
- Rate limit testing

**Tools:**
- OWASP ZAP
- Burp Suite
- Nmap for port scanning

---

## Deployment Checklist

### Pre-Deployment

**Code Quality:**
- [ ] All tests passing
- [ ] Code review completed
- [ ] No console.log statements in production
- [ ] Environment variables configured
- [ ] API keys secured in vault
- [ ] Dependencies updated and audited

**Documentation:**
- [ ] API documentation complete
- [ ] User guide written
- [ ] Admin manual created
- [ ] Deployment guide prepared

### Deployment Steps

**Backend Deployment:**
1. [ ] Database migration scripts ready
2. [ ] Backup existing database
3. [ ] Deploy to staging environment
4. [ ] Run smoke tests on staging
5. [ ] Deploy to production
6. [ ] Run health checks
7. [ ] Monitor error logs

**Frontend Deployment:**
1. [ ] Build production bundle
2. [ ] Optimize images and assets
3. [ ] Configure CDN
4. [ ] Deploy to hosting service
5. [ ] Verify all pages load
6. [ ] Test critical user flows
7. [ ] Monitor analytics

### Post-Deployment

**Monitoring:**
- [ ] Set up uptime monitoring (Pingdom, UptimeRobot)
- [ ] Configure error tracking (Sentry, Rollbar)
- [ ] Set up performance monitoring
- [ ] Configure log aggregation
- [ ] Set up alerts for critical issues

**Verification:**
- [ ] All API endpoints responding
- [ ] Database connections working
- [ ] File uploads functioning
- [ ] Email notifications sending
- [ ] SMS notifications sending
- [ ] Payment gateway active
- [ ] SSL certificate valid

**Rollback Plan:**
- [ ] Database backup accessible
- [ ] Previous version tagged in Git
- [ ] Rollback script tested
- [ ] Communication plan ready

---

## Environment Configuration

### Development Environment

```env
# Application
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=eventify_dev
DB_USER=dev_user
DB_PASSWORD=dev_password

# JWT
JWT_SECRET=dev_secret_key_change_in_production
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=30d

# Email
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_username
SMTP_PASS=your_password
EMAIL_FROM=noreply@eventify.local

# Payment (Test Mode)
STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# SMS
TWILIO_ACCOUNT_SID=ACxxx
TWILIO_AUTH_TOKEN=xxx
TWILIO_PHONE_NUMBER=+1234567890

# Storage
STORAGE_TYPE=local
UPLOAD_DIR=./uploads

# AI/ML
AI_MODEL_PATH=./models/recommendation_model.pkl
AI_API_URL=http://localhost:5000
```

### Production Environment

```env
# Application
NODE_ENV=production
PORT=3000
APP_URL=https://eventify.lk

# Database
DB_HOST=prod-db.eventify.lk
DB_PORT=3306
DB_NAME=eventify_prod
DB_USER=prod_user
DB_PASSWORD=strong_password_here

# JWT
JWT_SECRET=very_strong_secret_key_min_32_chars
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=30d

# Email
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxx
EMAIL_FROM=noreply@eventify.lk

# Payment (Live Mode)
STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# SMS
TWILIO_ACCOUNT_SID=ACxxx (production)
TWILIO_AUTH_TOKEN=xxx (production)
TWILIO_PHONE_NUMBER=+94xxx

# Storage
STORAGE_TYPE=s3
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_REGION=ap-south-1
AWS_BUCKET=eventify-uploads

# AI/ML
AI_MODEL_PATH=/opt/models/recommendation_model.pkl
AI_API_URL=https://ai.eventify.lk

# Monitoring
SENTRY_DSN=https://xxx@sentry.io/xxx
NEW_RELIC_LICENSE_KEY=xxx
```

---

## Additional Notes

### Best Practices

**Code Organization:**
- Follow MVC architecture
- Use ESLint and Prettier
- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused

**Error Handling:**
- Use try-catch blocks
- Log errors with context
- Show user-friendly messages
- Never expose stack traces to users
- Implement error boundaries (React)

**Performance:**
- Lazy load images
- Implement code splitting
- Use React.memo for expensive components
- Debounce search inputs
- Cache API responses where appropriate

**Security:**
- Sanitize all user inputs
- Validate on both client and server
- Use parameterized queries
- Implement CSRF protection
- Keep dependencies updated

### Future Enhancements

**Phase 2 Features:**
- Mobile application (React Native)
- Advanced AI recommendations (deep learning)
- Video consultations with vendors
- Social media integration
- Event templates and themes
- Multi-language support (Sinhala, Tamil)
- Augmented reality venue preview
- Blockchain for secure contracts

**Scalability Considerations:**
- Implement caching (Redis)
- Use message queues (RabbitMQ)
- Consider microservices architecture
- Implement CDN for static assets
- Database sharding for growth
- Horizontal scaling strategy

---

## Conclusion

This implementation guide provides comprehensive specifications for building the EventiFy platform. All developers should refer to this document during implementation to ensure consistency and completeness.

**For Questions or Clarifications:**
- Technical Lead: [Contact Information]
- Project Manager: [Contact Information]
- Documentation: https://docs.eventify.lk

**Version History:**
- v1.0 (March 2026) - Initial comprehensive guide

---

**Group 88, Plymouth Batch 13**  
**EventiFy - Intelligent Event Planning Platform**
