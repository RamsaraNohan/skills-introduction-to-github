# EventiFy UI - Download Guide

## 📥 How to Download All Files

You have **three options** to download the EventiFy UI components:

---

## Option 1: Download Entire Folder (Recommended) ⭐

### Method A: Download as ZIP (Easiest)

1. **Go to the GitHub repository:**
   ```
   https://github.com/RamsaraNohan/skills-introduction-to-github
   ```

2. **Switch to the branch:**
   - Click on the branch dropdown (usually shows "main")
   - Select `copilot/create-interim-report-structure`

3. **Navigate to the folder:**
   - Click on `eventify-ui` folder

4. **Download options:**
   - **Using browser extension:** Install [GitZip](https://gitzip.org/) browser extension
   - **Using download service:** Use [DownGit](https://minhaskamal.github.io/DownGit/#/home)
     - Enter: `https://github.com/RamsaraNohan/skills-introduction-to-github/tree/copilot/create-interim-report-structure/eventify-ui`
     - Click "Download"

### Method B: Git Clone (For Developers)

```bash
# Clone the repository
git clone https://github.com/RamsaraNohan/skills-introduction-to-github.git

# Navigate to the repository
cd skills-introduction-to-github

# Checkout the branch
git checkout copilot/create-interim-report-structure

# The files are now in: eventify-ui/
```

---

## Option 2: Download Individual Files (One by One)

### 📄 HTML Pages

#### 1. Registration Page
**File:** `registration.html` (12.5 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/registration.html
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/registration.html
```

---

#### 2. Event Creation Dashboard
**File:** `dashboard.html` (19.7 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/dashboard.html
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/dashboard.html
```

---

#### 3. Vendor Service Listing
**File:** `vendors.html` (17.4 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/vendors.html
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/vendors.html
```

---

### 🎨 CSS Stylesheet

#### Main Stylesheet
**File:** `css/styles.css` (13.4 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/css/styles.css
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/css/styles.css
```

---

### 💻 JavaScript Files

#### 1. Registration Logic
**File:** `js/registration.js` (10.9 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/registration.js
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/js/registration.js
```

---

#### 2. Dashboard Logic
**File:** `js/dashboard.js` (13.7 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/dashboard.js
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/js/vendors.js
```

---

#### 3. Vendor Listing Logic
**File:** `js/vendors.js` (14.1 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/vendors.js
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/js/vendors.js
```

---

### 📖 Documentation

#### README File
**File:** `README.md` (6.6 KB)

**Direct Download Link:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/README.md
```

**View on GitHub:**
```
https://github.com/RamsaraNohan/skills-introduction-to-github/blob/copilot/create-interim-report-structure/eventify-ui/README.md
```

---

## Option 3: Quick Download Script

Save this as a bash script to download all files at once:

```bash
#!/bin/bash
# download-eventify-ui.sh

BASE_URL="https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui"

# Create directory structure
mkdir -p eventify-ui/css
mkdir -p eventify-ui/js

# Download HTML files
curl -L "${BASE_URL}/registration.html" -o eventify-ui/registration.html
curl -L "${BASE_URL}/dashboard.html" -o eventify-ui/dashboard.html
curl -L "${BASE_URL}/vendors.html" -o eventify-ui/vendors.html

# Download CSS
curl -L "${BASE_URL}/css/styles.css" -o eventify-ui/css/styles.css

# Download JavaScript
curl -L "${BASE_URL}/js/registration.js" -o eventify-ui/js/registration.js
curl -L "${BASE_URL}/js/dashboard.js" -o eventify-ui/js/dashboard.js
curl -L "${BASE_URL}/js/vendors.js" -o eventify-ui/js/vendors.js

# Download README
curl -L "${BASE_URL}/README.md" -o eventify-ui/README.md

echo "✅ All files downloaded to eventify-ui/"
```

**To use:**
1. Save the script as `download-eventify-ui.sh`
2. Make it executable: `chmod +x download-eventify-ui.sh`
3. Run it: `./download-eventify-ui.sh`

---

## 📁 Complete File List

After downloading, you should have this structure:

```
eventify-ui/
├── css/
│   └── styles.css          (13.4 KB)
├── js/
│   ├── registration.js      (10.9 KB)
│   ├── dashboard.js         (13.7 KB)
│   └── vendors.js           (14.1 KB)
├── registration.html        (12.5 KB)
├── dashboard.html           (19.7 KB)
├── vendors.html             (17.4 KB)
└── README.md                (6.6 KB)
```

**Total:** 8 files, ~107 KB

---

## ✅ Verification Checklist

After downloading, verify you have:

- [ ] 3 HTML files (registration.html, dashboard.html, vendors.html)
- [ ] 1 CSS file (css/styles.css)
- [ ] 3 JavaScript files (js/registration.js, js/dashboard.js, js/vendors.js)
- [ ] 1 README file (README.md)
- [ ] Correct folder structure (css/ and js/ subdirectories)

---

## 🚀 After Download - Quick Start

1. **Open in browser:**
   - Simply open any `.html` file in your web browser
   - No server or installation required

2. **Test the pages:**
   - `registration.html` - User registration form
   - `dashboard.html` - Event creation wizard
   - `vendors.html` - Vendor listing and filtering

3. **Customize:**
   - Edit HTML files for content
   - Modify `css/styles.css` for styling
   - Update JavaScript files for functionality

---

## 🔗 All-in-One Download Links (Click to Download)

### HTML Files:
- [registration.html](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/registration.html)
- [dashboard.html](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/dashboard.html)
- [vendors.html](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/vendors.html)

### CSS:
- [styles.css](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/css/styles.css)

### JavaScript:
- [registration.js](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/registration.js)
- [dashboard.js](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/dashboard.js)
- [vendors.js](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/js/vendors.js)

### Documentation:
- [README.md](https://github.com/RamsaraNohan/skills-introduction-to-github/raw/copilot/create-interim-report-structure/eventify-ui/README.md)

---

## 💡 Tips

1. **Right-click on links** and select "Save link as..." to download individual files
2. **Maintain folder structure** - Create `css/` and `js/` folders before downloading
3. **All files are needed** - HTML files reference the CSS and JS files
4. **No dependencies** - No npm install or build process required
5. **Works offline** - Once downloaded, works without internet (except vendor data in vendors.js)

---

## 🆘 Troubleshooting

### Problem: Links not working
**Solution:** Make sure you're on the correct branch (`copilot/create-interim-report-structure`)

### Problem: CSS/JS not loading
**Solution:** Ensure folder structure is correct (css/ and js/ subdirectories)

### Problem: Can't download entire folder
**Solution:** Use git clone method or DownGit service

### Problem: Files downloaded as .txt
**Solution:** Right-click → "Save link as..." and ensure correct file extension

---

## 📞 Need Help?

If you encounter any issues:
1. Check that you're downloading from the correct branch
2. Verify folder structure matches the layout above
3. Ensure all 8 files are downloaded
4. Open HTML files in a modern browser (Chrome, Firefox, Safari, Edge)

---

**Repository:** RamsaraNohan/skills-introduction-to-github  
**Branch:** copilot/create-interim-report-structure  
**Directory:** eventify-ui/  
**Last Updated:** 2026-02-18
