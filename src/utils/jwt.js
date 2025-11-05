const jwt = require('jsonwebtoken');

/**
 * JWT Token oluşturma fonksiyonu
 * @param {string} userId - Kullanıcı ID'si
 * @returns {string} JWT token
 */
const generateToken = (userId) => {
  return jwt.sign(
    { userId }, // Token içindeki veri (payload)
    process.env.JWT_SECRET, // Gizli anahtar
    { 
      expiresIn: process.env.JWT_EXPIRES_IN || '24h' // Token süresi
    }
  );
};

/**
 * JWT Token doğrulama fonksiyonu
 * @param {string} token - Doğrulanacak token
 * @returns {object} Decoded token verisi (userId içerir)
 */
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Geçersiz veya süresi dolmuş token');
  }
};

module.exports = {
  generateToken,
  verifyToken
};


