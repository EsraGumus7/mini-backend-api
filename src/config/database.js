const mongoose = require('mongoose');

/**
 * MongoDB Bağlantı Fonksiyonu
 * Mongoose ile MongoDB'ye bağlanır
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Mongoose 6+ için bu ayarlar varsayılan olarak aktif
      // Eski versiyonlar için gerekli olabilir:
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB bağlantısı başarılı: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error.message);
    process.exit(1); // Uygulamayı kapat
  }
};

module.exports = connectDB;


