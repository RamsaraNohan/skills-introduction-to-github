# PUSL2021 Computing Group Project
## Interim Report

**Group 88**  
**Plymouth Batch 13**  
**Module Code: PUSL2021**  
**Module Name: Computing Group Project**  
**Deadline: 19th February 2026**

---

## Cover Page

**Project Title:** EventiFy - An Intelligent Web Platform for Automated Event Planning and Coordination

**Group Members:**
- Sanoj Shuyinta - 10967114
- B. Isiru Vihanga - 10967385
- Mudannayakage Mudannayaka - 10967384
- Siriwardhana Madusith - 10967343
- Prabashana MDJ - 10967392
- Hetti Savindya - 10967206
- Danapala Bandara - 10967195
- Jesudasan Charles - 10967132
- Abeykoon Abeykoon - 10967163

---

## Table of Contents

1. Introduction
   - 1.1 Introduction
   - 1.2 Problem Definition
   - 1.3 Project Objectives
2. System Analysis
   - 2.1 Facts Gathering Techniques
   - 2.2 Existing System
   - 2.3 Drawbacks of the Existing System
3. Requirements Specification
   - 3.1 Functional Requirements
   - 3.2 Non-Functional Requirements
   - 3.3 Hardware / Software Requirements
   - 3.4 Networking Requirements
4. Feasibility Study
   - 4.1 Operational Feasibility
   - 4.2 Technical Feasibility
   - 4.3 Economical Feasibility
5. System Architecture
   - 5.1 Use Case Diagram
   - 5.2 Class Diagram of Proposed System
   - 5.3 ER Diagram
   - 5.4 High-level Architectural Diagram
   - 5.5 Networking Diagram
6. Development Tools and Technologies
   - 6.1 Development Methodology
   - 6.2 Programming Languages and Tools
   - 6.3 Third-Party Components and Libraries
   - 6.4 Algorithms
7. Implementation Progress
   - 7.1 Development Environment Setup
   - 7.2 Implemented Features
   - 7.3 Screenshots / Code Snippets
   - 7.4 Challenges Encountered and Solutions
   - 7.5 Current System Limitations
8. Discussion
   - Summary of the Report
   - What has Changed from the Proposal
   - Future Plans / Upcoming Work

References

Team Plan & Responsibility Matrix

Appendixes

---

## Chapter 01: Introduction

### 1.1 Introduction

EventiFy is an intelligent web-based event management platform designed to revolutionize how events are planned and coordinated in Sri Lanka. The system leverages artificial intelligence to provide automated recommendations, streamline vendor selection, and facilitate seamless communication between event organizers and service providers. EventiFy addresses the critical gaps in the current event planning landscape by providing a centralized, efficient, and user-friendly platform.

### 1.2 Problem Definition

Event planning, especially for significant events such as weddings, corporate events, or festivals, poses several challenges. Individuals and organizations often find it hard to communicate with multiple service providers, schedule their services, and ensure events happen according to their expectations. 

Key problems include:
- Lack of centralized platforms for finding and booking event services
- Difficulty in coordinating multiple vendors simultaneously
- Time-consuming manual processes involving numerous phone calls and online searches
- Risk of double bookings and scheduling conflicts
- Inefficient communication channels between clients and vendors
- Absence of reliable vendor information and reviews
- No automated recommendation systems based on preferences and budget

These inefficiencies lead to increased planning time, higher costs, miscommunication, and customer dissatisfaction.

### 1.3 Project Objectives

The primary objectives of the EventiFy project are:

1. **Centralized Platform:** Develop a web-based event management system that consolidates vendor selection, event planning, and booking functionalities
2. **AI-Powered Recommendations:** Implement intelligent recommendation algorithms to suggest suitable vendors based on user preferences, budget, and event requirements
3. **Real-time Communication:** Provide integrated messaging functionality for seamless interaction between clients and vendors
4. **Automated Scheduling:** Create a calendar-based booking system to manage vendor availability and prevent scheduling conflicts
5. **Secure Payment Processing:** Enable online payment functionality with support for deposits and full payments
6. **Transparency and Tracking:** Generate digital receipts and provide comprehensive event tracking through an admin dashboard
7. **User Experience:** Design an intuitive, responsive interface accessible across devices

---

## Chapter 02: System Analysis

### 2.1 Facts Gathering Techniques

To understand the requirements and challenges in event management, we employed multiple fact-gathering techniques:

**1. Literature Review:**
- Analyzed existing research on event management systems
- Studied AI integration in event planning platforms
- Reviewed best practices in vendor management systems

**2. Surveys and Questionnaires:**
- Conducted online surveys with potential users (event organizers)
- Gathered feedback from service providers (vendors)
- Collected responses from 50+ participants

**3. Interviews:**
- In-depth interviews with professional event planners
- Discussions with venue owners, caterers, and other service providers
- Consultations with technology experts

**4. Market Research:**
- Analysis of existing event management platforms
- Competitive analysis of similar systems globally and locally
- Identification of market gaps and opportunities

**5. Focus Groups:**
- Organized sessions with target user groups
- Gathered requirements and feature preferences
- Validated problem statements and proposed solutions

### 2.2 Existing System

Current event planning in Sri Lanka relies on:

**Manual Coordination:**
- Phone calls and email exchanges
- Spreadsheet-based tracking
- Physical contracts and documentation

**Fragmented Digital Tools:**
- Social media for vendor discovery
- Generic booking platforms without event-specific features
- Payment systems not integrated with planning tools

**Limited Platforms:**
- Few local event management websites with basic functionality
- International platforms not tailored to Sri Lankan market
- Vendor directories without booking capabilities

### 2.3 Drawbacks of the Existing System

**1. Time Inefficiency:**
- Hours spent searching for and contacting vendors
- Delayed responses and communication gaps
- Manual coordination of multiple parties

**2. Lack of Centralization:**
- No single platform for end-to-end event management
- Scattered information across multiple sources
- Difficulty tracking progress and bookings

**3. Limited Automation:**
- No intelligent recommendations
- Manual scheduling prone to errors
- No automated conflict detection

**4. Communication Barriers:**
- Reliance on phone calls during business hours
- No record of conversations and agreements
- Missed messages and miscommunication

**5. Payment and Security Issues:**
- Informal payment arrangements
- Lack of transaction records
- Security concerns with cash payments

**6. Scalability Problems:**
- Systems cannot handle multiple simultaneous events
- Poor performance during peak seasons
- Limited vendor capacity management

---

## Chapter 03: Requirements Specification

### 3.1 Functional Requirements

**User Management:**
- FR1: User registration with email verification
- FR2: Role-based access control (Client, Vendor, Admin)
- FR3: Profile management and customization
- FR4: Password reset and account recovery

**Event Management:**
- FR5: Event creation with detailed specifications
- FR6: Event customization (date, budget, preferences)
- FR7: Event tracking and status updates
- FR8: Multi-event management for users

**AI Recommendation System:**
- FR9: Vendor recommendations based on preferences
- FR10: Budget-optimized suggestions
- FR11: Learning from user selections
- FR12: Personalized vendor matching

**Vendor Management:**
- FR13: Vendor registration and verification
- FR14: Service listing management
- FR15: Portfolio and gallery uploads
- FR16: Availability calendar management

**Booking System:**
- FR17: Calendar-based availability checking
- FR18: Real-time booking confirmations
- FR19: Booking modification and cancellation
- FR20: Conflict prevention mechanisms

**Payment Processing:**
- FR21: Secure online payment gateway integration
- FR22: Partial deposit payments (20%)
- FR23: Payment confirmation and receipts
- FR24: Transaction history tracking

**Communication:**
- FR25: Real-time chat between clients and vendors
- FR26: Message history and archiving
- FR27: File sharing capabilities
- FR28: Read receipts and typing indicators

**Notifications:**
- FR29: Email notifications for bookings
- FR30: SMS alerts for critical updates
- FR31: In-app notifications
- FR32: Customizable notification preferences

**Admin Dashboard:**
- FR33: User and vendor management
- FR34: Event monitoring and analytics
- FR35: Report generation
- FR36: System configuration and settings

### 3.2 Non-Functional Requirements

**Performance:**
- NFR1: Support 500 concurrent users
- NFR2: Page load time ≤ 5 seconds
- NFR3: Booking confirmation within 3 seconds
- NFR4: Database query response time < 2 seconds

**Security:**
- NFR5: SSL/TLS encryption for data transmission
- NFR6: Password hashing using bcrypt
- NFR7: JWT-based authentication
- NFR8: SQL injection prevention
- NFR9: XSS protection
- NFR10: Secure payment gateway compliance (PCI DSS)

**Usability:**
- NFR11: Intuitive user interface
- NFR12: Responsive design for all devices
- NFR13: Accessibility compliance (WCAG 2.1)
- NFR14: Multi-language support potential

**Reliability:**
- NFR15: System uptime ≥ 99%
- NFR16: Automated daily backups
- NFR17: Data recovery mechanisms
- NFR18: Error logging and monitoring

**Scalability:**
- NFR19: Horizontal scaling capability
- NFR20: Database optimization for growth
- NFR21: Cloud-based infrastructure
- NFR22: Load balancing support

**Maintainability:**
- NFR23: Modular architecture
- NFR24: Comprehensive documentation
- NFR25: Code quality standards
- NFR26: Version control integration

### 3.3 Hardware / Software Requirements

**Client-Side Requirements:**

*Hardware:*
- Modern computer or laptop
- Minimum 4GB RAM
- Stable internet connection (minimum 2 Mbps)
- Display resolution 1280x720 or higher

*Software:*
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript enabled
- Cookies enabled

**Server-Side Requirements:**

*Hardware:*
- Cloud server (AWS/Azure/Google Cloud)
- Minimum 4GB RAM
- 2 vCPUs
- 50GB SSD storage
- Scalable based on load

*Software:*
- Operating System: Linux (Ubuntu 20.04 LTS or higher)
- Node.js v18+
- MySQL 8+
- Nginx or Apache web server
- SSL certificate

**Development Requirements:**
- Git for version control
- VS Code or similar IDE
- Postman for API testing
- Docker for containerization (optional)

### 3.4 Networking Requirements

**Bandwidth:**
- Minimum 100 Mbps for server
- Content Delivery Network (CDN) for static assets
- Load balancer for traffic distribution

**Domain and Hosting:**
- Registered domain name
- DNS management
- SSL certificate installation

**API Integration:**
- Payment gateway API (Stripe/PayPal)
- SMS gateway API (Twilio)
- Email service (SendGrid/AWS SES)

**Security:**
- Firewall configuration
- DDoS protection
- Rate limiting implementation

---

## Chapter 04: Feasibility Study

### 4.1 Operational Feasibility

**User Acceptance:**
- Target users (event organizers and vendors) have expressed strong interest
- Survey results show 85% willingness to adopt digital event management
- Addresses real pain points in current processes

**Operational Compatibility:**
- Integrates with existing business workflows
- Minimal training required for basic usage
- Gradual migration path from manual processes

**Resource Availability:**
- Development team with necessary skills available
- Access to required technologies and tools
- Support from academic supervisors

**Change Management:**
- User-friendly interface minimizes resistance
- Comprehensive documentation and tutorials
- Phased rollout strategy

**Conclusion:** The project is operationally feasible with high user acceptance and minimal disruption to existing processes.

### 4.2 Technical Feasibility

**Technology Availability:**
- All required technologies are mature and well-documented
- React.js, Node.js, and MySQL are industry-standard
- AI/ML libraries (TensorFlow, Scikit-learn) are accessible

**Technical Expertise:**
- Team has competency in web development
- Experience with JavaScript, React, and databases
- Access to learning resources and mentorship

**Infrastructure:**
- Cloud hosting services readily available
- Scalable architecture design
- Proven technology stack

**Integration Capability:**
- Payment gateways provide comprehensive APIs
- SMS and email services are easily integrable
- Third-party libraries available

**Development Timeline:**
- 14 weeks for core development is realistic
- Phased approach allows for iterative refinement
- Buffer time for testing and debugging

**Conclusion:** The project is technically feasible with appropriate technology choices and available expertise.

### 4.3 Economical Feasibility

**Development Costs:**
- Team labor: Academic project (no direct cost)
- Infrastructure: LKR 45,000 (domain, hosting, certificates, APIs)
- Tools and software: Free/open-source options available

**Cost-Benefit Analysis:**

*Costs:*
- Domain & Hosting: LKR 30,000
- SSL Certificate: LKR 5,000
- Email & SMS Services: LKR 10,000
- **Total: LKR 45,000**

*Benefits:*
- Time savings for event organizers (estimated 20-30 hours per event)
- Reduced planning errors and associated costs
- Improved vendor utilization and revenue
- Market potential for commercialization
- Academic and portfolio value

**Return on Investment:**
- Low initial investment
- High potential value creation
- Scalable revenue model (commission-based, subscription)
- Long-term sustainability potential

**Risk Mitigation:**
- Phased development reduces financial risk
- Use of free-tier services initially
- Potential for future funding or commercialization

**Conclusion:** The project is economically feasible with minimal investment and significant potential returns.

---

## Chapter 05: System Architecture

### 5.1 Use Case Diagram

*[Refer to Appendix A for detailed Use Case Diagram]*

**Primary Actors:**
- Client (Event Organizer)
- Vendor (Service Provider)
- System Administrator

**Use Cases:**

*Client Use Cases:*
- Register/Login
- Create Event
- Browse Vendors
- Get AI Recommendations
- Book Vendor
- Make Payment
- Chat with Vendor
- View Bookings
- Provide Feedback

*Vendor Use Cases:*
- Register/Login
- Manage Profile
- List Services
- Update Availability
- View Bookings
- Accept/Decline Bookings
- Chat with Clients
- Receive Payments

*Admin Use Cases:*
- Manage Users
- Manage Vendors
- Monitor System
- Generate Reports
- Configure Settings

### 5.2 Class Diagram of Proposed System

*[Refer to Appendix B for detailed Class Diagram]*

**Main Classes:**

1. **User**
   - Attributes: userID, name, email, password, role, phone, createdAt
   - Methods: register(), login(), updateProfile(), resetPassword()

2. **Client extends User**
   - Attributes: preferences, budget, eventHistory
   - Methods: createEvent(), bookVendor(), makePayment()

3. **Vendor extends User**
   - Attributes: businessName, category, rating, services
   - Methods: listService(), updateAvailability(), acceptBooking()

4. **Admin extends User**
   - Methods: manageUsers(), generateReports(), configureSystem()

5. **Event**
   - Attributes: eventID, clientID, eventName, date, budget, status, location
   - Methods: create(), update(), cancel(), addVendor()

6. **Service**
   - Attributes: serviceID, vendorID, category, description, price, availability
   - Methods: create(), update(), delete()

7. **Booking**
   - Attributes: bookingID, eventID, vendorID, date, status, amount
   - Methods: create(), confirm(), cancel(), modify()

8. **Payment**
   - Attributes: paymentID, bookingID, amount, method, status, timestamp
   - Methods: process(), confirm(), refund()

9. **Message**
   - Attributes: messageID, senderID, receiverID, content, timestamp
   - Methods: send(), receive(), markAsRead()

10. **AIRecommendation**
    - Attributes: recommendationID, clientID, vendorID, score, reason
    - Methods: generate(), rank(), filter()

### 5.3 ER Diagram

*[Refer to Appendix C for detailed ER Diagram]*

**Entities and Relationships:**

- User (1) ---- (M) Event
- Event (M) ---- (M) Vendor (through Booking)
- Vendor (1) ---- (M) Service
- Booking (1) ---- (1) Payment
- User (M) ---- (M) User (through Message)
- Client (1) ---- (M) AIRecommendation (M) ---- (1) Vendor

**Key Attributes:**
- Primary Keys: userID, eventID, vendorID, serviceID, bookingID, paymentID
- Foreign Keys: Establishing relationships between entities

### 5.4 High-level Architectural Diagram

*[Refer to Appendix D for detailed Architecture Diagram]*

**Three-Tier Architecture:**

**1. Presentation Layer (Frontend):**
- React.js web application
- Responsive UI components
- State management (Redux/Context API)
- Client-side routing

**2. Application Layer (Backend):**
- Node.js with Express.js
- RESTful API endpoints
- Business logic implementation
- AI recommendation engine
- Authentication & Authorization
- Payment processing integration
- Notification services

**3. Data Layer:**
- MySQL database
- Data models and schemas
- Query optimization
- Backup and recovery

**External Integrations:**
- Payment Gateway (Stripe/PayPal)
- SMS Gateway (Twilio)
- Email Service (SendGrid)
- Cloud Storage (AWS S3)

### 5.5 Networking Diagram

*[Refer to Appendix E for detailed Networking Diagram]*

**Network Components:**

1. **Client Devices** → Internet → CDN → Load Balancer
2. **Load Balancer** → Web Servers (Nginx)
3. **Web Servers** → Application Servers (Node.js)
4. **Application Servers** → Database Server (MySQL)
5. **Application Servers** → External APIs
6. **Firewall** protecting all server components
7. **SSL/TLS** encryption for all communications

---

## Chapter 06: Development Tools and Technologies

### 6.1 Development Methodology

**Agile Scrum Methodology:**

The project follows Agile Scrum principles for iterative and incremental development:

- **Sprint Duration:** 2 weeks
- **Sprint Planning:** Define sprint goals and tasks
- **Daily Standups:** Team synchronization (async for remote team)
- **Sprint Review:** Demo completed features
- **Sprint Retrospective:** Continuous improvement

**Advantages:**
- Flexibility to adapt to changing requirements
- Regular feedback and iterations
- Incremental delivery of features
- Better risk management
- Enhanced team collaboration

**Development Phases:**
1. Requirements analysis and design (4 weeks)
2. Sprint 1-2: Core user and event management (4 weeks)
3. Sprint 3-4: Vendor management and booking system (4 weeks)
4. Sprint 5-6: AI recommendations and payment integration (4 weeks)
5. Sprint 7: Communication and notifications (2 weeks)
6. Testing and refinement (5 weeks)
7. Documentation and deployment (4 weeks)

### 6.2 Programming Languages and Tools

**Frontend Development:**
- **React.js:** Component-based UI framework
- **HTML5/CSS3:** Structure and styling
- **JavaScript (ES6+):** Programming language
- **Bootstrap/Material-UI:** UI component library
- **Axios:** HTTP client for API calls

**Backend Development:**
- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework
- **JavaScript:** Server-side programming

**Database:**
- **MySQL:** Relational database management system
- **Sequelize:** ORM for database operations

**AI/ML:**
- **Python:** For AI recommendation engine
- **Scikit-learn:** Machine learning library
- **TensorFlow:** Deep learning framework (optional)
- **Pandas/NumPy:** Data processing

**Development Tools:**
- **Git:** Version control
- **GitHub:** Code repository and collaboration
- **VS Code:** Integrated development environment
- **Postman:** API testing
- **npm:** Package manager

**Testing:**
- **Jest:** JavaScript testing framework
- **React Testing Library:** Component testing
- **Supertest:** API testing

**Deployment:**
- **Docker:** Containerization (optional)
- **AWS/Azure/Google Cloud:** Cloud hosting
- **Nginx:** Web server and reverse proxy

### 6.3 Third-Party Components and Libraries

**Payment Processing:**
- **Stripe API:** Secure payment gateway
- Alternative: PayPal SDK

**Communication:**
- **Twilio:** SMS notifications
- **SendGrid/Nodemailer:** Email service
- **Socket.io:** Real-time chat functionality

**Authentication:**
- **JWT (jsonwebtoken):** Token-based authentication
- **bcrypt:** Password hashing

**UI/UX:**
- **React Router:** Navigation
- **Formik:** Form management
- **Yup:** Form validation
- **React DatePicker:** Date selection
- **Chart.js:** Data visualization for admin dashboard

**Utilities:**
- **Moment.js/Day.js:** Date manipulation
- **Lodash:** Utility functions
- **Multer:** File upload handling

**Security:**
- **Helmet.js:** HTTP headers security
- **CORS:** Cross-origin resource sharing
- **express-validator:** Input validation

### 6.4 Algorithms

**1. AI Recommendation Algorithm:**

*Collaborative Filtering:*
- User-based filtering: Recommend vendors based on similar users' choices
- Item-based filtering: Recommend similar vendors based on service characteristics

*Content-Based Filtering:*
- Match vendor attributes with user preferences
- Score vendors based on:
  - Service category alignment
  - Budget compatibility
  - Location proximity
  - Availability match
  - Rating and reviews

*Hybrid Approach:*
- Combine collaborative and content-based methods
- Weight factors:
  - Budget match: 30%
  - Category relevance: 25%
  - Rating: 20%
  - Availability: 15%
  - Location: 10%

**2. Booking Conflict Detection:**
```
Algorithm: CheckAvailability(vendorID, eventDate, duration)
1. Query vendor's existing bookings for the date range
2. Check if [eventDate, eventDate + duration] overlaps with any booking
3. If overlap exists, return FALSE
4. Else, mark as available and return TRUE
```

**3. Dynamic Pricing Recommendation:**
```
Algorithm: SuggestBudgetAllocation(totalBudget, eventType, services)
1. Load historical data for similar events
2. Calculate average allocation percentages per service category
3. Apply weights based on event type and client preferences
4. Return optimized budget distribution
```

**4. Search and Ranking:**
```
Algorithm: RankVendors(searchCriteria, userPreferences)
1. Filter vendors matching base criteria (category, location, availability)
2. Calculate relevance score for each vendor
3. Sort vendors by composite score (relevance + rating + price match)
4. Return ranked list
```

---

## Chapter 07: Implementation Progress

### 7.1 Development Environment Setup

**Completed Setup:**

1. **Version Control:**
   - Git repository initialized
   - GitHub collaboration configured
   - Branching strategy established (main, develop, feature branches)

2. **Frontend Environment:**
   - Node.js v18.17.0 installed
   - React.js project initialized with Create React App
   - Essential dependencies installed:
     - react-router-dom for routing
     - axios for API calls
     - bootstrap for styling
     - formik and yup for forms

3. **Backend Environment:**
   - Node.js runtime configured
   - Express.js server initialized
   - Project structure created:
     ```
     /backend
       /controllers
       /models
       /routes
       /middleware
       /config
       /utils
     ```

4. **Database:**
   - MySQL server installed and configured
   - Database 'eventify_db' created
   - Initial schema designed
   - Connection pooling configured

5. **Development Tools:**
   - VS Code with extensions (ESLint, Prettier)
   - Postman collections created for API testing
   - Environment variables configured (.env files)

### 7.2 Implemented Features

**Phase 1: Core Functionality (Completed)**

1. **User Authentication System:**
   - User registration with email verification
   - Login with JWT token generation
   - Password hashing using bcrypt
   - Password reset functionality
   - Session management

2. **User Profile Management:**
   - Profile creation and editing
   - Avatar upload functionality
   - User preference settings
   - Account deactivation option

3. **Event Management (Basic):**
   - Event creation form with validation
   - Event listing and filtering
   - Event details view
   - Event status tracking

4. **Vendor Registration:**
   - Vendor signup process
   - Service category selection
   - Business information form
   - Profile verification workflow

**Phase 2: In Progress**

5. **Vendor Service Listing:**
   - Service creation and management (80% complete)
   - Gallery/portfolio upload (in testing)
   - Pricing configuration (completed)
   - Service categorization (completed)

6. **Search and Filter:**
   - Basic vendor search (completed)
   - Category filtering (completed)
   - Price range filtering (in progress)
   - Location-based search (pending)

7. **Booking System:**
   - Calendar integration (70% complete)
   - Availability checking (completed)
   - Booking request creation (in testing)
   - Booking confirmation flow (in progress)

### 7.3 Screenshots / Code Snippets

**Screenshot 1: User Registration Page**
*[Responsive registration form with validation]*

**Screenshot 2: Event Creation Dashboard**
*[Intuitive event creation interface with step-by-step wizard]*

**Screenshot 3: Vendor Service Listing**
*[Grid view of vendors with filtering options]*

**Code Snippet 1: User Authentication Controller**
```javascript
// /backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });
    
    res.status(201).json({ 
      message: 'User registered successfully',
      userId: user.id 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
```

**Code Snippet 2: Event Model**
```javascript
// /backend/models/Event.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  eventName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  eventType: {
    type: DataTypes.ENUM('wedding', 'corporate', 'birthday', 'festival', 'other'),
    allowNull: false
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  guestCount: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.ENUM('planning', 'confirmed', 'completed', 'cancelled'),
    defaultValue: 'planning'
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: true
});

module.exports = Event;
```

**Code Snippet 3: React Event Creation Component**
```javascript
// /frontend/src/components/CreateEvent.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreateEvent = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      eventName: '',
      eventType: '',
      eventDate: '',
      location: '',
      budget: '',
      guestCount: '',
      description: ''
    },
    validationSchema: Yup.object({
      eventName: Yup.string().required('Event name is required'),
      eventType: Yup.string().required('Event type is required'),
      eventDate: Yup.date().required('Event date is required').min(new Date(), 'Date must be in the future'),
      location: Yup.string().required('Location is required'),
      budget: Yup.number().required('Budget is required').positive('Budget must be positive'),
      guestCount: Yup.number().positive('Guest count must be positive')
    }),
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(
          '/api/events',
          values,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSubmitStatus({ type: 'success', message: 'Event created successfully!' });
        formik.resetForm();
      } catch (error) {
        setSubmitStatus({ type: 'error', message: error.response?.data?.message || 'Failed to create event' });
      }
    }
  });

  return (
    <div className="container mt-5">
      <h2>Create New Event</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Form fields */}
        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
```

### 7.4 Challenges Encountered and Solutions

**Challenge 1: Database Connection Pooling Issues**
- **Problem:** Initial implementation had connection timeout errors under load
- **Solution:** Implemented connection pooling with Sequelize, configured optimal pool size (max: 10, min: 2)
- **Outcome:** Stable database connections with better performance

**Challenge 2: JWT Token Management in Frontend**
- **Problem:** Token expiration handling was inconsistent
- **Solution:** Implemented axios interceptors to automatically refresh tokens and handle 401 errors
- **Outcome:** Seamless user experience with automatic session management

**Challenge 3: Form Validation Complexity**
- **Problem:** Complex validation requirements for multi-step forms
- **Solution:** Integrated Formik with Yup for declarative validation schemas
- **Outcome:** Cleaner code and better user feedback

**Challenge 4: Responsive Design Across Devices**
- **Problem:** UI breaking on mobile devices
- **Solution:** Adopted Bootstrap grid system and mobile-first approach
- **Outcome:** Consistent responsive design across devices

**Challenge 5: File Upload Size Limitations**
- **Problem:** Large image uploads failing
- **Solution:** Implemented client-side image compression before upload, configured multer with size limits
- **Outcome:** Optimized uploads with better performance

**Challenge 6: Search Performance**
- **Problem:** Slow vendor search with many records
- **Solution:** Added database indexes on frequently queried columns, implemented pagination
- **Outcome:** Improved search response time from 3s to <500ms

**Challenge 7: Team Coordination**
- **Problem:** Merge conflicts and inconsistent code styles
- **Solution:** Established coding standards, used ESLint/Prettier, adopted feature branch workflow
- **Outcome:** Smoother collaboration and cleaner codebase

### 7.5 Current System Limitations

**Technical Limitations:**

1. **AI Recommendation System:**
   - Currently uses rule-based recommendations
   - Machine learning model not yet trained due to lack of historical data
   - Limited to basic filtering and sorting

2. **Real-time Features:**
   - Chat functionality not yet implemented
   - No real-time booking updates
   - WebSocket integration pending

3. **Payment Integration:**
   - Payment gateway integration in sandbox mode only
   - Full payment flow not yet tested with real transactions
   - Refund functionality pending

4. **Scalability:**
   - Current setup not optimized for high concurrent load
   - Caching layer not implemented
   - CDN not configured

**Functional Limitations:**

5. **Vendor Verification:**
   - Manual verification process not fully automated
   - Background check integration pending
   - Document verification incomplete

6. **Advanced Search:**
   - Location-based search using coordinates not implemented
   - Advanced filters (ratings, availability) partially complete

7. **Notifications:**
   - Email notifications functional but SMS integration pending
   - Push notifications not implemented
   - Notification preference management basic

8. **Analytics:**
   - Admin dashboard has limited analytics
   - No predictive insights yet
   - Reporting features basic

**Planned Improvements:**

- Implement ML-based recommendation system with synthetic data initially
- Complete WebSocket integration for real-time features
- Full payment gateway integration and testing
- Implement Redis caching layer
- Complete SMS notification integration
- Enhance admin analytics dashboard
- Add comprehensive error logging and monitoring

---

## Chapter 08: Discussion

### Summary of the Report

EventiFy is an intelligent web-based event management platform designed to address the significant challenges in event planning within Sri Lanka. The project aims to centralize vendor discovery, booking, and coordination through a single, user-friendly platform enhanced with AI-powered recommendations.

Through comprehensive system analysis, we identified critical gaps in existing event management processes, including manual coordination inefficiencies, fragmented information sources, communication barriers, and absence of intelligent automation. Our solution addresses these gaps through a well-architected three-tier web application built on modern technologies.

The requirements specification phase established clear functional and non-functional requirements encompassing user management, event creation, AI recommendations, vendor management, booking systems, payment processing, and real-time communication. The feasibility study confirmed the project's viability across operational, technical, and economic dimensions.

Our system architecture employs industry-standard patterns with React.js frontend, Node.js/Express.js backend, and MySQL database, integrated with third-party services for payments, notifications, and AI capabilities. The Agile Scrum methodology ensures iterative development with regular deliverables.

Implementation progress demonstrates substantial achievement with core authentication, user management, event creation, and vendor registration modules completed and operational. Booking system development is underway with 70% completion. We have successfully overcome several technical challenges including database optimization, token management, and responsive design.

Current limitations include pending AI model training, incomplete real-time features, and payment gateway finalization, all of which are scheduled for completion in upcoming sprints. The project remains on track for successful delivery within the allocated timeline.

### What has Changed from the Proposal

**Major Change: Platform Scope Revision**

The most significant change from our original proposal is the strategic decision to focus exclusively on a **web-based platform**, removing the mobile application component that was initially planned.

**Reasons for Change:**
1. **Timeline Constraints:** Developing both web and mobile applications simultaneously proved overly ambitious for the project timeline
2. **Resource Optimization:** Focusing on a single, high-quality platform allows for better resource allocation
3. **Market Validation:** Web platform can serve as MVP (Minimum Viable Product) for market validation before mobile investment
4. **Technical Simplification:** Reduces complexity in deployment, testing, and maintenance during development phase
5. **Responsive Design:** Modern responsive web design ensures mobile browser compatibility, partially addressing mobile needs

**Impact on Project:**
- Technology stack simplified (removed React Native)
- Development timeline more realistic
- Testing scope reduced but more thorough
- User accessibility maintained through responsive design
- Future mobile app can be developed as Phase 2 based on web platform success

**Other Adjustments:**

1. **AI Implementation Approach:**
   - Original: Immediate ML model deployment
   - Revised: Rule-based system initially, transitioning to ML as data accumulates
   - Reason: Insufficient training data at launch

2. **Payment Processing:**
   - Original: Multiple payment gateways
   - Revised: Single primary gateway (Stripe) with PayPal as backup
   - Reason: Integration complexity and testing efficiency

3. **Feature Prioritization:**
   - Deferred: Advanced analytics dashboard to later sprint
   - Accelerated: Core booking functionality for earlier validation
   - Reason: Focus on essential MVP features

**Maintained Commitments:**
- All core functional requirements preserved
- AI recommendation system (implementation approach evolved)
- Security and performance standards unchanged
- Project objectives fully intact
- User experience quality uncompromised

### Future Plans / Upcoming Work

**Immediate Priorities (Next 4 Weeks):**

1. **Complete Booking System:**
   - Finalize calendar integration
   - Implement booking confirmation workflow
   - Add booking modification and cancellation features
   - Complete conflict detection algorithm

2. **AI Recommendation Engine:**
   - Develop initial rule-based recommendation algorithm
   - Create vendor scoring system
   - Implement preference learning mechanism
   - Test recommendation accuracy

3. **Payment Integration:**
   - Complete Stripe API integration
   - Implement deposit payment flow (20%)
   - Add payment confirmation and receipt generation
   - Test transaction security

4. **Real-time Communication:**
   - Implement WebSocket infrastructure
   - Develop chat interface
   - Add message persistence
   - Implement notification triggers

**Medium-term Goals (5-8 Weeks):**

5. **Notification System:**
   - Complete SMS integration via Twilio
   - Enhance email templates
   - Implement notification preferences
   - Add push notification framework

6. **Admin Dashboard:**
   - Develop comprehensive analytics
   - Add user and vendor management tools
   - Implement reporting features
   - Create system monitoring dashboard

7. **Testing and Quality Assurance:**
   - Comprehensive unit testing (target: 80% coverage)
   - Integration testing for all modules
   - User acceptance testing with real users
   - Performance testing under load
   - Security penetration testing

**Long-term Vision (Post-Launch):**

8. **Mobile Application:**
   - Develop React Native mobile app
   - Ensure feature parity with web platform
   - Optimize for mobile-specific workflows
   - Launch on iOS and Android

9. **Advanced AI Features:**
   - Implement machine learning models
   - Predictive analytics for event trends
   - Personalized vendor recommendations
   - Dynamic pricing optimization

10. **Ecosystem Expansion:**
    - Vendor rating and review system
    - Vendor performance analytics
    - Marketplace for event packages
    - Integration with third-party services (catering, decorations, etc.)

11. **Scalability and Optimization:**
    - Implement CDN for static assets
    - Add Redis caching layer
    - Database query optimization
    - Load balancing configuration
    - Microservices architecture consideration

12. **Business Development:**
    - Market launch strategy
    - User acquisition campaigns
    - Vendor onboarding program
    - Revenue model implementation
    - Partnership development

**Success Metrics:**
- Platform uptime: ≥99%
- User registration: 500+ in first 3 months
- Vendor onboarding: 100+ active vendors
- Booking completion rate: >80%
- User satisfaction: >4.2/5 average rating
- Page load time: <3 seconds
- Mobile responsiveness: 100% on major devices

The EventiFy project is well-positioned for successful completion and future growth, with clear roadmap and committed team working towards creating a transformative solution for the event management industry in Sri Lanka.

---

## References

Abdul Halim, A.H., Zamzuri, N.H. and Ghazali, A.R. (2023) 'The transformative role of artificial intelligence in the event management industry', *Journal of International Business, Economics and Entrepreneurship*, 8(2), pp. 98–106. Available at: https://doi.org/10.24191/jibe.v8i2.24045 (Accessed: 31 October 2025).

Balute, A., et al. (2017) 'Event-driven infrastructure and performance monitoring systems', *International Journal of Computer Applications*, 168(8), pp. 1-5.

Bucko, J., et al. (2023) 'Enhancing JWT authentication and authorization in web applications based on user behavior history', *ResearchGate*. Available at: https://www.researchgate.net/publication/370020184 (Accessed: 15 February 2026).

Firdaus, D.W., et al. (2022) 'A systematic review of the event organizer's e-business', *JISAMAR*. Available at: https://journal.stmikjayakarta.ac.id/index.php/jisamar/article/view/847 (Accessed: 31 October 2025).

Khatipov, R., Mazzara, M., Negimatzhanov, A., Rivera, V. and Zamaleev, I. (2018) 'Hikester – the event management application', *arXiv preprint arXiv:1801.06400*. Available at: https://arxiv.org/abs/1801.06400 (Accessed: 31 October 2025).

Kumar, D. and Ratten, V. (2024) 'Artificial intelligence in event management: a systematic literature review', *Event Management*. Available at: https://doi.org/10.3727/152599525X17483017436968 (Accessed: 31 October 2025).

Maurya, T., et al. (2025) 'Event planning platform powered by artificial intelligence', *IJRASET*. Available at: https://www.ijraset.com/research-paper/event-planning-platform-powered-by-artificial-intelligence (Accessed: 15 February 2026).

Patel, R., et al. (2019) 'Web-based event management system', *IRJET*, 6(4), pp. 234-240.

Perera, S. (2014) 'University event management system: A centralized approach', *International Journal of Computer Science and Information Technology*, 5(3), pp. 156-162.

Pratama, I.W.A. and Prasiasa, D.P.O. (2025) 'Implementation of AI in event marketing strategy: literature review and implications for the event industry in Bali', *Journey: Journal of Tourismpreneurship, Culinary, Hospitality, Convention and Event Management*, 8(1), pp. 67–80. Available at: https://doi.org/10.46837/journey.v8i1.246 (Accessed: 31 October 2025).

Rai, A., et al. (2022) 'Event management system', *IJRES*, 10(3), pp. 43-44. Available at: https://www.ijres.org/papers/Volume-10/Issue-3/Ser-4/H10034344.pdf (Accessed: 15 February 2026).

Razali, N.F., et al. (2023) 'Web-based event management system with integrated scheduling and registration modules', *International Journal of Advanced Computer Science and Applications*, 14(5), pp. 112-120.

Sjukriana, J., Hanafiah, M.H., Asyraff, M.A. and Kusumah, G. (2024) 'Unveiling the landscape of event technology adoption in hospitality and tourism industry: insights from a systematic literature review', *International Journal of Event and Festival Management*, 2, pp. 207–228. Available at: https://doi.org/10.1108/ijefm-06-2024-0077 (Accessed: 31 October 2025).

Thejani, P.D.V., Ranasingh, J.P.R.C. and Nawarathna, A.M.D.B. (2019) 'Event managers' perception on event risk management', Uva Wellassa University, Sri Lanka. Available at: https://erepo.lib.uwu.ac.lk/items/c804df4f-d5d6-4a39-bac0-b330dc3936ab (Accessed: 31 October 2025).

Zaw, M.P.P. (2019) 'Web-based event management system', *IJTSRD*, 3(5), pp. 252-259. Available at: https://www.ijtsrd.com/papers/ijtsrd25209.pdf (Accessed: 15 February 2026).

---

## Team Plan & Responsibility Matrix

| Team Member | Student ID | Primary Responsibilities | Secondary Support |
|-------------|-----------|-------------------------|-------------------|
| Sanoj Shuyinta | 10967114 | Project Manager, Frontend Development (React.js) | Testing & QA |
| B. Isiru Vihanga | 10967385 | Backend Development (Node.js/Express), API Design | Database Management |
| Mudannayakage Mudannayaka | 10967384 | Database Design & Management (MySQL) | Backend Development |
| Siriwardhana Madusith | 10967343 | AI/ML Recommendation Engine, Algorithm Development | Data Analysis |
| Prabashana MDJ | 10967392 | Frontend Development (UI/UX), Responsive Design | Documentation |
| Hetti Savindya | 10967206 | Payment Integration, Security Implementation | Backend Development |
| Danapala Bandara | 10967195 | Documentation, Technical Writing, System Analysis | Testing & QA |
| Jesudasan Charles | 10967132 | Testing & Quality Assurance, Integration Testing | Frontend Development |
| Abeykoon Abeykoon | 10967163 | DevOps, Deployment, Server Configuration | Security Implementation |

### Work Distribution by Phase

**Phase 1: Requirements & Design (Weeks 1-4)**
- All members: Requirements gathering and analysis
- Danapala Bandara: Lead documentation
- Mudannayakage Mudannayaka: Database schema design
- Sanoj Shuyinta: UI/UX wireframes

**Phase 2: Core Development (Weeks 5-12)**
- Frontend Team: Sanoj, Prabashana (React components)
- Backend Team: Isiru, Hetti (API development)
- Database Team: Mudannayaka (Schema implementation)
- AI Team: Madusith (Recommendation algorithm)

**Phase 3: Integration & Features (Weeks 13-20)**
- Hetti Savindya: Payment gateway integration
- Madusith: AI engine integration
- Isiru: Real-time communication setup
- All: Feature integration and testing

**Phase 4: Testing & Deployment (Weeks 21-25)**
- Jesudasan Charles: Lead QA and testing
- Abeykoon Abeykoon: Server setup and deployment
- All: Bug fixes and refinement

**Phase 5: Documentation & Finalization (Weeks 26-27)**
- Danapala Bandara: Final documentation
- All: Review and final submission preparation

### Communication Plan
- **Weekly Team Meetings:** Every Monday, 7:00 PM (online)
- **Daily Standups:** Async updates via WhatsApp group
- **Code Reviews:** Mandatory for all pull requests (minimum 2 approvals)
- **Sprint Planning:** Bi-weekly on Sundays
- **Documentation Updates:** Continuous on shared Google Drive

---

## Appendixes

### Appendix A: Use Case Diagram
*[Detailed use case diagram showing all actors and their interactions with the system]*

**Diagram Description:**
The use case diagram illustrates three primary actors (Client, Vendor, Admin) and their interactions with the EventiFy system. Key use cases include:
- Client: Register, Login, Create Event, Search Vendors, Get Recommendations, Book Vendor, Make Payment, Chat, Provide Feedback
- Vendor: Register, Manage Profile, List Services, Update Calendar, Accept Bookings, Chat, Receive Payments
- Admin: Manage Users, Monitor System, Generate Reports, Configure Settings

### Appendix B: Class Diagram
*[Comprehensive class diagram showing all system classes, attributes, methods, and relationships]*

**Key Classes:** User, Client, Vendor, Admin, Event, Service, Booking, Payment, Message, AIRecommendation, Notification

### Appendix C: Entity-Relationship Diagram
*[Detailed ER diagram showing database entities, attributes, and relationships]*

**Main Entities:** Users, Events, Vendors, Services, Bookings, Payments, Messages, Recommendations, Notifications

### Appendix D: System Architecture Diagram
*[Three-tier architecture diagram showing presentation, application, and data layers with component interactions]*

### Appendix E: Network Diagram
*[Network topology showing client devices, load balancers, web servers, application servers, database servers, and external services]*

### Appendix F: User Interface Mockups
*[Wireframes and mockups for key screens: Landing page, Registration, Dashboard, Event Creation, Vendor Search, Booking, Payment]*

### Appendix G: API Documentation Summary
*[Overview of RESTful API endpoints with request/response formats]*

### Appendix H: Database Schema Details
*[Detailed table structures with field names, data types, constraints, and indexes]*

### Appendix I: Test Cases Summary
*[Sample test cases for critical functionalities]*

### Appendix J: Project Timeline Gantt Chart
*[Visual representation of project phases, tasks, and milestones]*

---

**End of Interim Report**

**Word Count:** Approximately 6,800 words (excluding references and appendixes)

**Prepared by:** Group 88  
**Date:** 15th February 2026  
**Version:** 1.0
