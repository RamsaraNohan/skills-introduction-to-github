import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { vendorsAPI } from '../services/api';
import '../styles/VendorList.css';

function VendorList() {
  const { logout } = useAuth();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    search: '',
    rating: '',
    sort: 'rating'
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
    loadVendors();
  }, [filters]);

  const loadCategories = async () => {
    try {
      const response = await vendorsAPI.getCategories();
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Load categories error:', error);
    }
  };

  const loadVendors = async () => {
    try {
      setLoading(true);
      const response = await vendorsAPI.getAll(filters);
      setVendors(response.data.vendors);
    } catch (error) {
      console.error('Load vendors error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="vendors-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">EventiFy</div>
        <div className="nav-links">
          <button onClick={() => navigate('/dashboard')} className="nav-link">
            Dashboard
          </button>
          <button onClick={() => navigate('/vendors')} className="nav-link active">
            Vendors
          </button>
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        </div>
      </nav>

      <div className="vendors-content">
        <div className="vendors-header">
          <h1>Find Vendors</h1>
          <p>Discover and connect with professional event service providers</p>
        </div>

        <div className="vendors-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <h3>Filters</h3>

            <div className="filter-group">
              <label>Search</label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search vendors..."
              />
            </div>

            <div className="filter-group">
              <label>Category</label>
              <select name="category" value={filters.category} onChange={handleFilterChange}>
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Minimum Rating</label>
              <select name="rating" value={filters.rating} onChange={handleFilterChange}>
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Sort By</label>
              <select name="sort" value={filters.sort} onChange={handleFilterChange}>
                <option value="rating">Rating</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </aside>

          {/* Vendors Grid */}
          <div className="vendors-main">
            {loading ? (
              <div className="loading">Loading vendors...</div>
            ) : vendors.length === 0 ? (
              <div className="empty-state">
                <p>No vendors found. Try different filters.</p>
              </div>
            ) : (
              <>
                <div className="results-count">
                  {vendors.length} vendors found
                </div>
                <div className="vendors-grid">
                  {vendors.map((vendor) => (
                    <div key={vendor.vendorID} className="vendor-card">
                      <div className="vendor-image">
                        <img
                          src={`https://via.placeholder.com/300x200?text=${vendor.businessName}`}
                          alt={vendor.businessName}
                        />
                        <span className="vendor-category">{vendor.category}</span>
                      </div>
                      <div className="vendor-info">
                        <h3>{vendor.businessName}</h3>
                        <div className="vendor-rating">
                          <span className="stars">★★★★★</span>
                          <span className="rating-value">{vendor.rating.toFixed(1)}</span>
                        </div>
                        <p className="vendor-location">📍 {vendor.location || 'Sri Lanka'}</p>
                        <p className="vendor-description">
                          {vendor.description || 'Professional event services'}
                        </p>
                        <div className="vendor-stats">
                          <span>{vendor.serviceCount || 0} Services</span>
                          {vendor.avgPrice && (
                            <span>From LKR {Math.round(vendor.avgPrice).toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                      <div className="vendor-actions">
                        <button className="btn-primary">View Details</button>
                        <button className="btn-secondary">Contact</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorList;
