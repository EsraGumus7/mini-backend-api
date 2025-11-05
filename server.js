require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Bağlantısı
connectDB();

// Middleware'ler
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL encoded body parser

// Basit logging middleware (isteğe bağlı)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Mini Backend API Sunucusu çalışıyor!',
    status: 'OK',
    endpoints: {
      auth: '/api/auth',
      items: '/api/items',
      users: '/api/users'
    }
  });
});

// API Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/items', require('./src/routes/items'));
app.use('/api/users', require('./src/routes/users'));

// 404 Handler - Route bulunamadığında
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint bulunamadı'
  });
});

// Error Handler - Hata yakalama middleware
app.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Sunucu hatası',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
  console.log(`📍 http://localhost:${PORT}`);
});

