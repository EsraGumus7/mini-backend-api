const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

/**
 * GET /api/users/profile
 * Kullanıcı profili getir (protected - token gerekli)
 */
router.get('/profile', authenticate, userController.getProfile);

module.exports = router;

