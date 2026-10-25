# 🚆 POZY Train — Online Train Ticket Booking System

> A full-stack train ticket booking and travel-package management platform built with **React 18**, **Material UI**, **Node.js / Express**, and a **JSON-based data store**.

---

## 📖 Overview

**POZY Train** is an end-to-end railway reservation web application that lets passengers search for trains, book tickets, check PNR status, and purchase curated travel packages — all from a single, responsive interface. An integrated **Admin Panel** gives administrators the tools to manage trains, stations, employees, users, bookings, and travel packages without touching a database directly.

Key highlights:

- **User-facing portal** — browse services, search trains, book tickets, manage bookings, and explore travel packages.
- **Admin dashboard** — full CRUD for trains, stations, employees, packages, bookings, contacts, and user accounts.
- **Email notifications** — automated OTP delivery, PNR confirmations, cancellation alerts, and package-booking receipts via SMTP (Nodemailer).
- **Secure authentication** — signup / login with OTP-based password-reset flow.
- **Lazy-loaded pages & loading states** — smooth UX powered by React Suspense.

---

## ✨ Features

### 👤 User Module
| Feature | Description |
|---|---|
| **Home** | Landing page with service highlights and featured packages |
| **Train Search** | Search available trains between stations on a given date |
| **Ticket Booking** | Book tickets with seat selection and receive PNR via email |
| **PNR Status** | Check real-time booking status by PNR number |
| **Package Browsing** | Explore curated travel packages with pricing & itineraries |
| **Package Booking** | Book a package and receive a detailed receipt via email |
| **Cancellation** | Cancel bookings and receive confirmation emails |
| **Auth & Profile** | Signup, Login, Change Password, Forgot Password (OTP) |
| **Static Pages** | About, Contact, Services, FAQ, Privacy Policy, Terms & Conditions |

### 🔧 Admin Module
| Feature | Description |
|---|---|
| **Dashboard** | Overview of system metrics |
| **Manage Trains** | Add, edit, and delete train entries |
| **Manage Stations** | Add, edit, and delete station entries |
| **Manage Packages** | Add, edit, and delete travel packages |
| **Manage Employees** | Add, edit, and delete employee records |
| **Manage Bookings** | View and manage all user bookings |
| **Manage Contacts** | View and respond to user inquiries |
| **Manage Users** | View and administer user accounts |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, React Router v6, Material UI (MUI) v6, SASS / SCSS, Styled Components |
| **Backend** | Node.js, Express 4 |
| **Email Service** | Nodemailer (Gmail SMTP) |
| **Data Store** | JSON file (`db.json`) |
| **Utilities** | Day.js, React Toastify, React Icons, React Datepicker, React Loading |
| **Dev Tooling** | Create React App (react-scripts 5) |

---

## 📁 Project Structure

```
POZY_Train/
└── myproject/
    ├── public/              # Static assets (images, icons, etc.)
    ├── src/
    │   ├── Admin/
    │   │   └── Components/  # Admin panel pages (Add/Manage Train, Station, Package, Employee, etc.)
    │   ├── User/
    │   │   └── Components/  # User-facing pages (Home, Booking, TrainSearch, PNRStatus, Package, etc.)
    │   ├── App.js           # Root component with routing configuration
    │   ├── Sass.scss        # Global SCSS styles
    │   └── index.js         # React entry point
    ├── server.js            # Express backend (email APIs)
    ├── db.json              # JSON data store
    ├── package.json         # Dependencies & scripts
    └── .env                 # Environment variables (SMTP credentials)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x
- **npm** ≥ 8.x

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd POZY_Train/myproject

# 2. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in `myproject/` with your SMTP credentials:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> **Tip:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) instead of your account password.

### Running the Application

```bash
# Start the React frontend (port 3000)
npm start

# In a separate terminal — start the Express backend (port 5000)
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 API Endpoints (Backend)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/send-otp` | Send OTP email for password reset |
| `POST` | `/send-pnr` | Send PNR confirmation email after booking |
| `POST` | `/send-cancel` | Send booking cancellation confirmation email |
| `POST` | `/send-package-receipt` | Send package booking receipt email |

---

## 📄 License

This project is developed for educational / portfolio purposes.

---

<p align="center">Made with ❤️ by the POZY Train team</p>
