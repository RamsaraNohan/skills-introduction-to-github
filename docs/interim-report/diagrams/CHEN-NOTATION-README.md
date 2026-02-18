# Traditional Chen Notation ER Diagram

## EventiFy System - Chen Style ER Diagram

**Following:** GeeksforGeeks ER Model Style  
**Notation:** Traditional Chen Notation  
**Group:** Group 88, Plymouth Batch 13

---

## 🎨 Chen Notation Elements

The traditional Chen notation (as taught in most database courses) uses specific shapes for different elements:

### Notation Guide

| Symbol | Element | Color | Description |
|--------|---------|-------|-------------|
| **Rectangle** | Entity | Light Blue | Represents an entity set |
| **Diamond** | Relationship | Light Pink | Represents a relationship between entities |
| **Oval/Ellipse** | Attribute | Light Yellow | Represents an attribute of an entity |
| **Lines** | Links | Black | Connects entities, relationships, and attributes |
| **Underlined Text** | Primary Key | Bold Underline | Indicates the primary key attribute |
| **Double Oval** | Multivalued | Yellow Border | Attribute that can have multiple values |
| **Dashed Oval** | Derived | Dashed Border | Attribute derived from other attributes |
| **Double Rectangle** | Weak Entity | Double Border | Entity dependent on another entity |

---

## 📊 Diagram Overview

![Chen Notation ER Diagram](EventiFy_ER_Chen_Notation.png)

---

## 🗂️ Entities (Rectangles - Light Blue)

### Primary Entities

1. **User** - Base entity for all system users
   - userID (PK)
   - name, email, password, role, phone

2. **Client** (extends User) - Event organizers
   - clientID (PK)
   - userID (FK)
   - preferences, budget

3. **Vendor** (extends User) - Service providers
   - vendorID (PK)
   - userID (FK)
   - businessName, category, rating

4. **Event** - Events created by clients
   - eventID (PK)
   - clientID (FK)
   - eventName, eventDate, location, budget, status

5. **Service** - Services offered by vendors
   - serviceID (PK)
   - vendorID (FK)
   - serviceName, description, price, availability

6. **Booking** - Junction entity for Event-Vendor relationship
   - bookingID (PK)
   - eventID (FK), vendorID (FK), serviceID (FK)
   - bookingDate, status, amount

7. **Payment** - Payment transactions
   - paymentID (PK)
   - bookingID (FK)
   - amount, method, status, timestamp

8. **Message** - User-to-user messages
   - messageID (PK)
   - senderID (FK), receiverID (FK)
   - content, timestamp, isRead

9. **AIRecommendation** - AI-generated recommendations
   - recommendationID (PK)
   - clientID (FK), vendorID (FK)
   - score, reason

10. **Notification** - System notifications
    - notificationID (PK)
    - userID (FK)
    - type, message, status

---

## 🔷 Relationships (Diamonds - Light Pink)

### Relationship Types

1. **IS-A** (Inheritance)
   - User IS-A Client
   - User IS-A Vendor
   - *Represents specialization hierarchy*

2. **Creates** (1:M)
   - Client (1) Creates (M) Event
   - *One client creates many events*

3. **Books** (M:N)
   - Event (M) Books (M) Vendor via Booking
   - *Many events can book many vendors*

4. **Offers** (1:M)
   - Vendor (1) Offers (M) Service
   - *One vendor offers many services*

5. **For** (M:1)
   - Booking (M) For (1) Service
   - *Many bookings for one service*

6. **Has** (1:1)
   - Booking (1) Has (1) Payment
   - *Each booking has exactly one payment*

7. **Sends** (M:M)
   - User (M) Sends (M) Message
   - *Users send messages to other users*

8. **Receives** (M:M)
   - User (M) Receives (M) Message
   - *Self-referencing relationship*

9. **Gets** (M:M)
   - Client (M) Gets (M) AIRecommendation
   - *Clients get recommendations*

10. **Recommends** (M:M)
    - AIRecommendation (M) Recommends (M) Vendor
    - *Recommendations link to vendors*

11. **Receives** (1:M)
    - User (1) Receives (M) Notification
    - *One user receives many notifications*

---

## 🔢 Cardinality Notation

### Understanding Cardinality

- **1** = One (exactly one)
- **M** or **N** = Many (zero or more)
- **1:1** = One-to-One relationship
- **1:M** = One-to-Many relationship
- **M:N** or **M:M** = Many-to-Many relationship

### Examples in EventiFy

1. **Client Creates Event (1:M)**
   - One client can create many events
   - Each event is created by exactly one client

2. **Event Books Vendor (M:N)**
   - One event can book many vendors
   - One vendor can be booked for many events
   - Implemented through Booking junction entity

3. **Booking Has Payment (1:1)**
   - Each booking has exactly one payment
   - Each payment belongs to exactly one booking

---

## 📋 Key Differences from UML Style

| Aspect | Chen Notation | UML Class Diagram |
|--------|---------------|-------------------|
| Entities | Rectangles with attributes listed | Rectangles with sections |
| Relationships | Diamonds with labels | Lines with labels |
| Attributes | Ovals connected to entity | Listed inside entity box |
| Cardinality | Numbers on lines (1, M, N) | Numbers/symbols on lines (1, *, 0..1) |
| Primary Keys | Underlined attributes | <<PK>> or underline |
| Visual Style | Traditional academic | Modern software engineering |

---

## 💡 Why Traditional Chen Notation?

### Academic Standard
- Taught in most database courses
- Reference: GeeksforGeeks, Database textbooks
- Conceptual modeling focus
- Easy to understand relationships

### Clear Visualization
- Distinct shapes for different concepts
- Attributes explicitly shown
- Relationship types clearly indicated
- Cardinality easily visible

### Industry Recognition
- Understood by database professionals
- Used in database design documentation
- Standard in academic papers
- Compatible with ER modeling tools

---

## 🔍 How to Read This Diagram

### Step-by-Step Guide

1. **Identify Entities** (Rectangles)
   - Look for light blue rectangles
   - These represent the main objects in the system

2. **Find Relationships** (Diamonds)
   - Look for light pink diamonds
   - These show how entities are connected

3. **Check Cardinality** (Numbers on lines)
   - Look at the numbers near entities
   - 1 = one, M = many

4. **Locate Attributes** (Inside rectangles)
   - Attributes are listed within entity boxes
   - Underlined = Primary Key
   - (FK) = Foreign Key

5. **Trace Relationships**
   - Follow lines from entities through relationships
   - Understand how data flows

### Example: "How does a client book a vendor?"
1. Start at **Client** entity
2. Follow **Creates** relationship to **Event**
3. Follow **Books** relationship from Event to **Booking**
4. **Booking** connects Event with **Vendor**
5. Booking **Has** a **Payment**

---

## 📚 References

### Chen Notation Standard
- Peter Chen's original ER model (1976)
- GeeksforGeeks: "Introduction of ER Model"
- Database System Concepts textbooks
- Academic database courses

### Related Resources
- **Section 5.2**: Class Diagram (UML style)
- **Section 5.3**: ER Diagram specification
- **Chapter 03**: Requirements Specification
- **ER-DIAGRAM-README.md**: Detailed documentation

---

## 🎯 Usage in Report

### For Appendix C

1. **Insert this diagram:**
   - Use: `EventiFy_ER_Chen_Notation.png`
   - Caption: "Figure C.1: Entity-Relationship Diagram (Chen Notation)"

2. **Explain notation:**
   - Reference this document
   - Mention following GeeksforGeeks style
   - Cite Peter Chen's ER model

3. **Academic justification:**
   - "Following traditional Chen notation as taught in database courses"
   - "Adhering to standard ER modeling conventions"
   - "Using GeeksforGeeks recommended approach"

---

## 📁 Files Available

1. **EventiFy_ER_Chen_Notation.png** (177 KB)
   - High-quality PNG image
   - Suitable for documents

2. **EventiFy_ER_Chen_Notation.svg** (25 KB)
   - Scalable vector graphic
   - Best for printing

3. **er-diagram-chen.dot** (5 KB)
   - Graphviz DOT source
   - Editable format

4. **CHEN-NOTATION-README.md** (This file)
   - Complete documentation
   - Notation explanation

---

## ✅ Compliance

This diagram follows:
- ✅ Traditional Chen notation (rectangles, diamonds, ovals)
- ✅ GeeksforGeeks ER model style
- ✅ Academic database textbook standards
- ✅ Section 5.3 specification requirements
- ✅ All entities from Class Diagram (5.2)
- ✅ All relationships documented

---

## 🔄 Comparison with Previous Version

### Previous (UML Class Diagram Style)
- Entity boxes with sections
- Attributes inside boxes
- Relationships as lines
- Modern software engineering style

### Current (Chen Notation)
- Entity rectangles
- Relationship diamonds
- Explicit cardinality
- Traditional academic style

**Both versions are valid!** Use whichever style is:
- Required by your course
- Preferred by your instructor
- Standard in your academic program

---

**Document Version:** 1.0  
**Created:** 18th February 2026  
**Status:** Complete - Following GeeksforGeeks/Chen notation  
**Reference:** https://www.geeksforgeeks.org/dbms/introduction-of-er-model/
