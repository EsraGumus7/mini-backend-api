/**
 * Merkezi Error Handler Middleware
 * Tüm hataları yakalar ve standart bir formatta döner
 */

const errorHandler = (err, req, res, next) => {
  // Hata mesajı ve status code'u belirle
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || 'Sunucu hatası oluştu';

  // Loglama (geliştirme ortamında)
  if (process.env.NODE_ENV === 'development') {
    console.error('Hata Detayı:', {
      message: err.message,
      stack: err.stack,
      path: req.path,
      method: req.method
    });
  }

  // Hata response'u
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      error: err 
    })
  });
};

module.exports = errorHandler;


