// EventiFy Vendor Listing JavaScript

// Sample vendor data (In a real app, this would come from an API)
const vendors = [
    {
        id: 1,
        name: "Grand Plaza Hotel",
        category: "venue",
        rating: 4.8,
        reviews: 245,
        price: 350000,
        location: "colombo",
        description: "Luxurious banquet halls with modern amenities and professional event management services.",
        features: ["Parking", "AC", "Wi-Fi", "Catering"],
        icon: "🏛️",
        verified: true
    },
    {
        id: 2,
        name: "Tasty Bites Catering",
        category: "catering",
        rating: 4.6,
        reviews: 189,
        price: 2500,
        location: "colombo",
        description: "Authentic Sri Lankan and international cuisine with customizable menu options.",
        features: ["Veg Options", "Halal", "Delivery", "Setup"],
        icon: "🍽️",
        verified: true
    },
    {
        id: 3,
        name: "Elegant Designs Studio",
        category: "decoration",
        rating: 4.9,
        reviews: 312,
        price: 85000,
        location: "kandy",
        description: "Creative event decoration with floral arrangements and thematic designs.",
        features: ["Setup", "Takedown", "Custom Themes", "Flowers"],
        icon: "🎨",
        verified: true
    },
    {
        id: 4,
        name: "PixelPerfect Photography",
        category: "photography",
        rating: 4.7,
        reviews: 156,
        price: 75000,
        location: "galle",
        description: "Professional photography and videography services for all types of events.",
        features: ["Video", "Drone", "Photo Album", "Editing"],
        icon: "📸",
        verified: false
    },
    {
        id: 5,
        name: "DJ Sound Waves",
        category: "music",
        rating: 4.5,
        reviews: 98,
        price: 45000,
        location: "negombo",
        description: "Professional DJ services with state-of-the-art sound systems and lighting.",
        features: ["Sound System", "Lighting", "MC Services", "Playlist"],
        icon: "🎵",
        verified: true
    },
    {
        id: 6,
        name: "Bright Lights Productions",
        category: "lighting",
        rating: 4.4,
        reviews: 87,
        price: 55000,
        location: "colombo",
        description: "Professional lighting and sound system setup for memorable events.",
        features: ["LED Lights", "Stage Setup", "Effects", "Technician"],
        icon: "💡",
        verified: false
    },
    {
        id: 7,
        name: "Royal Gardens Venue",
        category: "venue",
        rating: 4.9,
        reviews: 278,
        price: 450000,
        location: "kandy",
        description: "Beautiful outdoor garden venue perfect for weddings and large celebrations.",
        features: ["Outdoor", "Garden", "Parking", "Catering"],
        icon: "🏛️",
        verified: true
    },
    {
        id: 8,
        name: "Spice Master Catering",
        category: "catering",
        rating: 4.8,
        reviews: 203,
        price: 3000,
        location: "kandy",
        description: "Award-winning catering service specializing in traditional and fusion cuisine.",
        features: ["Live Cooking", "BBQ", "Desserts", "Service Staff"],
        icon: "🍽️",
        verified: true
    },
    {
        id: 9,
        name: "Bloom & Petals",
        category: "decoration",
        rating: 4.6,
        reviews: 145,
        price: 65000,
        location: "galle",
        description: "Exquisite floral arrangements and elegant event decoration services.",
        features: ["Flowers", "Centerpieces", "Backdrop", "Lighting"],
        icon: "🎨",
        verified: false
    },
    {
        id: 10,
        name: "Capture Moments Studio",
        category: "photography",
        rating: 4.9,
        reviews: 234,
        price: 95000,
        location: "colombo",
        description: "Premium photography services with cinematic videography and same-day editing.",
        features: ["4K Video", "Same Day Edit", "Album", "Drone"],
        icon: "📸",
        verified: true
    },
    {
        id: 11,
        name: "Rhythm Masters DJ",
        category: "music",
        rating: 4.7,
        reviews: 176,
        price: 55000,
        location: "colombo",
        description: "High-energy DJ performances with extensive music library and custom playlists.",
        features: ["Custom Mix", "Karaoke", "Lighting", "MC"],
        icon: "🎵",
        verified: true
    },
    {
        id: 12,
        name: "Stellar Lighting Co.",
        category: "lighting",
        rating: 4.8,
        reviews: 134,
        price: 75000,
        location: "jaffna",
        description: "Cutting-edge lighting solutions with LED displays and special effects.",
        features: ["LED Wall", "Moving Lights", "Laser", "Effects"],
        icon: "💡",
        verified: true
    }
];

let filteredVendors = [...vendors];
let currentPage = 1;
const vendorsPerPage = 6;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayVendors();
    updateResultsCount();
});

// Apply all filters
function applyFilters() {
    // Get filter values
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategories = getSelectedCategories();
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked').value);
    const location = document.getElementById('locationFilter').value;
    const sortBy = document.getElementById('sortSelect').value;
    
    // Filter vendors
    filteredVendors = vendors.filter(vendor => {
        // Search filter
        const matchesSearch = !searchQuery || 
            vendor.name.toLowerCase().includes(searchQuery) ||
            vendor.description.toLowerCase().includes(searchQuery);
        
        // Category filter
        const matchesCategory = selectedCategories.length === 0 || 
            selectedCategories.includes(vendor.category);
        
        // Price filter
        const matchesPrice = vendor.price >= minPrice && vendor.price <= maxPrice;
        
        // Rating filter
        const matchesRating = vendor.rating >= minRating;
        
        // Location filter
        const matchesLocation = !location || vendor.location === location;
        
        return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesLocation;
    });
    
    // Sort vendors
    sortVendors(sortBy);
    
    // Reset to page 1 and display
    currentPage = 1;
    displayVendors();
    updateResultsCount();
}

// Get selected categories
function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('[id^="cat-"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Sort vendors
function sortVendors(sortBy) {
    switch(sortBy) {
        case 'rating':
            filteredVendors.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            filteredVendors.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredVendors.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filteredVendors.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'recommended':
        default:
            // Keep original order or use AI recommendation logic
            break;
    }
}

// Display vendors
function displayVendors() {
    const grid = document.getElementById('vendorsGrid');
    const loadingState = document.getElementById('loadingState');
    const noResults = document.getElementById('noResults');
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * vendorsPerPage;
    const endIndex = startIndex + vendorsPerPage;
    const paginatedVendors = filteredVendors.slice(startIndex, endIndex);
    
    // Show loading state
    loadingState.style.display = 'flex';
    grid.style.display = 'none';
    noResults.style.display = 'none';
    
    // Simulate loading delay
    setTimeout(() => {
        loadingState.style.display = 'none';
        
        if (paginatedVendors.length === 0) {
            noResults.style.display = 'block';
            document.getElementById('pagination').innerHTML = '';
            return;
        }
        
        // Display vendors
        grid.style.display = 'grid';
        grid.innerHTML = paginatedVendors.map(vendor => createVendorCard(vendor)).join('');
        
        // Update pagination
        updatePagination();
    }, 300);
}

// Create vendor card HTML
function createVendorCard(vendor) {
    const categoryNames = {
        'venue': 'Venue & Location',
        'catering': 'Catering & Food',
        'decoration': 'Decoration',
        'photography': 'Photography',
        'music': 'Music & Entertainment',
        'lighting': 'Lighting & Sound'
    };
    
    const stars = '⭐'.repeat(Math.floor(vendor.rating));
    
    return `
        <div class="vendor-card" onclick="viewVendorDetails(${vendor.id})">
            <div class="vendor-image">
                ${vendor.icon}
                ${vendor.verified ? '<div class="vendor-badge">✓ Verified</div>' : ''}
            </div>
            <div class="vendor-content">
                <div class="vendor-header">
                    <h3 class="vendor-name">${vendor.name}</h3>
                    <div class="vendor-category">
                        📍 ${categoryNames[vendor.category]}
                    </div>
                </div>
                <div class="vendor-rating">
                    <div class="rating-stars">${stars}</div>
                    <span class="rating-number">${vendor.rating}</span>
                    <span class="rating-count">(${vendor.reviews})</span>
                </div>
                <p class="vendor-description">${vendor.description}</p>
                <div class="vendor-features">
                    ${vendor.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
                <div class="vendor-footer">
                    <div>
                        <span class="price-label">Starting from</span>
                        <div class="vendor-price">LKR ${vendor.price.toLocaleString()}</div>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); bookVendor(${vendor.id})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = `
        <button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Previous
        </button>
    `;
    
    // Show page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<span style="padding: 0 8px;">...</span>';
        }
    }
    
    paginationHTML += `
        <button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next →
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Go to page
function goToPage(page) {
    const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayVendors();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update results count
function updateResultsCount() {
    const count = filteredVendors.length;
    document.getElementById('resultsCount').innerHTML = `
        Showing <strong>${count}</strong> vendor${count !== 1 ? 's' : ''}
    `;
}

// Clear all filters
function clearAllFilters() {
    // Clear search
    document.getElementById('searchInput').value = '';
    
    // Clear category checkboxes
    document.querySelectorAll('[id^="cat-"]').forEach(cb => cb.checked = false);
    
    // Clear price inputs
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    
    // Reset rating
    document.getElementById('rating-all').checked = true;
    
    // Reset location
    document.getElementById('locationFilter').value = '';
    
    // Reset sort
    document.getElementById('sortSelect').value = 'recommended';
    
    // Apply filters
    applyFilters();
}

// View vendor details (placeholder)
function viewVendorDetails(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    alert(`Viewing details for: ${vendor.name}\n\nIn a real application, this would open a detailed vendor page with more information, gallery, reviews, and booking options.`);
}

// Book vendor (placeholder)
function bookVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    
    const confirmed = confirm(`Book ${vendor.name}?\n\nPrice: LKR ${vendor.price.toLocaleString()}\n\nIn a real application, this would open a booking form with date selection, requirements, and payment options.`);
    
    if (confirmed) {
        alert('Booking initiated! You will be redirected to the booking form.');
        // In a real app: window.location.href = `booking.html?vendor=${vendorId}`;
    }
}
