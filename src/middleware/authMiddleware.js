const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

/**
 * JWT Token Doğrulama Middleware
 * Protected route'lar için kullanılır
 * Token'ı doğrular ve req.user'a kullanıcı bilgisini ekler
 */
const authenticate = async (req, res, next) => {
  try {
    // Header'dan token'ı al
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token bulunamadı. Lütfen giriş yapın.'
      });
    }

    // "Bearer " kısmını kaldır, sadece token'ı al
    const token = authHeader.substring(7);

    // Token'ı doğrula
    const decoded = verifyToken(token);

    // Kullanıcıyı bul
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token geçersiz. Kullanıcı bulunamadı.'
      });
    }

    // Kullanıcı bilgisini request'e ekle
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || 'Token doğrulama hatası'
    });
  }
};

module.exports = authenticate;


