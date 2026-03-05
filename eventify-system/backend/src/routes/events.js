const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authMiddleware, roleCheck } = require('../middleware/auth');

// All routes require authentication
router.use(authMiddleware);

// Event routes
router.post('/', roleCheck('client'), eventController.createEvent);
router.get('/my-events', eventController.getMyEvents);
router.get('/:id', eventController.getEvent);
router.put('/:id', roleCheck('client'), eventController.updateEvent);
router.delete('/:id', roleCheck('client'), eventController.deleteEvent);

module.exports = router;
