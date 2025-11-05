const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticate = require('../middleware/authMiddleware');
const { itemValidation } = require('../middleware/validation');

/**
 * GET /api/items
 * Tüm öğeleri listele (herkes görebilir)
 */
router.get('/', itemController.getAllItems);

/**
 * GET /api/items/:id
 * Tek bir öğe getir (herkes görebilir)
 */
router.get('/:id', itemController.getItemById);

/**
 * POST /api/items
 * Yeni öğe oluştur (protected - token gerekli)
 */
router.post('/', authenticate, itemValidation, itemController.createItem);

/**
 * PUT /api/items/:id
 * Öğe güncelle (protected - token gerekli + sadece kendi öğelerini)
 */
router.put('/:id', authenticate, itemValidation, itemController.updateItem);

/**
 * DELETE /api/items/:id
 * Öğe sil (protected - token gerekli + sadece kendi öğelerini)
 */
router.delete('/:id', authenticate, itemController.deleteItem);

module.exports = router;

