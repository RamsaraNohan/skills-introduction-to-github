const { pool } = require('../config/database');

// Create new event
exports.createEvent = async (req, res) => {
  try {
    const clientId = req.user.userId;
    const {
      eventName,
      eventType,
      eventDate,
      eventTime,
      location,
      budget,
      guestCount,
      description,
      services
    } = req.body;

    // Validation
    if (!eventName || !eventDate || !location || !budget) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Insert event
    const [result] = await pool.query(
      `INSERT INTO Event (clientID, eventName, eventType, eventDate, eventTime, location, 
       budget, guestCount, description, status, createdAt, updatedAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'draft', NOW(), NOW())`,
      [clientId, eventName, eventType || 'General', eventDate, eventTime || '00:00:00', 
       location, budget, guestCount || 0, description || '']
    );

    const eventId = result.insertId;

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      event: {
        eventId,
        eventName,
        eventDate,
        location,
        status: 'draft'
      }
    });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating event',
      error: error.message
    });
  }
};

// Get all events for a user
exports.getMyEvents = async (req, res) => {
  try {
    const clientId = req.user.userId;

    const [events] = await pool.query(
      `SELECT e.*, 
       (SELECT COUNT(*) FROM Booking WHERE eventID = e.eventID) as bookingCount
       FROM Event e
       WHERE e.clientID = ?
       ORDER BY e.eventDate DESC`,
      [clientId]
    );

    res.json({
      success: true,
      count: events.length,
      events
    });
  } catch (error) {
    console.error('Get events error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching events',
      error: error.message
    });
  }
};

// Get single event
exports.getEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    const [events] = await pool.query(
      'SELECT * FROM Event WHERE eventID = ?',
      [eventId]
    );

    if (events.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      event: events[0]
    });
  } catch (error) {
    console.error('Get event error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Update event
exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updates = req.body;

    // Build dynamic update query
    const updateFields = [];
    const values = [];

    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined && key !== 'eventID' && key !== 'clientID') {
        updateFields.push(`${key} = ?`);
        values.push(updates[key]);
      }
    });

    if (updateFields.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No fields to update'
      });
    }

    updateFields.push('updatedAt = NOW()');
    values.push(eventId);

    await pool.query(
      `UPDATE Event SET ${updateFields.join(', ')} WHERE eventID = ?`,
      values
    );

    res.json({
      success: true,
      message: 'Event updated successfully'
    });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating event',
      error: error.message
    });
  }
};

// Delete event
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    await pool.query('DELETE FROM Event WHERE eventID = ?', [eventId]);

    res.json({
      success: true,
      message: 'Event deleted successfully'
    });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting event',
      error: error.message
    });
  }
};
