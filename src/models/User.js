const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * User Schema
 * Kullanıcı bilgilerini saklar
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Kullanıcı adı gereklidir'],
    unique: true,
    trim: true,
    minlength: [3, 'Kullanıcı adı en az 3 karakter olmalıdır'],
    maxlength: [30, 'Kullanıcı adı en fazla 30 karakter olabilir']
  },
  email: {
    type: String,
    required: [true, 'Email gereklidir'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Geçerli bir email adresi giriniz']
  },
  password: {
    type: String,
    required: [true, 'Şifre gereklidir'],
    minlength: [6, 'Şifre en az 6 karakter olmalıdır'],
    select: false // Varsayılan olarak şifreyi sorgularda gösterme (güvenlik)
  }
}, {
  timestamps: true // createdAt ve updatedAt otomatik eklenir
});

/**
 * Şifreyi kaydetmeden önce hash'le
 */
userSchema.pre('save', async function(next) {
  // Eğer şifre değişmemişse hash'leme
  if (!this.isModified('password')) return next();

  // Şifreyi hash'le
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * Şifre karşılaştırma metodu
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * User model'ini dışa aktar
 */
const User = mongoose.model('User', userSchema);

module.exports = User;

