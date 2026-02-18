# EventiFy - Event Management Platform UI

This directory contains the front-end user interface components for the EventiFy platform, built according to the project report specifications.

## 📋 Components

### 1. User Registration Page (`registration.html`)
A responsive registration form with comprehensive validation features:

**Features:**
- Role selection (Client/Vendor) with visual cards
- Real-time form validation
- Password strength checker with visual feedback
- Email and phone number validation
- Conditional fields for vendor registration
- Terms and conditions checkbox
- Responsive design for all devices
- Success/error messaging

**Validation Rules:**
- Full name: Minimum 2 characters
- Email: Valid email format
- Phone: Sri Lankan format (+94 XX XXX XXXX)
- Password: Minimum 8 characters with uppercase, lowercase, and number
- Password confirmation match

### 2. Event Creation Dashboard (`dashboard.html`)
An intuitive step-by-step wizard for creating events:

**Features:**
- 4-step wizard with progress indicator
- Step 1: Basic Information (name, date, time, location, budget)
- Step 2: Event Details (type, guest count, description)
- Step 3: Service Selection (8 service categories)
- Step 4: Review and Submit
- Form validation at each step
- Auto-save draft to local storage
- Smooth animations and transitions
- Navigation between steps

**Services Available:**
- Venue & Location
- Catering & Food
- Decoration & Florals
- Photography & Videography
- Music & Entertainment
- Lighting & Sound
- Transportation
- Event Planning

### 3. Vendor Service Listing (`vendors.html`)
A comprehensive vendor browsing interface with advanced filtering:

**Features:**
- Grid layout with responsive design (3/2/1 columns)
- Advanced filtering sidebar:
  - Category filter (6 categories)
  - Price range filter (min/max)
  - Rating filter (4+, 4.5+ stars)
  - Location filter
- Search functionality
- Sort options:
  - Recommended (AI-based)
  - Highest Rated
  - Price: Low to High
  - Price: High to Low
  - Most Popular
- Vendor cards with:
  - Rating and review count
  - Service category
  - Price information
  - Features/amenities
  - Verified badge
  - Quick book button
- Pagination (6 vendors per page)
- Results count display
- No results state
- Loading states

**Sample Vendors:**
12 sample vendors across 6 categories with realistic data

## 🎨 Design Theme

**Color Scheme:**
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Success: #10b981 (Green)
- Warning: #f59e0b (Orange)
- Error: #ef4444 (Red)

**Typography:**
- Font Family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI'
- Modern, clean, and professional

**Design Principles:**
- Mobile-first responsive design
- Consistent spacing and layout
- Smooth transitions and animations
- Intuitive user experience
- Accessibility considerations

## 🛠️ Technical Stack

**Frontend:**
- HTML5 - Semantic markup
- CSS3 - Modern styling with CSS Grid and Flexbox
- Vanilla JavaScript - No framework dependencies

**Key Features:**
- Responsive design (mobile, tablet, desktop)
- CSS Variables for theming
- LocalStorage for form drafts
- Client-side validation
- No external dependencies

## 📁 File Structure

```
eventify-ui/
├── css/
│   └── styles.css          # Main stylesheet with all components
├── js/
│   ├── registration.js     # Registration form logic and validation
│   ├── dashboard.js        # Event creation wizard logic
│   └── vendors.js          # Vendor listing, filtering, and search
├── assets/                 # (Empty - for future images/icons)
├── registration.html       # User registration page
├── dashboard.html          # Event creation dashboard
├── vendors.html            # Vendor service listing
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Open in Browser:**
   - Simply open any `.html` file in a modern web browser
   - No build process or server required

2. **Test Registration:**
   - Open `registration.html`
   - Try both Client and Vendor registration flows
   - Test form validation by entering invalid data

3. **Test Event Creation:**
   - Open `dashboard.html`
   - Go through all 4 steps of the wizard
   - Try the draft save feature (refresh page and resume)

4. **Test Vendor Listing:**
   - Open `vendors.html`
   - Use filters to narrow down vendors
   - Try search functionality
   - Test sorting options
   - Navigate through pages

### Integration with Backend

When integrating with the backend API:

1. **Registration Form:**
   - Update form submission in `registration.js`
   - Replace `console.log` with API call
   - Handle API responses and errors

2. **Event Creation:**
   - Update form submission in `dashboard.js`
   - Send event data to backend API
   - Redirect to appropriate page on success

3. **Vendor Listing:**
   - Replace sample data in `vendors.js` with API calls
   - Implement real-time filtering via API
   - Add authentication headers

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px (3-column grid)
- **Tablet:** 768px - 1024px (2-column grid)
- **Mobile:** < 768px (1-column grid, simplified filters)

## ✅ Browser Compatibility

Tested and compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔒 Security Features

- Client-side validation (not a replacement for server-side)
- Password strength checker
- Input sanitization guidance
- HTTPS recommended for production
- No sensitive data stored in localStorage

## 🎯 Alignment with Project Report

These UI components are built according to specifications in:
- **Section 3.3:** Functional Requirements
- **Section 4.3:** Usability Requirements
- **Section 5.1:** System Architecture (Presentation Layer)
- **Chapter 7:** Implementation Progress

## 📝 Future Enhancements

- Add authentication and session management
- Integrate with backend APIs
- Add real-time notifications
- Implement AI recommendation visualization
- Add vendor booking calendar
- Payment gateway integration
- Email/SMS verification
- User dashboard with event history
- Vendor dashboard for service management
- Admin panel for system oversight

## 📞 Support

For questions or issues related to these UI components, refer to:
- Project documentation in `docs/interim-report/`
- System architecture diagrams
- ER diagram for data relationships

## 📄 License

Part of the EventiFy project - PUSL2021 Computing Group Project
Group 88, Plymouth Batch 13

---

**Note:** These are prototype UI components for demonstration and development purposes. All features should be thoroughly tested and secured before production deployment.
