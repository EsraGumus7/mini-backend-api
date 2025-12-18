

# 🚀 Mini Backend API Server

A modern REST API server built with Node.js, Express, and MongoDB. Includes JWT authentication, CRUD operations, and production-ready features.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)](https://www.mongodb.com/)

## ✨ Features

- 🔐 **User Management** - Register, Login, JWT Authentication
- 📝 **CRUD Operations** - Create, Read, Update, Delete
- 🛡️ **Security** - Helmet.js, Rate Limiting, Input Validation
- 📊 **Database** - MongoDB Atlas integration
- 📄 **Pagination** - Supports pagination
- 🌐 **CORS** - Cross-Origin Resource Sharing
- 📱 **Web Frontend** - Mobile-friendly test interface

## 🛠️ Technologies

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt (password hashing)

**Security & Validation:**
- Helmet.js
- express-validator
- express-rate-limit
- CORS

## 📸 Test Screenshots

### Postman Tests

| Endpoint | Test |
|----------|------|
| Health Check | ![Health Check](screenshots/health-check.png) |
| Register | ![Register](screenshots/register.png) |
| Login | ![Login](screenshots/login.png) |
| Get Items | ![Get Items](screenshots/get-all-items.png) |
| Create Item | ![Create Item](screenshots/create-item.png) |
| User Profile | ![User Profile](screenshots/user-profile.png) |

### Web Interface Tests

**Mobile-Friendly Web Interface:**
![Web Test](screenshots/web-test.png)

**Terminal Test Results:**
![Terminal Test](screenshots/web-terminal-test.png)

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/EsraGumus7/mini-server.git
cd mini-server

# 2. Install packages
npm install

# 3. Create .env file
cp env.example .env

# 4. Edit .env file (add MongoDB URI)
nano .env

# 5. Start the server
npm start
````

The server will run at `http://localhost:3000`.

## 📚 API Endpoints

### Authentication

* `POST /api/auth/register` - User registration
* `POST /api/auth/login` - User login

### Users

* `GET /api/users/profile` - User profile (🔒 Protected)

### Items

* `GET /api/items?page=1&limit=10` - Get all items (Pagination)
* `GET /api/items/:id` - Get single item
* `POST /api/items` - Create new item (🔒 Protected)
* `PUT /api/items/:id` - Update item (🔒 Protected)
* `DELETE /api/items/:id` - Delete item (🔒 Protected)

**🔒 Protected:** Requires Bearer Token

## 🌐 Web Interface

The project includes a mobile-friendly web interface. After starting the server:

* **Home:** `http://localhost:3000`
* **Login:** `http://localhost:3000/login.html`
* **Register:** `http://localhost:3000/register.html`
* **Items:** `http://localhost:3000/items.html`

## 📁 Project Structure

```
mini-server/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth, Validation, Error handling
│   ├── models/          # Mongoose models
│   ├── routes/          # API endpoints
│   └── utils/           # JWT utilities
├── frontend/            # Web interface
├── screenshots/         # Test screenshots
└── server.js            # Main server file
```

## 🔧 Development

```bash
# Development mode
npm start

# Environment variables
PORT=3000
JWT_SECRET=your-secret-key
MONGODB_URI=mongodb+srv://...
```

## 📝 Notes

* Do not commit the `.env` file to git in production
* Change `JWT_SECRET` to a strong secret
* Configure MongoDB Atlas Network Access settings

## 📄 License

ISC License

A project for backend development and learning REST API.

⭐ **Don’t forget to give a Star!** A project for backend development and learning REST API.

















# 🚀 Mini Backend API Sunucusu

Modern REST API sunucusu - Node.js, Express ve MongoDB ile geliştirilmiş. JWT kimlik doğrulama, CRUD işlemleri ve production-ready özellikler içerir.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)](https://www.mongodb.com/)

## ✨ Özellikler

- 🔐 **Kullanıcı Yönetimi** - Register, Login, JWT Authentication
- 📝 **CRUD İşlemleri** - Create, Read, Update, Delete
- 🛡️ **Güvenlik** - Helmet.js, Rate Limiting, Input Validation
- 📊 **Veritabanı** - MongoDB Atlas entegrasyonu
- 📄 **Pagination** - Sayfalama desteği
- 🌐 **CORS** - Cross-Origin Resource Sharing
- 📱 **Web Frontend** - Mobil uyumlu test arayüzü

## 🛠️ Teknolojiler

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt (şifre hash'leme)

**Güvenlik & Validation:**
- Helmet.js
- express-validator
- express-rate-limit
- CORS

## 📸 Test Ekran Görüntüleri

### Postman Testleri

| Endpoint | Test |
|----------|------|
| Health Check | ![Health Check](screenshots/health-check.png) |
| Register | ![Register](screenshots/register.png) |
| Login | ![Login](screenshots/login.png) |
| Get Items | ![Get Items](screenshots/get-all-items.png) |
| Create Item | ![Create Item](screenshots/create-item.png) |
| User Profile | ![User Profile](screenshots/user-profile.png) |

### Web Uygulaması Testleri

**Mobil Uyumlu Web Arayüzü:**
![Web Test](screenshots/web-test.png)

**Terminal Test Sonuçları:**
![Terminal Test](screenshots/web-terminal-test.png)

## 🚀 Hızlı Başlangıç

```bash
# 1. Repository'yi klonla
git clone https://github.com/EsraGumus7/mini-server.git
cd mini-server

# 2. Paketleri yükle
npm install

# 3. .env dosyasını oluştur
cp env.example .env

# 4. .env dosyasını düzenle (MongoDB URI ekle)
nano .env

# 5. Sunucuyu başlat
npm start
```

Sunucu `http://localhost:3000` adresinde çalışacaktır.

## 📚 API Endpoint'leri

### Authentication
- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi

### Users
- `GET /api/users/profile` - Kullanıcı profili (🔒 Protected)

### Items
- `GET /api/items?page=1&limit=10` - Tüm öğeler (Pagination)
- `GET /api/items/:id` - Tek öğe getir
- `POST /api/items` - Yeni öğe oluştur (🔒 Protected)
- `PUT /api/items/:id` - Öğe güncelle (🔒 Protected)
- `DELETE /api/items/:id` - Öğe sil (🔒 Protected)

**🔒 Protected:** Bearer Token gerektirir

## 🌐 Web Arayüzü

Proje, mobil uyumlu bir web arayüzü içerir. Sunucu başladıktan sonra:

- **Ana Sayfa:** `http://localhost:3000`
- **Login:** `http://localhost:3000/login.html`
- **Register:** `http://localhost:3000/register.html`
- **Items:** `http://localhost:3000/items.html`

## 📁 Proje Yapısı

```
mini-server/
├── src/
│   ├── config/          # MongoDB bağlantısı
│   ├── controllers/     # İş mantığı
│   ├── middleware/      # Auth, Validation, Error handling
│   ├── models/          # Mongoose modelleri
│   ├── routes/          # API endpoint'leri
│   └── utils/           # JWT utilities
├── frontend/            # Web arayüzü
├── screenshots/         # Test ekran görüntüleri
└── server.js            # Ana sunucu dosyası
```

## 🔧 Geliştirme

```bash
# Development mode
npm start

# Environment variables
PORT=3000
JWT_SECRET=your-secret-key
MONGODB_URI=mongodb+srv://...
```

## 📝 Notlar

- Production ortamında `.env` dosyasını git'e eklemeyin
- `JWT_SECRET` değerini güçlü bir anahtarla değiştirin
- MongoDB Atlas Network Access ayarlarını yapılandırın

## 📄 Lisans

ISC License

Backend geliştirme ve REST API öğrenme projesi.

⭐ **Star** vermeyi unutmayın! Backend geliştirme ve REST API öğrenme projesi.
