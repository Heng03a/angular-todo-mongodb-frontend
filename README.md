# 🚀 Angular Todo – Distributed Full-Stack Application

A distributed full-stack application demonstrating secure authentication, 
scalable API architecture, and cloud-based deployment.

## 🔍 Overview

This project is a production-oriented distributed web application built with **Angular (SPA frontend)** and **Node.js + Express (REST API backend)**, backed by **MongoDB Atlas**.

The system demonstrates real-world engineering practices including:

* JWT-based stateless authentication
* Secure cross-origin communication (CORS configuration)
* Cloud-based distributed deployment
* Clean API architecture
* Separation of concerns
* Scalable client-server design

Frontend and backend are independently deployed, simulating a real cloud-hosted microservice-style architecture.

---

## 🌐 Live Demo

* 🔗 **Frontend (Vercel):**
* 🔗 **Backend API (Railway / Cloud Host):**
* 🔗 **Frontend Repository:**
* 🔗 **Backend Repository:**

---

## 🛠 Tech Stack

### Frontend

* Angular
* TypeScript
* RxJS
* Responsive CSS (Flexbox)

### Backend

* Node.js
* Express.js
* RESTful API design

### Database

* MongoDB Atlas (Cloud-hosted NoSQL database)

### Authentication

* JWT (JSON Web Token)
* Stateless session management

### Deployment

* Vercel (Frontend)
* Railway (Backend)
* Distributed cloud architecture

---

## ✨ Core Features

* Secure user authentication (Register / Login)
* JWT-based authorization via HTTP headers
* RESTful API with structured routing
* Full CRUD task management
* Real-time UI updates
* Task filtering & sorting logic
* Responsive mobile-first layout
* Cross-origin secured communication
* Modular project structure for maintainability

---

## 🏗 Architecture Overview

This application follows a distributed client-server model:

```
Angular SPA (Frontend)
        ↓
Secure HTTP Requests (JWT in Authorization Header)
        ↓
Node.js / Express REST API (Backend)
        ↓
MongoDB Atlas (Cloud Database)
```

### Architectural Principles

* Frontend and backend deployed independently
* Stateless backend architecture
* API-first design
* Clear separation between presentation, business logic, and data layers
* Environment-based configuration management

---

## 🔐 Security Considerations

* JWT stored and transmitted securely via Authorization headers
* CORS explicitly configured to allow trusted origins only
* Environment variables used for sensitive configuration
* Stateless authentication improves scalability and security

---

## 🧩 Maintainability

* Modular Angular component architecture
* Service-based API abstraction
* Backend controller-model separation
* Centralized error handling
* Clean folder structure

---

## 📈 Scalability Design

* Stateless backend supports horizontal scaling
* Cloud-hosted MongoDB Atlas
* Frontend and backend independently scalable
* API abstraction enables future frontend replacement (e.g., React / Next.js)

---

## 📱 Responsive & Cross-Browser Validation

* Mobile-first UI design
* Flexbox-based layout
* Tested on Chrome, Edge, Firefox
* Responsive container constraints

---

## 🚀 Future Enhancements

* Unit testing with Jest
* Role-based access control (RBAC)
* API rate limiting
* CI/CD automation
* Docker containerization
* Storybook component documentation
