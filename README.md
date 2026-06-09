# 🔗 URL Shortener

A full-stack URL Shortener application built with React, Node.js, Express, and MongoDB Atlas. The application allows users to shorten long URLs, track click analytics, and manage shortened links efficiently.

## 🚀 Features

- Shorten long URLs into compact, shareable links
- URL validation before shortening
- Duplicate URL prevention
- Automatic redirection to original URLs
- Click analytics tracking
- RESTful API architecture
- MongoDB Atlas database integration
- Responsive frontend built with React

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📂 Project Structure

```bash
url-shortener/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Express Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will run on:

```bash
http://localhost:5173
```

## 📌 API Endpoints

### Create Short URL

```http
POST /api/urls
```

Request Body:

```json
{
  "originalUrl": "https://example.com"
}
```

Response:

```json
{
  "shortCode": "abc123",
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### Redirect to Original URL

```http
GET /:shortCode
```

Redirects the user to the original URL.

---

### Get URL Analytics

```http
GET /api/urls/stats/:shortCode
```

Response:

```json
{
  "originalUrl": "https://example.com",
  "clicks": 25,
  "createdAt": "2026-05-01T10:00:00Z"
}
```

## 📈 Future Improvements

- User authentication
- Custom short URLs
- QR code generation
- URL expiration dates
- Dashboard for managing links
- Advanced analytics

## 🎯 Learning Outcomes

This project helped strengthen skills in:

- REST API development
- React frontend development
- MongoDB database design
- Express.js backend architecture
- API integration with Axios
- Environment variable management
- Full-stack application deployment

## 👩‍💻 Author

Niharika K Thilak

Computer Science Student passionate about building technology, solving real-world problems, and turning ideas into products that create meaningful impact.

---

⭐ If you found this project useful, consider giving it a star.
