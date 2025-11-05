# Mini Backend API Sunucusu

Node.js + Express + MongoDB ile geliştirilmiş REST API sunucusu. Kullanıcı yönetimi, JWT kimlik doğrulama ve CRUD işlemleri içerir.

## 🚀 Özellikler

- ✅ Kullanıcı kayıt ve giriş (Register & Login)
- ✅ JWT ile kimlik doğrulama (Authentication)
- ✅ CRUD işlemleri (Create, Read, Update, Delete)
- ✅ MongoDB veritabanı entegrasyonu
- ✅ Protected routes (Token ile korumalı endpoint'ler)
- ✅ Kullanıcı profili endpoint'i

## 📦 Kullanılan Teknolojiler

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Veritabanı (MongoDB Atlas)
- **Mongoose** - MongoDB ODM
- **JWT** (jsonwebtoken) - Token tabanlı kimlik doğrulama
- **bcrypt** - Şifre hash'leme
- **dotenv** - Ortam değişkenleri yönetimi

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- MongoDB Atlas hesabı (ücretsiz)
- npm veya yarn

## 🔧 Kurulum

1. **Projeyi klonla veya indir**
```bash
git clone <repo-url>
cd mini-server
```

2. **Paketleri yükle**
```bash
npm install
```

3. **.env dosyasını oluştur**
```bash
cp env.example .env
```

4. **.env dosyasını düzenle**
```env
PORT=3000
JWT_SECRET=your-super-secret-key-change-this-in-production
JWT_EXPIRES_IN=24h
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mini-server
```

5. **Sunucuyu başlat**
```bash
npm start
```

Sunucu `http://localhost:3000` adresinde çalışacaktır.

## 📸 Test Ekran Görüntüleri

Aşağıda Postman ile yapılan test örnekleri yer almaktadır:

### 1. Sunucu Durumu Kontrolü
![Health Check](screenshots/health-check.png)
- Endpoint: `GET /`
- Status: `200 OK`

### 2. Kullanıcı Kaydı (Register)
![Register](screenshots/register.png)
- Endpoint: `POST /api/auth/register`
- Status: `201 Created`
- Yanıt: Kullanıcı bilgileri ve JWT token

### 3. Kullanıcı Girişi (Login)
![Login](screenshots/login.png)
- Endpoint: `POST /api/auth/login`
- Status: `200 OK`
- Yanıt: Kullanıcı bilgileri ve JWT token

### 4. Tüm Öğeleri Listele
![Get All Items](screenshots/get-all-items.png)
- Endpoint: `GET /api/items`
- Status: `200 OK`
- Yanıt: Öğe listesi

### 5. Yeni Öğe Oluştur (Protected)
![Create Item](screenshots/create-item.png)
- Endpoint: `POST /api/items`
- Authorization: Bearer Token
- Status: `201 Created`
- Yanıt: Oluşturulan öğe bilgileri

### 6. Kullanıcı Profili
![User Profile](screenshots/user-profile.png)
- Endpoint: `GET /api/users/profile`
- Authorization: Bearer Token
- Status: `200 OK`
- Yanıt: Kullanıcı profil bilgileri

**Not:** Ekran görüntülerini `screenshots/` klasörüne ekleyin ve dosya adlarını yukarıdaki gibi kullanın.

## 📚 API Endpoint'leri

### Authentication

#### Register (Kullanıcı Kaydı)
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}
```

#### Login (Kullanıcı Girişi)
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

### Users

#### Get Profile (Kullanıcı Profili)
```
GET /api/users/profile
Authorization: Bearer <token>
```

### Items

#### Get All Items (Tüm Öğeleri Listele)
```
GET /api/items
```

#### Get Item by ID (Tek Öğe Getir)
```
GET /api/items/:id
```

#### Create Item (Yeni Öğe Oluştur) - Protected
```
POST /api/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "İlk görevim",
  "description": "Bu benim ilk görevim"
}
```

#### Update Item (Öğe Güncelle) - Protected
```
PUT /api/items/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Güncellenmiş başlık",
  "description": "Güncellenmiş açıklama",
  "isCompleted": true
}
```

#### Delete Item (Öğe Sil) - Protected
```
DELETE /api/items/:id
Authorization: Bearer <token>
```

## 🔐 Token Kullanımı

Protected endpoint'ler için token gerekir. Login veya Register işleminden sonra dönen `token` değerini kullan:

**Postman'de:**
- Authorization sekmesi → Type: `Bearer Token` → Token'ı yapıştır

**cURL'de:**
```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/api/items
```

## 📁 Proje Yapısı

```
mini-server/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB bağlantısı
│   ├── controllers/
│   │   ├── authController.js    # Auth iş mantığı
│   │   ├── itemController.js    # Item CRUD iş mantığı
│   │   └── userController.js    # User iş mantığı
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT doğrulama
│   │   └── errorHandler.js      # Hata yönetimi
│   ├── models/
│   │   ├── User.js              # User modeli
│   │   └── Item.js              # Item modeli
│   ├── routes/
│   │   ├── auth.js              # Auth routes
│   │   ├── items.js             # Item routes
│   │   └── users.js             # User routes
│   └── utils/
│       └── jwt.js                # JWT utilities
├── .env                          # Ortam değişkenleri
├── .env.example                  # .env şablonu
├── .gitignore
├── package.json
├── README.md
└── server.js                      # Ana sunucu dosyası
```

## 🧪 Test

Postman veya benzeri bir API test aracı ile endpoint'leri test edebilirsin.

### Örnek Test Senaryosu:

1. **Register** → Kullanıcı kaydı yap
2. **Login** → Token al
3. **Create Item** → Token ile yeni öğe oluştur
4. **Get All Items** → Tüm öğeleri listele
5. **Update Item** → Token ile öğe güncelle
6. **Delete Item** → Token ile öğe sil

## 📝 Notlar

- `.env` dosyasındaki `JWT_SECRET` değerini güçlü bir anahtarla değiştirin
- MongoDB Atlas'ta Network Access ayarlarını yapılandırın (IP izinleri)
- Production ortamında `.env` dosyasını git'e eklemeyin

## 📄 Lisans

ISC

## 👨‍💻 Geliştirici

Backend geliştirme ve REST API öğrenme projesi.

