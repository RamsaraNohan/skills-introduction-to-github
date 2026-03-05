import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { eventsAPI } from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    budget: '',
    guestCount: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await eventsAPI.getMyEvents();
      setEvents(response.data.events);
    } catch (error) {
      console.error('Load events error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      await eventsAPI.create(formData);
      setShowCreateForm(false);
      setFormData({
        eventName: '',
        eventType: '',
        eventDate: '',
        eventTime: '',
        location: '',
        budget: '',
        guestCount: '',
        description: ''
      });
      loadEvents();
    } catch (error) {
      console.error('Create event error:', error);
      alert('Failed to create event');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">EventiFy</div>
        <div className="nav-links">
          <button onClick={() => navigate('/dashboard')} className="nav-link active">
            Dashboard
          </button>
          <button onClick={() => navigate('/vendors')} className="nav-link">
            Vendors
          </button>
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>Welcome, {user?.name}!</h1>
            <p>Manage your events and bookings</p>
          </div>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="btn-primary"
          >
            {showCreateForm ? 'Cancel' : '+ Create Event'}
          </button>
        </div>

        {/* Create Event Form */}
        {showCreateForm && (
          <div className="create-event-form">
            <h2>Create New Event</h2>
            <form onSubmit={handleCreateEvent}>
              <div className="form-row">
                <div className="form-group">
                  <label>Event Name *</label>
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="">Select type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Budget (LKR) *</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Guest Count</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Create Event
              </button>
            </form>
          </div>
        )}

        {/* Events List */}
        <div className="events-section">
          <h2>My Events</h2>
          {loading ? (
            <div className="loading">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="empty-state">
              <p>No events yet. Create your first event!</p>
            </div>
          ) : (
            <div className="events-grid">
              {events.map((event) => (
                <div key={event.eventID} className="event-card">
                  <div className="event-header">
                    <h3>{event.eventName}</h3>
                    <span className={`status status-${event.status}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="event-details">
                    <p><strong>Type:</strong> {event.eventType || 'N/A'}</p>
                    <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Budget:</strong> LKR {event.budget.toLocaleString()}</p>
                    <p><strong>Guests:</strong> {event.guestCount || 'N/A'}</p>
                  </div>
                  <div className="event-actions">
                    <button className="btn-secondary">Edit</button>
                    <button className="btn-danger">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
