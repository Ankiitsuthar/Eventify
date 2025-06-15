# Eventify - Event Planning & Vendor Comparison Platform 🎉

## Overview ✨
**Eventify** is a one-stop platform designed to simplify event planning by allowing users to compare prices and book vendors for various occasions like weddings, corporate events, and private parties. It offers transparent pricing, real-time availability, and user reviews to help customers make informed decisions.

## Features 🚀
- **Vendor Search**: Search for vendors by category, location, and price range.
- **Vendor Comparison**: Side-by-side comparison of vendors based on pricing, reviews, and availability.
- **Real-Time Availability**: Check vendor availability for specific dates.
- **User Reviews**: View and submit reviews for vendors.
- **Secure Booking System**: Finalize bookings securely with payment options.
- **Admin Dashboard**: Vendors can manage profiles, update services, and view bookings.
- **Fraud Detection**: Ensures secure and reliable transactions.

## Problem Statement 🔍
Event planning can be stressful and time-consuming due to:
- Lack of centralized platforms for vendor comparison.
- Pricing ambiguity and unavailability of real-time updates.
- Inconsistent service quality without proper reviews.

**Eventify** solves these problems by providing a unified, transparent, and easy-to-use platform.

## Tech Stack 🛠️
### **Frontend:**
- **React.js**: For dynamic UI and responsive design.
- **Bootstrap/Tailwind CSS**: For modern styling.

### **Backend:**
- **Node.js** with **Express.js**: For server-side logic.
- **Authentication**: Using JWT and bcrypt for security.

### **Database:**
- **MongoDB**:Non-Relational(Document) database for data.
- **Schema**:
  - Users: user_id, name, email, role, password.
  - Vendors: vendor_id, name, category, pricing, availability.
  - Bookings: booking_id, user_id, vendor_id, event_date, status.

### **Hosting Services:**
- **Frontend**: Hosted on **Vercel**.
- **Database Hosting**: **AWS RDS** or **Heroku**.

## System Flow 📊
1. **Home Page** ➡️ Search Vendors ➡️ Compare Vendors ➡️ Confirm Booking.
2. **Admin Dashboard** manages vendors, updates services, and handles reviews.

## Installation 🛠️
1. **Clone the Repository**:
```
git clone https://github.com/Ankiitsuthar/Eventify.git
```
2. **Install Dependencies**:
```
npm install
```
3. **Set Environment Variables**:
```
Create a .env file with:
DATABASE_URL=<your-database-url>
SECRET_KEY=<your-secret-key>
```
4. **Run Development Server**:
```
npm run dev
```

## Deployment 🚀
Deploy the frontend using **Vercel** and the backend using **Heroku** or **AWS EC2**.

## Tools & Pre-Requisites 🔧
- **Vercel**: Hosting frontend.
- **AWS RDS/Heroku**: Database hosting.
- **Node.js & npm**: Development environment.
- **MongoDB**: Database management.

## Future Enhancements 🛠️
- Integration with event venues and transportation services.
- AI-based vendor suggestions based on preferences.
- Mobile app development.

## Acknowledgments 🙌
Special thanks to the friends who helped shape this platform.

---

### Contact 📧
For feedback or queries, reach out to **ankiitsuthar@gmail.com**.

