# 🏥 Burdwan Scan Centre – Full-Stack Diagnostic Centre Web Platform

<p align="center">
  A production-deployed full-stack web application developed for Burdwan Scan Centre.
</p>

<p align="center">
  Built with React, Vite, Node.js, Express.js, MongoDB Atlas, Cloudinary, and modern cloud infrastructure.
</p>

---

## 📌 Project Overview

**Burdwan Scan Centre** is a full-stack diagnostic centre web platform designed to provide patients, visitors, and administrators with a modern, secure, responsive, and production-ready digital system.

The platform provides a complete public-facing diagnostic centre website where users can explore services, diagnostic packages, medical experts, equipment, accreditations, notices, job vacancies, centre information, and submit appointment or contact requests.

The application also includes backend APIs and protected administrative functionality for managing dynamic website content and user-generated submissions.

The project follows a separated frontend and backend architecture and uses cloud infrastructure for application hosting, database management, and media storage.

---

## 📋 Table of Contents

* Project Overview
* Live Application
* Repository
* Application Architecture
* Technology Stack
* Core Application Modules
* Public Website Features
* Administrative Features
* Security Implementation
* SEO Implementation
* Analytics Integration
* Performance & Optimization
* Project Structure
* API Architecture
* Environment Variables
* Local Installation
* Available Scripts
* Production Build
* Deployment Architecture
* Lighthouse Audit Results
* Git Workflow
* Author
* License

---

# 🌐 Live Application

## Production Website

**Burdwan Scan Centre**

https://burdwanscancentre.com/

---

# 📦 Repository

GitHub Repository:

https://github.com/anilkumarpaital1-art/burdwan-scan-centre

---

# 🏗️ Application Architecture

The project follows a modern full-stack architecture with separate frontend, backend, database, and media storage layers.

```text
                            ┌────────────────────────────┐
                            │        Web Browser         │
                            │                            │
                            │   Patients / Visitors      │
                            │      Administrators        │
                            └─────────────┬──────────────┘
                                          │
                                          │ HTTPS
                                          ▼
                            ┌────────────────────────────┐
                            │      React + Vite App      │
                            │                            │
                            │      Frontend Layer        │
                            │     Hosted on Vercel       │
                            └─────────────┬──────────────┘
                                          │
                                          │ REST API
                                          │ HTTPS Requests
                                          ▼
                            ┌────────────────────────────┐
                            │    Node.js + Express.js    │
                            │                            │
                            │       Backend API          │
                            │      Hosted on Render      │
                            └──────────┬───────┬─────────┘
                                       │       │
                          Database     │       │     Media Storage
                          Requests     │       │
                                       ▼       ▼
                           ┌────────────────┐  ┌────────────────┐
                           │ MongoDB Atlas  │  │   Cloudinary   │
                           │                │  │                │
                           │ Cloud Database │  │ Cloud Storage  │
                           └────────────────┘  └────────────────┘
```

---

# 🛠️ Technology Stack

## 🎨 Frontend

* React.js
* React 19
* Vite
* JavaScript
* CSS3
* React Router DOM
* Axios
* React Helmet Async
* React Icons
* Swiper
* Recharts
* React CountUp
* Google Analytics
* Environment-based API configuration
* Responsive component architecture

---

## ⚙️ Backend

* Node.js
* Express.js
* JavaScript
* REST API architecture
* MongoDB
* Mongoose ODM
* JSON Web Tokens
* bcryptjs
* Multer
* Cloudinary
* Multer Storage Cloudinary
* Helmet
* Express Rate Limit
* CORS
* dotenv

---

## 🗄️ Database

* MongoDB Atlas
* Mongoose ODM
* Cloud-hosted document database
* Schema-based data models
* Environment-protected connection configuration

---

## ☁️ Cloud Infrastructure

| Service               | Purpose                   |
| --------------------- | ------------------------- |
| Vercel                | Frontend Deployment       |
| Render                | Backend API Deployment    |
| MongoDB Atlas         | Production Database       |
| Cloudinary            | Cloud Media Storage       |
| GitHub                | Source Code Management    |
| Google Analytics      | Website Traffic Analytics |
| Google Search Console | Search Engine Monitoring  |

---

# 🧩 Core Application Modules

The application is divided into multiple functional modules.

## 🌍 Public Website

The patient-facing application provides access to diagnostic centre information and online services.

Main public modules include:

* Home
* About
* Services
* Medical Experts
* Diagnostic Packages
* Equipment
* Gallery
* Notices
* Job Vacancies
* Appointment Booking
* Contact
* Accreditations
* Testimonials
* Privacy Policy
* Terms & Conditions
* Refund & Cancellation Policy
* Custom 404 Page

---

## 👨‍💼 Administrative System

The application includes protected administrative functionality for managing dynamic website content.

Administrative functionality includes:

* Secure administrator authentication
* Protected backend API access
* Appointment management
* Notice management
* Job vacancy management
* Diagnostic package management
* Contact enquiry management
* Media upload handling
* Database-backed content management

Administrative API operations are protected through authentication middleware.

---

# ✨ Public Website Features

## 🏠 Home Page

The homepage provides an overview of the diagnostic centre and its major services.

Implemented sections include:

* Responsive navigation bar
* Hero section
* Services preview
* Diagnostic packages
* About section
* Medical experts preview
* Diagnostic equipment slider
* Gallery section
* Patient testimonials
* Latest notice preview
* Accreditation section
* Contact section
* Responsive footer

---

## 🏥 Diagnostic Services

Users can explore information about available diagnostic services.

The service interface provides:

* Structured service information
* Responsive service cards
* Reusable React components
* Mobile-friendly layouts
* Navigation to relevant application sections

---

## 🩺 Diagnostic Packages

The application provides health and diagnostic package information.

Package functionality includes:

* Dynamic package retrieval
* Backend API integration
* Database persistence
* Responsive package presentation
* Administrative package management

---

## 👨‍⚕️ Medical Experts

Users can explore information about medical professionals associated with the diagnostic centre.

The expert interface provides:

* Expert profiles
* Professional information
* Responsive layouts
* Reusable React components

---

## 🔬 Diagnostic Equipment

The application contains an equipment showcase for presenting diagnostic technologies available at the centre.

Implemented functionality includes:

* Equipment slider
* Equipment information
* Responsive presentation
* Interactive navigation
* Reusable equipment data structures

---

## 🖼️ Gallery

The gallery section provides visual information about the diagnostic centre and its infrastructure.

Features include:

* Responsive image layouts
* Reusable gallery components
* Optimized visual presentation
* Mobile compatibility

---

## 📅 Appointment Management

Patients can submit appointment requests through the public website.

Appointment functionality includes:

* Online appointment form
* Form submission handling
* Frontend validation
* Backend request processing
* MongoDB data persistence
* Loading states
* Success states
* Error handling
* Administrative appointment access

---

## 📢 Notice Management

The notice management system allows centre announcements to be published dynamically.

Features include:

* Notice creation
* Notice retrieval
* Individual notice access
* Notice updates
* Notice deletion
* Latest notice preview
* Public notice board
* Backend API integration
* MongoDB persistence
* Administrative notice management

---

## 💼 Job Vacancy Management

The recruitment module allows job vacancies to be published and managed dynamically.

Features include:

* Job vacancy creation
* Vacancy retrieval
* Individual vacancy access
* Vacancy updates
* Vacancy deletion
* Public job listings
* Backend API integration
* MongoDB persistence
* Administrative vacancy management

---

## 📩 Contact Management

Visitors can submit enquiries through the public contact interface.

Contact functionality includes:

* Contact form submission
* Backend API processing
* MongoDB persistence
* Loading states
* Success responses
* Error handling
* Administrative enquiry access
* Contact submission management

---

## 🏆 Accreditation Section

The application includes an accreditation section for presenting diagnostic centre certifications and quality standards.

Features include:

* Accreditation information
* Responsive presentation
* Reusable components
* Professional healthcare-oriented UI

---

## 💬 Testimonials

The application provides a testimonials section for displaying patient experiences and feedback.

Features include:

* Responsive testimonial presentation
* Reusable React components
* Mobile-friendly layouts

---

# 🔐 Security Implementation

Security is implemented across the authentication, API, database, application configuration, and deployment layers.

---

## 🛡️ Authentication & Authorization

Administrative functionality is protected using token-based authentication.

Implemented protections include:

* JWT-based authentication
* Protected API routes
* Authentication middleware
* Token verification
* Unauthorized request rejection
* Password hashing
* Administrative access control

---

## 🔑 Password Security

Administrative passwords are protected using `bcryptjs`.

Passwords are hashed before database storage.

Plain-text passwords are not stored in the application database.

---

## 🔒 Environment Variable Protection

Sensitive application credentials are stored using environment variables.

Protected values include:

* MongoDB connection URI
* JWT secret
* Cloudinary credentials
* Frontend origin configuration
* Backend API URL
* Analytics configuration

Environment files are excluded from source control.

---

## 🛡️ HTTP Security Headers

The backend uses `Helmet` middleware to configure security-related HTTP headers.

This improves protection against common browser-based vulnerabilities and reduces unnecessary exposure of backend implementation details.

---

## 🚦 API Rate Limiting

Express Rate Limit is used to control excessive requests to backend endpoints.

Benefits include:

* Reduced brute-force attempts
* Basic protection against automated abuse
* Controlled API request frequency
* Improved backend availability

---

## 🌐 CORS Configuration

Cross-Origin Resource Sharing is configured on the backend.

CORS configuration controls which frontend origins are permitted to communicate with backend APIs.

---

## ☁️ Cloud Media Storage

Uploaded application media is managed using Cloudinary.

Benefits include:

* Cloud-based media storage
* Reduced backend filesystem dependency
* Centralized media management
* Production-compatible asset delivery
* Environment-protected Cloudinary credentials

---

# 🔎 SEO Implementation

The application includes search engine optimization features.

Implemented SEO functionality includes:

* React Helmet Async
* Dynamic page titles
* Page-specific meta descriptions
* Canonical-ready page structure
* Semantic HTML structure
* Search-engine-friendly routing
* `robots.txt`
* XML sitemap
* Custom 404 page
* Search Console integration support
* Responsive mobile-friendly pages

---

# 📊 Analytics Integration

The application includes Google Analytics 4 integration.

Analytics functionality includes:

* GA4 configuration
* Route-based page view tracking
* React Router navigation tracking
* Production visitor measurement
* Website traffic analysis
* User navigation monitoring

---

# ⚡ Performance & Optimization

The application includes frontend, backend, asset, and deployment optimizations.

## Frontend Optimizations

* Vite production bundling
* JavaScript minification
* CSS minification
* Optimized static asset delivery
* Reusable React components
* Component-based architecture
* Loading states
* Error states
* Responsive image handling
* Reduced unnecessary API requests
* CDN-backed frontend delivery
* Production build optimization

---

## Backend Optimizations

* Structured REST API architecture
* Mongoose-based database communication
* Modular routes
* Middleware-based request processing
* Environment-based configuration
* Cloud-hosted database
* Cloud-based media storage
* API rate limiting
* Security middleware
* Production deployment configuration

---

# 📂 Project Structure

```text
burdwan-scan-centre/
│
├── backend/
│   │
│   ├── config/
│   │   └── Application and cloud service configuration
│   │
│   ├── controllers/
│   │   └── Backend business logic
│   │
│   ├── middleware/
│   │   ├── Authentication middleware
│   │   ├── Security middleware
│   │   └── Upload middleware
│   │
│   ├── models/
│   │   └── Mongoose database models
│   │
│   ├── routes/
│   │   └── REST API endpoints
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── Public assets
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   └── Images and static resources
│   │   │
│   │   ├── components/
│   │   │   ├── Navigation components
│   │   │   ├── Home page sections
│   │   │   ├── Service components
│   │   │   ├── Package components
│   │   │   ├── Notice components
│   │   │   ├── Equipment components
│   │   │   ├── Gallery components
│   │   │   ├── Accreditation components
│   │   │   └── Reusable UI components
│   │   │
│   │   ├── config/
│   │   │   └── Frontend API configuration
│   │   │
│   │   ├── pages/
│   │   │   ├── Home
│   │   │   ├── About
│   │   │   ├── Services
│   │   │   ├── Experts
│   │   │   ├── Notice Board
│   │   │   ├── Job Vacancies
│   │   │   ├── Packages
│   │   │   ├── Appointment
│   │   │   ├── Contact
│   │   │   ├── Privacy Policy
│   │   │   ├── Terms & Conditions
│   │   │   ├── Refund & Cancellation Policy
│   │   │   └── Not Found
│   │   │
│   │   ├── styles/
│   │   │   └── Modular CSS files
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   └── Server-related application files
│
├── .gitignore
│
└── README.md
```

---

# 📚 API Architecture

The backend follows REST API architecture.

Primary API resource groups include:

```text
/api/auth

/api/appointments

/api/notices

/api/jobs

/api/packages

/api/contact
```

---

## 🔐 Authentication API

```text
POST    /api/auth/login
```

Used for administrator authentication and token generation.

---

## 📅 Appointment APIs

```text
POST    /api/appointments

GET     /api/appointments

GET     /api/appointments/:id

DELETE  /api/appointments/:id
```

Appointment APIs support public appointment submission and protected administrative management.

---

## 📢 Notice APIs

```text
GET     /api/notices

GET     /api/notices/:id

POST    /api/notices

PUT     /api/notices/:id

DELETE  /api/notices/:id
```

Notice APIs support public notice retrieval and protected content management.

---

## 💼 Job Vacancy APIs

```text
GET     /api/jobs

GET     /api/jobs/:id

POST    /api/jobs

PUT     /api/jobs/:id

DELETE  /api/jobs/:id
```

Job APIs support public vacancy retrieval and protected vacancy management.

---

## 🩺 Package APIs

```text
GET     /api/packages

GET     /api/packages/:id

POST    /api/packages

PUT     /api/packages/:id

DELETE  /api/packages/:id
```

Package APIs support diagnostic package retrieval and administrative management.

---

## 📩 Contact APIs

```text
POST    /api/contact

GET     /api/contact

GET     /api/contact/:id

DELETE  /api/contact/:id
```

Contact APIs support public enquiry submission and protected administrative management.

---

# 🔑 Environment Variables

Environment variables are required for local development and production deployment.

Never commit `.env` files or production secrets to GitHub.

---

## Backend Environment Configuration

Create:

```text
backend/.env
```

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secure_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

FRONTEND_URL=http://localhost:5173
```

---

## Frontend Environment Configuration

Create:

```text
frontend/.env
```

Example:

```env
VITE_API_URL=http://localhost:5000
```

For production deployment, configure `VITE_API_URL` with the deployed Render backend URL.

---

# ⚙️ Local Installation

## Prerequisites

Install or configure:

* Node.js
* npm
* Git
* MongoDB Atlas account
* Cloudinary account

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/anilkumarpaital1-art/burdwan-scan-centre.git

cd burdwan-scan-centre
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

Create the backend `.env` file and configure the required environment variables.

Start the backend:

```bash
npm start
```

---

## 3️⃣ Install Frontend Dependencies

Open another terminal.

```bash
cd frontend

npm install
```

Create the frontend `.env` file.

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

Vite will provide the local application URL.

---

# 📜 Available Scripts

## Frontend

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

---

## Backend

Start backend application:

```bash
npm start
```

---

# 📦 Production Build

Create an optimized frontend production build:

```bash
cd frontend

npm run build
```

Vite generates the production application inside:

```text
frontend/dist/
```

The production build process includes:

* JavaScript bundling
* CSS bundling
* Asset processing
* Code minification
* Production optimization

---

# 🚀 Deployment Architecture

```text
                         GitHub Repository
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
               Vercel                        Render
          React + Vite App             Node + Express API
                    │                           │
                    │                           │
                    ▼                    ┌──────┴──────┐
             User Browser               │             │
                                        ▼             ▼
                                  MongoDB Atlas   Cloudinary
                                     Database     Media Storage
```

---

## ▲ Frontend Deployment – Vercel

The React/Vite frontend is deployed using Vercel.

Deployment configuration includes:

* GitHub repository integration
* Frontend root directory
* Vite production build
* Production environment variables
* Automatic deployment from the main branch
* HTTPS delivery
* CDN-backed static asset delivery

Required frontend production environment variable:

```env
VITE_API_URL=your_render_backend_url
```

---

## ⚙️ Backend Deployment – Render

The Node.js and Express.js backend is deployed as a Render Web Service.

Deployment configuration includes:

* GitHub repository integration
* Backend root directory
* Dependency installation
* Application start command
* Production environment variables
* MongoDB Atlas connectivity
* Cloudinary integration
* Automatic deployment from the main branch

Required backend production environment variables:

```text
MONGO_URI

JWT_SECRET

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

FRONTEND_URL
```

---

## 🗄️ Database Deployment – MongoDB Atlas

MongoDB Atlas provides the production database infrastructure.

Database implementation includes:

* Cloud-hosted MongoDB database
* Mongoose ODM integration
* Schema-based data models
* Environment-protected database credentials
* Persistent application data
* Backend-controlled database access

---

## ☁️ Media Storage – Cloudinary

Cloudinary provides production media storage and delivery.

Cloudinary integration includes:

* Cloud media uploads
* Media asset storage
* Production-compatible media URLs
* Backend upload processing
* Multer integration
* Multer Storage Cloudinary integration
* Environment-protected credentials

---

# 📊 Lighthouse Audit Results

The production application achieved the following Lighthouse audit results:

```text
Performance:      70 / 100

Accessibility:    94 / 100

Best Practices:  100 / 100

SEO:             100 / 100
```

The application achieved perfect scores for:

* Best Practices
* Search Engine Optimization

The audit also demonstrates strong accessibility implementation and optimized production performance.

---

# 📱 Responsive Design

The frontend is designed for multiple device categories.

Supported layouts include:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

Responsive implementation includes:

* CSS media queries
* Flexible layouts
* Responsive navigation
* Adaptive page sections
* Mobile-friendly forms
* Responsive images
* Touch-compatible interactive components

---

# 📈 Project Highlights

The Burdwan Scan Centre project demonstrates practical implementation of:

* Full-stack MERN application development
* Production-ready React architecture
* REST API development
* MongoDB Atlas integration
* Mongoose ODM
* Secure administrator authentication
* JWT authorization
* Password hashing
* Protected backend routes
* Cloud media storage
* File upload handling
* Helmet security middleware
* API rate limiting
* CORS configuration
* Environment variable protection
* Responsive web development
* Dynamic content management
* Appointment management
* Notice management
* Job vacancy management
* Diagnostic package management
* Contact enquiry management
* Search engine optimization
* Google Analytics integration
* Sitemap implementation
* Robots.txt configuration
* Custom 404 routing
* Lighthouse performance auditing
* Git version control
* GitHub repository management
* Continuous cloud deployment
* Vercel frontend hosting
* Render backend hosting
* MongoDB Atlas production database
* Cloudinary production media storage

---

# 🔄 Git Workflow

Check repository status:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Update project documentation"
```

Push changes:

```bash
git push origin main
```

Connected cloud services can automatically create new production deployments after changes are pushed to the configured GitHub branch.

---

# 👨‍💻 Author

## Anil Kumar Paital

**B.Tech Information Technology Student | Full-Stack Developer**

Email:

[anilkumarpaital1@gmail.com](mailto:anilkumarpaital1@gmail.com)

GitHub:

https://github.com/anilkumarpaital1-art

---

# ⭐ Support

If you find this project useful or interesting:

* ⭐ Star the repository
* 🍴 Fork the repository
* 🐛 Report issues
* 💡 Suggest improvements
* 🚀 Explore the project architecture

---

# 📄 License

This project was developed for **Burdwan Scan Centre**.

The source code is publicly available for portfolio, educational, demonstration, and development reference purposes.

Unauthorized commercial reuse, redistribution, resale, rebranding, or deployment of this project as another diagnostic centre, healthcare organization, laboratory, or commercial business website is not permitted without prior permission from the author.

---

<p align="center">
  <strong>🏥 Burdwan Scan Centre</strong>
</p>

<p align="center">
  Full-Stack Diagnostic Centre Web Platform
</p>

<p align="center">
  Built with React • Vite • Node.js • Express.js • MongoDB Atlas • Cloudinary
</p>

<p align="center">
  Developed by <strong>Anil Kumar Paital</strong>
</p>
