const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

/**
 * Kullanıcı Kayıt (Register)
 * POST /api/auth/register
 */
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Gerekli alanları kontrol et
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar gereklidir (username, email, password)'
      });
    }

    // Email formatını kontrol et (basit kontrol)
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Geçerli bir email adresi giriniz'
      });
    }

    // Şifre uzunluğunu kontrol et
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Şifre en az 6 karakter olmalıdır'
      });
    }

    // Kullanıcı zaten var mı kontrol et
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Bu email veya kullanıcı adı zaten kullanılıyor'
      });
    }

    // Yeni kullanıcı oluştur
    // Şifre otomatik olarak User model'inde hash'leniyor (pre-save hook)
    const user = await User.create({
      username,
      email,
      password
    });

    // JWT token oluştur
    const token = generateToken(user._id);

    // Başarılı yanıt (şifreyi gönderme)
    res.status(201).json({
      success: true,
      message: 'Kullanıcı başarıyla kaydedildi',
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        },
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Kullanıcı Giriş (Login)
 * POST /api/auth/login
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Gerekli alanları kontrol et
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email ve şifre gereklidir'
      });
    }

    // Kullanıcıyı bul (şifre hariç)
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email veya şifre hatalı'
      });
    }

    // Şifreyi karşılaştır
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Email veya şifre hatalı'
      });
    }

    // JWT token oluştur
    const token = generateToken(user._id);

    // Başarılı yanıt
    res.json({
      success: true,
      message: 'Giriş başarılı',
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        },
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login
};


