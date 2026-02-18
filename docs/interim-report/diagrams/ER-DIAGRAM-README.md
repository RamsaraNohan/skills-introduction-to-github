# EventiFy ER Diagram - Appendix C

## Entity Relationship Diagram for EventiFy System

**Project:** EventiFy - An Intelligent Web Platform for Automated Event Planning and Coordination  
**Group:** Group 88  
**Institution:** Plymouth University, Batch 13  
**Date:** February 2026

---

## Overview

This document provides a comprehensive Entity-Relationship (ER) diagram for the EventiFy system, as referenced in **Section 5.3** of the interim report. The ER diagram illustrates the database structure, entities, attributes, and relationships that form the foundation of the EventiFy platform.

---

## Diagram Files

The ER diagram is available in multiple formats:

1. **PlantUML Format** - `er-diagram.puml`
   - Editable source file for generating diagrams
   - Can be rendered using PlantUML tools
   - Suitable for technical documentation

2. **Mermaid Format** - `er-diagram-mermaid.md`
   - GitHub-compatible markdown format
   - Renders directly in GitHub
   - Interactive and viewable in markdown viewers

3. **Image Formats** (to be generated)
   - PNG for presentations and documents
   - SVG for high-quality scalable graphics
   - PDF for printing

---

## Entities

### 1. User (Base Entity)
**Description:** Base entity for all system users

**Attributes:**
- `userID` (PK) - Unique identifier
- `name` - User's full name
- `email` (UNIQUE) - User's email address
- `password` - Hashed password
- `role` - User role: 'client', 'vendor', or 'admin'
- `phone` - Contact phone number
- `createdAt` - Account creation timestamp
- `updatedAt` - Last update timestamp

**Relationships:**
- One user creates many events (as Client)
- One user sends/receives many messages
- One user receives many notifications

---

### 2. Client (Extends User)
**Description:** Event organizers who plan events

**Attributes:**
- `clientID` (PK) - Unique client identifier
- `userID` (FK) - Reference to User entity
- `preferences` - Client preferences (JSON)
- `budget` - Available budget
- `eventHistory` - Past events information

**Relationships:**
- One client creates many events
- One client receives many AI recommendations

---

### 3. Vendor (Extends User)
**Description:** Service providers for events

**Attributes:**
- `vendorID` (PK) - Unique vendor identifier
- `userID` (FK) - Reference to User entity
- `businessName` - Vendor business name
- `category` - Service category
- `rating` - Average vendor rating
- `status` - Account status (active/inactive)
- `verifiedAt` - Verification timestamp

**Relationships:**
- One vendor offers many services
- One vendor receives many bookings
- One vendor appears in many AI recommendations

---

### 4. Admin (Extends User)
**Description:** System administrators

**Attributes:**
- `adminID` (PK) - Unique admin identifier
- `userID` (FK) - Reference to User entity
- `permissions` - Admin permissions (JSON)
- `lastLoginAt` - Last login timestamp

---

### 5. Event
**Description:** Events created by clients

**Attributes:**
- `eventID` (PK) - Unique event identifier
- `clientID` (FK) - Reference to Client
- `eventName` - Name of the event
- `eventDate` - Date of the event
- `location` - Event location
- `budget` - Event budget
- `guestCount` - Number of guests
- `status` - Event status: 'planning', 'confirmed', 'completed', 'cancelled'
- `description` - Event details
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

**Relationships:**
- One event has many bookings
- One client creates many events

---

### 6. Service
**Description:** Services offered by vendors

**Attributes:**
- `serviceID` (PK) - Unique service identifier
- `vendorID` (FK) - Reference to Vendor
- `category` - Service category
- `serviceName` - Service name
- `description` - Service description
- `price` - Service price
- `availability` - Availability status
- `duration` - Service duration
- `createdAt` - Creation timestamp

**Relationships:**
- One vendor offers many services
- One service can be booked many times

---

### 7. Booking (Junction Table)
**Description:** Links events with vendors and services

**Attributes:**
- `bookingID` (PK) - Unique booking identifier
- `eventID` (FK) - Reference to Event
- `vendorID` (FK) - Reference to Vendor
- `serviceID` (FK) - Reference to Service
- `bookingDate` - Date of booking
- `status` - Booking status: 'pending', 'confirmed', 'cancelled', 'completed'
- `amount` - Booking amount
- `depositPaid` - Deposit payment status
- `notes` - Additional notes
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

**Relationships:**
- Many events to many vendors (M:N relationship)
- One booking has one payment
- One booking references one service

---

### 8. Payment
**Description:** Payment transactions for bookings

**Attributes:**
- `paymentID` (PK) - Unique payment identifier
- `bookingID` (FK) - Reference to Booking
- `amount` - Payment amount
- `paymentMethod` - Method: 'card', 'bank_transfer', 'cash'
- `status` - Payment status: 'pending', 'completed', 'failed', 'refunded'
- `transactionID` - External transaction reference
- `paymentDate` - Payment timestamp
- `receiptURL` - Receipt document URL

**Relationships:**
- One payment belongs to one booking (1:1 relationship)

---

### 9. Message
**Description:** Communication between users

**Attributes:**
- `messageID` (PK) - Unique message identifier
- `senderID` (FK) - Reference to sender User
- `receiverID` (FK) - Reference to receiver User
- `content` - Message content
- `timestamp` - Message timestamp
- `isRead` - Read status
- `attachmentURL` - Optional attachment URL

**Relationships:**
- Self-referencing M:N relationship between Users
- One user sends many messages
- One user receives many messages

---

### 10. AIRecommendation
**Description:** AI-generated vendor recommendations

**Attributes:**
- `recommendationID` (PK) - Unique recommendation identifier
- `clientID` (FK) - Reference to Client
- `vendorID` (FK) - Reference to Vendor
- `score` - Recommendation score
- `reason` - Recommendation reasoning
- `factors` - Contributing factors (JSON)
- `createdAt` - Creation timestamp

**Relationships:**
- Many-to-many relationship between Clients and Vendors
- One client receives many recommendations
- One vendor appears in many recommendations

---

### 11. Notification
**Description:** System notifications to users

**Attributes:**
- `notificationID` (PK) - Unique notification identifier
- `userID` (FK) - Reference to User
- `type` - Notification type: 'email', 'sms', 'in-app'
- `message` - Notification message
- `status` - Notification status: 'pending', 'sent', 'failed'
- `createdAt` - Creation timestamp
- `sentAt` - Sent timestamp

**Relationships:**
- One user receives many notifications

---

## Relationships Summary

### Primary Relationships:

1. **User → Event** (1:M via Client)
   - One client creates multiple events
   - Cardinality: 1:M
   - FK: Event.clientID → Client.clientID

2. **Event → Vendor** (M:N via Booking)
   - Events require multiple vendors
   - Vendors serve multiple events
   - Cardinality: M:N
   - Junction: Booking table

3. **Vendor → Service** (1:M)
   - One vendor offers multiple services
   - Cardinality: 1:M
   - FK: Service.vendorID → Vendor.vendorID

4. **Booking → Payment** (1:1)
   - Each booking has one payment
   - Cardinality: 1:1
   - FK: Payment.bookingID → Booking.bookingID

5. **User → Message** (M:N self-referencing)
   - Users send messages to other users
   - Cardinality: M:N (self)
   - FK: Message.senderID, Message.receiverID → User.userID

6. **Client → Vendor** (M:N via AIRecommendation)
   - Clients receive vendor recommendations
   - Vendors appear in multiple recommendations
   - Cardinality: M:N
   - Junction: AIRecommendation table

7. **User → Notification** (1:M)
   - One user receives multiple notifications
   - Cardinality: 1:M
   - FK: Notification.userID → User.userID

---

## Key Design Decisions

### 1. User Inheritance
The system uses a **specialization hierarchy** with User as the base entity:
- Client, Vendor, and Admin extend User
- Each inherits common attributes (userID, name, email, etc.)
- Specific attributes are stored in respective tables
- Enables role-based access control

### 2. Junction Tables
**Booking Table:**
- Resolves M:N relationship between Events and Vendors
- Stores additional booking-specific information
- Links to Service for specific service booking

**AIRecommendation Table:**
- Resolves M:N relationship between Clients and Vendors
- Stores AI algorithm scoring and reasoning
- Enables recommendation tracking and improvement

### 3. Self-Referencing Relationship
**Message Table:**
- Self-referencing relationship on User entity
- Two foreign keys (senderID, receiverID) point to User
- Enables user-to-user communication

### 4. One-to-One Relationship
**Booking → Payment:**
- Each booking has exactly one payment
- Payment cannot exist without booking
- Ensures payment integrity

---

## Database Constraints

### Primary Keys (PK)
- All entities have unique primary key
- Auto-incrementing integers for scalability
- Ensures entity uniqueness

### Foreign Keys (FK)
- Enforce referential integrity
- Cascade rules for deletions:
  - User deletion → Cascade to Client/Vendor/Admin
  - Event deletion → Cascade to Bookings
  - Booking deletion → Cascade to Payment
  - Vendor deletion → Set NULL for Recommendations (preserve history)

### Unique Constraints
- User.email - Prevents duplicate accounts
- Additional business logic constraints in application layer

### Check Constraints
- Event.status - Valid enum values
- Payment.status - Valid enum values
- Booking.status - Valid enum values
- Rating values - Between 0 and 5

---

## Normalization

The database schema is normalized to **Third Normal Form (3NF):**

1. **First Normal Form (1NF):**
   - All attributes contain atomic values
   - No repeating groups
   - Each table has a primary key

2. **Second Normal Form (2NF):**
   - Meets 1NF requirements
   - No partial dependencies
   - All non-key attributes depend on entire primary key

3. **Third Normal Form (3NF):**
   - Meets 2NF requirements
   - No transitive dependencies
   - All non-key attributes depend only on primary key

**JSON Fields:**
- Used for flexible data (preferences, permissions, factors)
- Does not violate normalization for semi-structured data
- Allows schema flexibility for evolving requirements

---

## Indexing Strategy

### Primary Indexes
- All primary keys automatically indexed
- Ensures fast lookups by ID

### Foreign Key Indexes
- All foreign keys indexed
- Improves join performance
- Speeds up referential integrity checks

### Additional Indexes
```sql
-- User table
CREATE INDEX idx_user_email ON User(email);
CREATE INDEX idx_user_role ON User(role);

-- Event table
CREATE INDEX idx_event_client ON Event(clientID);
CREATE INDEX idx_event_date ON Event(eventDate);
CREATE INDEX idx_event_status ON Event(status);

-- Booking table
CREATE INDEX idx_booking_event ON Booking(eventID);
CREATE INDEX idx_booking_vendor ON Booking(vendorID);
CREATE INDEX idx_booking_status ON Booking(status);

-- Service table
CREATE INDEX idx_service_vendor ON Service(vendorID);
CREATE INDEX idx_service_category ON Service(category);

-- Message table
CREATE INDEX idx_message_sender ON Message(senderID);
CREATE INDEX idx_message_receiver ON Message(receiverID);
CREATE INDEX idx_message_timestamp ON Message(timestamp);

-- AIRecommendation table
CREATE INDEX idx_ai_client ON AIRecommendation(clientID);
CREATE INDEX idx_ai_vendor ON AIRecommendation(vendorID);
CREATE INDEX idx_ai_score ON AIRecommendation(score);
```

---

## Sample Queries

### Query 1: Get all events for a client with vendor bookings
```sql
SELECT 
    e.eventID,
    e.eventName,
    e.eventDate,
    v.businessName AS vendorName,
    s.serviceName,
    b.status AS bookingStatus,
    p.status AS paymentStatus
FROM Event e
JOIN Client c ON e.clientID = c.clientID
LEFT JOIN Booking b ON e.eventID = b.eventID
LEFT JOIN Vendor v ON b.vendorID = v.vendorID
LEFT JOIN Service s ON b.serviceID = s.serviceID
LEFT JOIN Payment p ON b.bookingID = p.bookingID
WHERE c.userID = ?
ORDER BY e.eventDate DESC;
```

### Query 2: Get AI recommendations for a client
```sql
SELECT 
    v.businessName,
    v.category,
    v.rating,
    r.score,
    r.reason
FROM AIRecommendation r
JOIN Vendor v ON r.vendorID = v.vendorID
WHERE r.clientID = ?
ORDER BY r.score DESC
LIMIT 10;
```

### Query 3: Get vendor availability and services
```sql
SELECT 
    v.businessName,
    s.serviceName,
    s.price,
    s.availability,
    COUNT(b.bookingID) AS totalBookings
FROM Vendor v
JOIN Service s ON v.vendorID = s.vendorID
LEFT JOIN Booking b ON s.serviceID = b.serviceID 
    AND b.status = 'confirmed'
WHERE v.category = ?
GROUP BY v.vendorID, s.serviceID
HAVING s.availability = TRUE;
```

---

## Security Considerations

### Data Protection
- Passwords stored with bcrypt hashing (never plain text)
- Sensitive financial data encrypted at rest
- Personal information access logged for audit

### Access Control
- Role-based access via User.role
- Admin permissions stored in Admin.permissions JSON
- API endpoints validate user role before data access

### Data Integrity
- Foreign key constraints prevent orphaned records
- Transaction management for payment operations
- Booking status validation at application level

---

## Scalability Considerations

### Horizontal Scaling
- Database partitioning by date for Events
- Sharding by userID for User-related tables
- Read replicas for query-heavy operations

### Performance Optimization
- Connection pooling (10 connections)
- Query result caching for recommendations
- Pagination for large result sets
- Lazy loading of relationships

### Future Enhancements
- Archive old events to separate tables
- Implement full-text search indexes
- Add caching layer (Redis) for frequent queries
- Consider NoSQL for Message table at scale

---

## Conclusion

This ER diagram provides a comprehensive, normalized, and scalable database design for the EventiFy platform. The design:

✅ Supports all functional requirements  
✅ Ensures data integrity through constraints  
✅ Enables efficient querying through indexing  
✅ Allows for future growth and modifications  
✅ Follows database design best practices  

The schema is optimized for both transactional operations (bookings, payments) and analytical queries (recommendations, reporting).

---

## References

- **Section 5.2:** Class Diagram (entity details)
- **Section 5.3:** ER Diagram specification
- **Chapter 03:** Requirements Specification (functional requirements)
- **Chapter 06:** Technology Stack (MySQL selection)

---

**Document Version:** 1.0  
**Last Updated:** 18th February 2026  
**Status:** Complete - Ready for implementation
