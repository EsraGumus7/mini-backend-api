const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * POST /api/auth/register
 * Kullanıcı kaydı
 */
router.post('/register', authController.register);

/**
 * POST /api/auth/login
 * Kullanıcı girişi
 */
router.post('/login', authController.login);

module.exports = router;


