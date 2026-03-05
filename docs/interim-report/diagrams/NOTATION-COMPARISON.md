# ER Diagram Notation Comparison

## EventiFy System - Two ER Diagram Styles Available

**Group 88** | **Plymouth Batch 13**

---

## 📊 Why Two Versions?

You now have **TWO versions** of the ER diagram for EventiFy:

1. **Traditional Chen Notation** (GeeksforGeeks style) - NEW! ⭐
2. **UML Class Diagram Style** (Modern software engineering)

Both show the **same database structure** but use different visual notations.

---

## 🎨 Style Comparison

### Traditional Chen Notation (Recommended for Academic Submission)

**Visual Elements:**
- **Rectangles** = Entities (User, Event, Vendor, etc.)
- **Diamonds** = Relationships (Creates, Books, Offers, etc.)
- **Ovals** = Attributes (name, email, price, etc.)
- **Lines** = Connections between elements
- **Numbers** = Cardinality (1, M, N)

**File:** `EventiFy_ER_Chen_Notation.png` (177 KB)

**Appearance:**
```
┌─────────┐
│  User   │  ← Rectangle (Entity)
└─────────┘
     │
     ◇       ← Diamond (Relationship)
  Creates
     │
┌─────────┐
│  Event  │  ← Rectangle (Entity)
└─────────┘
```

**When to Use:**
- ✅ Course requires traditional ER notation
- ✅ Following GeeksforGeeks tutorials
- ✅ Academic textbook approach
- ✅ Instructor prefers Chen notation
- ✅ Database design course standards

---

### UML Class Diagram Style (Alternative)

**Visual Elements:**
- **Boxes with sections** = Entities
- **Lines with arrows** = Relationships
- **Attributes listed inside** boxes
- **Symbols** = Cardinality (1, *, 0..1)

**File:** `EventiFy_ER_Diagram.png` (144 KB)

**Appearance:**
```
┌─────────────────┐
│  User           │  ← Box with sections
├─────────────────┤
│ userID (PK)     │
│ name            │
│ email           │
└─────────────────┘
       │ 1
       │
       │ *
┌─────────────────┐
│  Event          │
└─────────────────┘
```

**When to Use:**
- ✅ Software engineering documentation
- ✅ Technical implementation guide
- ✅ Modern notation preferred
- ✅ UML standards required

---

## 🎯 Which One Should You Use?

### ✅ Use CHEN NOTATION if:
- Your course taught ER diagrams using GeeksforGeeks
- Your instructor showed rectangles, diamonds, and ovals
- Your textbook uses Chen notation
- You need to match academic standards
- **This is what you learned in class** ← IMPORTANT!

**👉 Use this file:** `EventiFy_ER_Chen_Notation.png`

---

### Use UML STYLE if:
- Your course emphasizes software engineering
- Your instructor accepts modern UML notation
- You're documenting for developers
- No specific notation required

**Use this file:** `EventiFy_ER_Diagram.png`

---

## 📋 Content Comparison

Both diagrams contain **exactly the same information:**

| Content | Chen Notation | UML Style |
|---------|---------------|-----------|
| Entities | 11 entities | 11 entities |
| Relationships | All shown with diamonds | All shown with lines |
| Cardinality | 1, M, N notation | 1, *, 0..1 notation |
| Primary Keys | Underlined in ovals | Marked (PK) in boxes |
| Foreign Keys | Shown in entity boxes | Marked (FK) in boxes |
| Inheritance | IS-A diamonds | Inheritance arrows |

**✅ Both are correct and complete!**

---

## 🎓 Academic Reference

### Chen Notation
**Created by:** Peter Chen (1976)  
**Reference:** "The Entity-Relationship Model - Toward a Unified View of Data"  
**Learn more:** https://www.geeksforgeeks.org/dbms/introduction-of-er-model/

**Standard in:**
- Database Management Systems courses
- Database Design textbooks
- Academic database curricula
- Most university CS/IT programs

### UML Class Diagrams
**Created by:** Object Management Group (OMG)  
**Reference:** Unified Modeling Language standard  
**Standard in:**
- Software Engineering courses
- System Design documentation
- Modern development practices
- Industry technical documentation

---

## 📥 How to Access

### Chen Notation (Traditional)

**Download PNG:**
```
docs/interim-report/diagrams/EventiFy_ER_Chen_Notation.png
```

**Direct Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/docs/interim-report/diagrams/EventiFy_ER_Chen_Notation.png
```

**Documentation:**
```
docs/interim-report/diagrams/CHEN-NOTATION-README.md
```

---

### UML Style (Modern)

**Download PNG:**
```
docs/interim-report/diagrams/EventiFy_ER_Diagram.png
```

**Documentation:**
```
docs/interim-report/diagrams/ER-DIAGRAM-README.md
```

---

## 💡 Recommendation

### For Your Plymouth Submission:

**Use Traditional Chen Notation** if:
- ✅ Your database course taught using GeeksforGeeks examples
- ✅ Your instructor expects rectangles, diamonds, ovals
- ✅ Course materials show Chen notation
- ✅ This is the style you learned

**Justification in report:**
> "Following traditional Chen notation for ER modeling as taught in our database management course and as standardized in academic literature (GeeksforGeeks: Introduction of ER Model)."

---

## 🔍 Visual Comparison

### Chen Notation Key Features:
```
┌─────────────┐
│   Entity    │  ← Light blue rectangle
└─────────────┘
       │
       ◇         ← Pink diamond (Relationship)
  Relationship
       │
    1 or M      ← Cardinality number
       │
┌─────────────┐
│   Entity    │
└─────────────┘
```

### UML Style Key Features:
```
┌──────────────────┐
│  Entity          │
├──────────────────┤
│ + attribute: type│  ← Attributes inside box
│ + attribute: type│
└──────────────────┘
      │ 1
      │
      │ *
┌──────────────────┐
│  Entity          │
└──────────────────┘
```

---

## ✅ Quality Assurance

Both diagrams are:
- ✅ Complete (all 11 entities)
- ✅ Accurate (all relationships from Section 5.3)
- ✅ Professional quality
- ✅ High resolution
- ✅ Ready for submission
- ✅ Properly documented
- ✅ Multiple formats (PNG, SVG, source)

---

## 🎓 Final Recommendation

**For Plymouth University PUSL2021 Interim Report:**

👉 **Use: EventiFy_ER_Chen_Notation.png**

**Reason:**
- Follows traditional academic ER notation
- Matches GeeksforGeeks teaching style
- Standard in database courses
- Clear visual distinction between entities and relationships
- Explicit cardinality notation

**Insert in:** Appendix C  
**Caption:** "Figure C.1: Entity-Relationship Diagram (Chen Notation)"  
**Reference:** "Following traditional Chen notation (GeeksforGeeks, 2024)"

---

**Document Created:** 18th February 2026  
**Status:** Complete - Both notation styles available  
**Choose:** Based on your course requirements
