const { pool } = require('../config/database');

// Get all vendors with filters
exports.getVendors = async (req, res) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      location,
      search,
      sort = 'rating',
      page = 1,
      limit = 12
    } = req.query;

    let query = `
      SELECT v.*, u.name, u.email, u.phone,
      (SELECT COUNT(*) FROM Service WHERE vendorID = v.vendorID) as serviceCount,
      (SELECT AVG(price) FROM Service WHERE vendorID = v.vendorID) as avgPrice
      FROM Vendor v
      JOIN User u ON v.userID = u.userID
      WHERE v.status = 'approved'
    `;

    const params = [];

    // Apply filters
    if (category) {
      query += ' AND v.category = ?';
      params.push(category);
    }

    if (rating) {
      query += ' AND v.rating >= ?';
      params.push(parseFloat(rating));
    }

    if (location) {
      query += ' AND v.location LIKE ?';
      params.push(`%${location}%`);
    }

    if (search) {
      query += ' AND (v.businessName LIKE ? OR v.description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    // Sorting
    const sortOptions = {
      'rating': 'v.rating DESC',
      'price_low': 'avgPrice ASC',
      'price_high': 'avgPrice DESC',
      'name': 'v.businessName ASC'
    };

    query += ` ORDER BY ${sortOptions[sort] || sortOptions.rating}`;

    // Pagination
    const offset = (page - 1) * limit;
    query += ` LIMIT ? OFFSET ?`;
    params.push(parseInt(limit), offset);

    const [vendors] = await pool.query(query, params);

    // Get total count for pagination
    let countQuery = 'SELECT COUNT(*) as total FROM Vendor v WHERE v.status = "approved"';
    const countParams = [];

    if (category) {
      countQuery += ' AND v.category = ?';
      countParams.push(category);
    }

    const [[{ total }]] = await pool.query(countQuery, countParams);

    res.json({
      success: true,
      count: vendors.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      vendors
    });
  } catch (error) {
    console.error('Get vendors error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching vendors',
      error: error.message
    });
  }
};

// Get single vendor with services
exports.getVendor = async (req, res) => {
  try {
    const vendorId = req.params.id;

    const [vendors] = await pool.query(
      `SELECT v.*, u.name, u.email, u.phone
       FROM Vendor v
       JOIN User u ON v.userID = u.userID
       WHERE v.vendorID = ?`,
      [vendorId]
    );

    if (vendors.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Vendor not found'
      });
    }

    // Get vendor services
    const [services] = await pool.query(
      'SELECT * FROM Service WHERE vendorID = ?',
      [vendorId]
    );

    res.json({
      success: true,
      vendor: {
        ...vendors[0],
        services
      }
    });
  } catch (error) {
    console.error('Get vendor error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get vendor categories
exports.getCategories = async (req, res) => {
  try {
    const [categories] = await pool.query(
      'SELECT DISTINCT category FROM Vendor WHERE status = "approved" ORDER BY category'
    );

    res.json({
      success: true,
      categories: categories.map(c => c.category)
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};
