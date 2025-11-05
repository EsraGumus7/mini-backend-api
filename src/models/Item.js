const mongoose = require('mongoose');

/**
 * Item Schema
 * Öğe/Veri modeli - Kullanıcıların oluşturduğu öğeler
 */
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Başlık gereklidir'],
    trim: true,
    minlength: [1, 'Başlık en az 1 karakter olmalıdır'],
    maxlength: [200, 'Başlık en fazla 200 karakter olabilir']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Açıklama en fazla 1000 karakter olabilir']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // User modeline referans
    required: [true, 'Kullanıcı bilgisi gereklidir']
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // createdAt ve updatedAt otomatik eklenir
});

/**
 * Item model'ini dışa aktar
 */
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;


