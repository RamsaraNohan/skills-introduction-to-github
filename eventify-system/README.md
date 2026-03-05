# EventiFy - Complete Web System
## Intelligent Event Planning Platform

A fully functional, deployable web system for event planning and management with AI-powered vendor recommendations.

---

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or higher)
   ```bash
   node --version  # Should show v18.x or higher
   ```

2. **MySQL** (v8.0 or higher)
   ```bash
   mysql --version  # Should show v8.0.x or higher
   ```

3. **Git** (for version control)
   ```bash
   git --version
   ```

---

## 📦 Installation Instructions

### Step 1: Set Up the Database

1. **Start MySQL server**:
   ```bash
   # On Windows:
   net start MySQL80

   # On Mac/Linux:
   sudo systemctl start mysql
   # OR
   sudo service mysql start
   ```

2. **Create the database**:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

   **OR** manually:
   ```bash
   mysql -u root -p
   ```
   Then paste the contents of `database/schema.sql`

3. **Verify database creation**:
   ```sql
   SHOW DATABASES;
   USE eventify;
   SHOW TABLES;
   ```

### Step 2: Set Up the Backend

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Edit the `.env` file** with your database credentials:
   ```
   PORT=5000
   NODE_ENV=development
   
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=eventify
   DB_PORT=3306
   
   JWT_SECRET=your_super_secret_jwt_key_change_this
   JWT_EXPIRE=7d
   
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start the backend server**:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   ✅ Database connected successfully
   ╔═══════════════════════════════════════╗
   ║   EventiFy API Server is running     ║
   ║   Port: 5000                         ║
   ║   Environment: development           ║
   ║   URL: http://localhost:5000         ║
   ╚═══════════════════════════════════════╝
   ```

### Step 3: Set Up the Frontend

1. **Open a new terminal** and navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Edit the `.env` file**:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_NAME=EventiFy
   ```

5. **Start the frontend application**:
   ```bash
   npm start
   ```

   The application will open automatically at `http://localhost:3000`

---

## 🎯 Using the System

### Demo Accounts

The database comes with pre-configured demo accounts:

#### Client Account
- **Email**: kamal@example.com
- **Password**: client123

#### Vendor Account
- **Email**: royal@example.com
- **Password**: vendor123

#### Admin Account
- **Email**: admin@eventify.com
- **Password**: admin123

### Features Available

1. **User Registration**
   - Register as Client or Vendor
   - Email and phone validation
   - Secure password hashing

2. **User Login**
   - JWT-based authentication
   - Persistent sessions
   - Automatic token refresh

3. **Dashboard** (Client)
   - View all your events
   - Create new events
   - Edit/delete events
   - See event status

4. **Vendor Listing**
   - Browse all approved vendors
   - Filter by category, rating, location
   - Search vendors
   - Sort by different criteria
   - View vendor details

5. **Event Management**
   - Create events with full details
   - Set budget and guest count
   - Choose event type
   - Track event status

---

## 🗂️ Project Structure

```
eventify-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Database connection
│   │   ├── controllers/
│   │   │   ├── authController.js    # Auth logic
│   │   │   ├── eventController.js   # Event CRUD
│   │   │   └── vendorController.js  # Vendor operations
│   │   ├── middleware/
│   │   │   └── auth.js              # JWT middleware
│   │   └── routes/
│   │       ├── auth.js              # Auth routes
│   │       ├── events.js            # Event routes
│   │       └── vendors.js           # Vendor routes
│   ├── .env.example
│   ├── package.json
│   └── server.js                    # Main server file
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.js       # Auth state management
│   │   ├── pages/
│   │   │   ├── Login.js             # Login page
│   │   │   ├── Register.js          # Registration page
│   │   │   ├── Dashboard.js         # User dashboard
│   │   │   └── VendorList.js        # Vendor listing
│   │   ├── services/
│   │   │   └── api.js               # API integration
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── Auth.css
│   │   │   ├── Dashboard.css
│   │   │   └── VendorList.css
│   │   ├── App.js                   # Main app component
│   │   └── index.js                 # App entry point
│   ├── .env.example
│   └── package.json
│
└── database/
    └── schema.sql                   # Database schema
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Events
- `POST /api/events` - Create event (protected, client only)
- `GET /api/events/my-events` - Get user's events (protected)
- `GET /api/events/:id` - Get single event (protected)
- `PUT /api/events/:id` - Update event (protected, client only)
- `DELETE /api/events/:id` - Delete event (protected, client only)

### Vendors
- `GET /api/vendors` - Get all vendors (with filters)
- `GET /api/vendors/categories` - Get vendor categories
- `GET /api/vendors/:id` - Get single vendor

---

## 🧪 Testing the System

### Test Backend API

1. **Health Check**:
   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Register a new user**:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "password": "test123",
       "phone": "+94771234567",
       "role": "client"
     }'
   ```

3. **Login**:
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "kamal@example.com",
       "password": "client123"
     }'
   ```

### Test Frontend

1. Open browser to `http://localhost:3000`
2. Click "Login"
3. Use demo credentials: kamal@example.com / client123
4. Navigate through the dashboard
5. Try creating an event
6. Browse vendors

---

## 🚀 Deployment Instructions

### Deploy to Production Server

#### Step 1: Prepare Server

1. **Get a server** (DigitalOcean, AWS, etc.)
2. **Install Node.js and MySQL**
3. **Clone your repository**

#### Step 2: Deploy Backend

```bash
# On your server
cd backend

# Install dependencies
npm install --production

# Set up environment
cp .env.example .env
nano .env  # Edit with production values

# Import database
mysql -u root -p < ../database/schema.sql

# Install PM2 (process manager)
npm install -g pm2

# Start server
pm2 start server.js --name eventify-api

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Step 3: Deploy Frontend

```bash
cd frontend

# Install dependencies
npm install

# Create production build
npm run build

# The build folder contains your production-ready app
# Serve it with Nginx or Apache
```

#### Step 4: Configure Nginx (Optional)

```nginx
# /etc/nginx/sites-available/eventify
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /path/to/frontend/build;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/eventify /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 5: Set Up SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: Database connection failed
- **Solution**: Check MySQL is running and credentials in `.env` are correct

**Problem**: Port 5000 already in use
- **Solution**: Change PORT in `.env` file or stop the process using port 5000

**Problem**: JWT errors
- **Solution**: Make sure JWT_SECRET is set in `.env` file

### Frontend Issues

**Problem**: Cannot connect to API
- **Solution**: Verify REACT_APP_API_URL in `.env` points to correct backend URL

**Problem**: CORS errors
- **Solution**: Make sure FRONTEND_URL in backend `.env` matches your frontend URL

**Problem**: Page not found (404)
- **Solution**: Make sure React app is running and you're using the correct URL

### Common Issues

**Problem**: npm install fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Problem**: Database tables not created
- **Solution**: Re-run the schema.sql file: `mysql -u root -p eventify < database/schema.sql`

---

## 📚 Additional Resources

### Technologies Used

- **Backend**: Node.js, Express.js, MySQL, JWT, Bcrypt
- **Frontend**: React, React Router, Axios
- **Database**: MySQL 8.0

### Development Tools

- **VS Code** - Recommended IDE
- **Postman** - For API testing
- **MySQL Workbench** - For database management

### Useful Commands

```bash
# Backend
npm run dev          # Start development server
npm start            # Start production server

# Frontend
npm start            # Start development server
npm run build        # Create production build
npm test             # Run tests

# Database
mysql -u root -p     # Connect to MySQL
SHOW DATABASES;      # List databases
USE eventify;        # Select database
SHOW TABLES;         # List tables
DESCRIBE User;       # Show table structure
```

---

## 🎓 Next Steps

### Expand the System

1. **Add More Pages**:
   - Vendor Profile Details
   - Booking Management
   - Payment Integration
   - Messaging System
   - Admin Dashboard

2. **Implement AI Recommendations**:
   - Add Python-based recommendation engine
   - Integrate with backend API
   - Display recommendations to clients

3. **Add More Features**:
   - Real-time chat with Socket.io
   - Email notifications
   - SMS notifications
   - File uploads for vendor portfolios
   - Reviews and ratings
   - Calendar integration

4. **Improve Security**:
   - Rate limiting
   - Input sanitization
   - HTTPS everywhere
   - Security headers
   - API key authentication for vendors

5. **Performance Optimization**:
   - Database indexing
   - Query optimization
   - Caching with Redis
   - CDN for static assets
   - Image optimization

---

## 📝 License

MIT License - Feel free to use this project for learning and development.

---

## 👥 Contributors

**Group 88 - Plymouth Batch 13**
- PUSL2021 Computing Group Project
- EventiFy - Intelligent Event Planning Platform

---

## 📞 Support

For questions and support:
- Check the troubleshooting section above
- Review the code comments
- Test with demo accounts first
- Verify all environment variables are set correctly

---

**🎉 Congratulations! You now have a fully functional event management system!**

Start by logging in with the demo accounts and exploring the features. Then customize it to fit your needs!
