const Item = require('../models/Item');

/**
 * Tüm öğeleri listele
 * GET /api/items
 */
const getAllItems = async (req, res, next) => {
  try {
    // Tüm öğeleri getir, kullanıcı bilgilerini de dahil et (populate)
    const items = await Item.find()
      .populate('user', 'username email') // User bilgilerini de getir
      .sort({ createdAt: -1 }); // En yeni önce

    res.json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Tek bir öğe getir
 * GET /api/items/:id
 */
const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id).populate('user', 'username email');

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Öğe bulunamadı'
      });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Yeni öğe oluştur
 * POST /api/items
 * Protected: Token gerekli
 */
const createItem = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const userId = req.user._id; // authMiddleware'den gelen kullanıcı

    // Gerekli alanları kontrol et
    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Başlık gereklidir'
      });
    }

    // Yeni öğe oluştur
    const item = await Item.create({
      title,
      description: description || '',
      user: userId
    });

    // Kullanıcı bilgilerini de dahil et
    await item.populate('user', 'username email');

    res.status(201).json({
      success: true,
      message: 'Öğe başarıyla oluşturuldu',
      data: item
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Öğe güncelle
 * PUT /api/items/:id
 * Protected: Token gerekli + Sadece kendi öğelerini güncelleyebilir
 */
const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    const userId = req.user._id;

    // Öğeyi bul
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Öğe bulunamadı'
      });
    }

    // Kullanıcı kendi öğesini mi güncelliyor kontrol et
    if (item.user.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Bu öğeyi güncelleme yetkiniz yok'
      });
    }

    // Güncelleme yap
    if (title !== undefined) item.title = title;
    if (description !== undefined) item.description = description;
    if (isCompleted !== undefined) item.isCompleted = isCompleted;

    await item.save();
    await item.populate('user', 'username email');

    res.json({
      success: true,
      message: 'Öğe başarıyla güncellendi',
      data: item
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Öğe sil
 * DELETE /api/items/:id
 * Protected: Token gerekli + Sadece kendi öğelerini silebilir
 */
const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // Öğeyi bul
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Öğe bulunamadı'
      });
    }

    // Kullanıcı kendi öğesini mi siliyor kontrol et
    if (item.user.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Bu öğeyi silme yetkiniz yok'
      });
    }

    // Öğeyi sil
    await Item.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Öğe başarıyla silindi'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};

