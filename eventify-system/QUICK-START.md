# 🚀 EventiFy - QUICK START

## Get Your System Running in 5 Minutes!

### Step 1: Database Setup (1 minute)

```bash
# Start MySQL
mysql -u root -p

# In MySQL prompt, paste:
source database/schema.sql

# OR from terminal:
mysql -u root -p < database/schema.sql
```

### Step 2: Backend Setup (2 minutes)

```bash
cd backend

# Install packages
npm install

# Configure
cp .env.example .env

# Edit .env with your MySQL password
nano .env  # Change DB_PASSWORD

# Start server
npm run dev
```

✅ You should see: "EventiFy API Server is running"

### Step 3: Frontend Setup (2 minutes)

```bash
# Open new terminal
cd frontend

# Install packages
npm install

# Start app
npm start
```

✅ Browser opens automatically at http://localhost:3000

### Step 4: Login & Use!

**Demo Login:**
- Email: `kamal@example.com`
- Password: `client123`

---

## 🎯 What You Can Do NOW

1. **Login** with demo account
2. **Create Events** - Click "+ Create Event"
3. **Browse Vendors** - Click "Vendors" in nav
4. **Filter & Search** - Use sidebar filters
5. **View Details** - Click on any vendor card

---

## 🔧 Common Issues

**Database won't connect?**
```bash
# Check MySQL is running:
sudo systemctl status mysql

# Start MySQL:
sudo systemctl start mysql
```

**Port already in use?**
```bash
# Kill process on port 5000:
lsof -ti:5000 | xargs kill -9

# Or change PORT in backend/.env
```

**npm install fails?**
```bash
# Clear cache and retry:
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 File Locations

- **Backend**: `/eventify-system/backend/`
- **Frontend**: `/eventify-system/frontend/`
- **Database**: `/eventify-system/database/schema.sql`
- **Full Docs**: `/eventify-system/README.md`

---

## 🎓 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Client | kamal@example.com | client123 |
| Vendor | royal@example.com | vendor123 |
| Admin | admin@eventify.com | admin123 |

---

## ✨ Features Ready to Use

✅ User Registration  
✅ User Login  
✅ Create Events  
✅ View Events  
✅ Browse Vendors  
✅ Filter & Search  
✅ Responsive Design  

---

## 🚀 Next Steps

1. **Explore** the demo accounts
2. **Create** your own account
3. **Customize** the code
4. **Add** more features
5. **Deploy** to production

---

**Need Help?** Check the full README.md for detailed instructions!

---

**That's it! You're ready to go! 🎉**
