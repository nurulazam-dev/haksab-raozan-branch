# Hazrat_Abul_Khair_Sultanpury_RH.\_Association_Bangladesh(HAKSAB)-Raozan-Branch

v0.0.1 website repo.

# 📄 Religious Organization Management Web Application – Requirements

## 1. Project Overview

- The Religious Organization Management Web App is designed to help a faith-based organization manage:
- Financial records (income, expenses, donations, Giyarbi Sharif income, monthly collections)
- Attendance for events, meetings, and Mahfil
- Role-based access for Admin, Member, General Member, and Accountant
- Events & Notices
- Member management
- Reports for accounting and participation tracking
- The system will be built with MERN Stack (MongoDB, Express.js, React.js, Node.js) and will have a secure login system with JWT authentication.

## 2. Core Features

### A. Authentication & Authorization

- Login / Logout
- JWT-based authentication
- Password hashing (bcrypt)
- Role-based access control:
- Admin – Full access to all features and settings
- Accountant – Can manage financial records only
- Member – Can view events, attendance, personal profile
- General Member – Can view announcements, events

### B. Dashboard

#### Admin Dashboard:

- Summary of today’s income & expenses
- Monthly financial charts
- Upcoming events
- Recent attendance reports

#### Accountant Dashboard:

- Income & expense summary
- Quick add income/expense form

#### Member Dashboard:

- Upcoming events
- Attendance history

### C. Financial Management

- Income Management
- Add, edit, and delete income records
- Categories:
- General Donations
- Giyarbi Sharif Income
- Monthly Evening Collections
- Membership Fees
- Other Income
- Record date, amount, payment method (cash, bank, bKash/Nagad), notes
- Filter by date range & category
- Expense Management
- Add, edit, and delete expense records
- Categories: Event Expenses, Utilities, Maintenance, Staff Payments, Others
- Record date, amount, purpose, notes
- Filter by date range & category
- Reports
- Monthly income report
- Monthly expense report
- Category-based report
- Export as PDF or Excel

### D. Attendance Management

- Add attendance for each event or meeting
- Mark attendees as Present/Absent
- Digital signature upload (optional)
- Filter attendance by:
- Event
- Date
- Member
- Attendance report (PDF)

### E. Event & Mahfil Management

- Create, edit, and delete events
- Event details: title, description, date, time, location
- Assign organizers
- Track attendance for each event
- Event gallery (upload images)

### F. Member Management

- Add new members with a role
- Edit member details
- Deactivate/reactivate members
- View member profile:
- Personal info
- Role
- Attendance history
- Payments history

### G. Notice Board & Documents

- Post announcements
- Upload documents (meeting minutes, schedules, PDFs)
- View/download documents

### H. Reports & Analytics

- Financial summary charts
- Attendance trends
- Donation trends
- Export reports (PDF, Excel)

### I. Settings & Security

- Update organization details (name, logo, address)
- Manage roles & permissions
- Change password
- Enable 2FA (optional future enhancement)
- Data backup & restore (admin only)

## 3. Non-Functional Requirements

- Responsive Design – Mobile, tablet, and desktop friendly
- Security – Encrypted passwords, JWT auth, role-based API protection
- Performance – Should handle 10,000+ records without lag
- Scalability – Can be extended for multiple branches in the future
- Localization – Support for Bangla & English (multi-language support)

## 4. Tech Stack

- Frontend: `React.js` + `Tailwind CSS` + `Framer Motion` + `Sweets alart2` + `React Router Dom` + `React Icons` + `React Hook Form`.
- Backend: `Node.js` + `Express.js`
- Database: `MongoDB (Mongoose ORM)`
- Authentication: `JWT` + `bcrypt`
- Deployment: `Render (frontend)`, `Render (backend)`
- File Storage: `Cloudinary`.
- Reporting: `jsPDF`

## 5. API Modules

- Auth API: login, register, logout
- User API: CRUD members, change role
- Finance API: CRUD income & expenses, generate reports
- Attendance API: CRUD attendance records
- Event API: CRUD events, manage attendees
- Notice API: CRUD announcements
- Report API: generate & export

---

## Folder Structure

haksab-raozan-branch/
│
├── backend/ # Node.js + Express + MongoDB
│ ├── config/ # DB & env configs
│ │ └── db.js
│ │
│ ├── controllers/ # Business logic
│ │ ├── auth.controller.js
│ │ ├── user.controller.js
│ │ ├── finance.controller.js
│ │ ├── attendance.controller.js
│ │ ├── event.controller.js
│ │ └── notice.controller.js
│ │
│ ├── middlewares/ # Security & validation middlewares
│ │ ├── auth.middleware.js
│ │ ├── role.middleware.js
│ │ └── error.middleware.js
│ │
│ ├── models/ # Mongoose schemas
│ │ ├── user.model.js
│ │ ├── income.model.js
│ │ ├── expense.model.js
│ │ ├── event.model.js
│ │ ├── attendance.model.js
│ │ ├── donation.model.js
│ │ └── notice.model.js
│ │
│ ├── routes/ # Express routes
│ │ ├── auth.routes.js
│ │ ├── user.routes.js
│ │ ├── finance.routes.js
│ │ ├── attendance.routes.js
│ │ ├── event.routes.js
│ │ └── notice.routes.js
│ │
│ ├── utils/ # Helper functions
│ │ ├── generateReport.js
│ │ ├── sendEmail.js
│ │ └── fileUpload.js
│ │
│ ├── validations/ # Joi validations
│ │ ├── auth.validation.js
│ │ ├── finance.validation.js
│ │ └── event.validation.js
│ │
│ ├── .env # Environment variables
│ ├── server.js # Entry point
│ └── package.json
│
│
├── frontend/ # React.js + Tailwind CSS
│ ├── public/ # Static files
│ │ └── index.html
│ │
│ ├── src/
│ │ ├── assets/ # Images, icons, fonts
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Navbar.jsx
│ │ │ ├── Sidebar.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── ChartCard.jsx
│ │ │
│ │ ├── layouts/ # Dashboard & Auth layouts
│ │ │ ├── DashboardLayout.jsx
│ │ │ └── AuthLayout.jsx
│ │ │
│ │ ├── pages/ # Page-wise modules
│ │ │ ├── auth/
│ │ │ │ ├── Login.jsx
│ │ │ │ └── Register.jsx
│ │ │ ├── dashboard/
│ │ │ │ ├── AdminDashboard.jsx
│ │ │ │ └── AccountantDashboard.jsx
│ │ │ ├── finance/
│ │ │ │ ├── IncomeList.jsx
│ │ │ │ ├── AddIncome.jsx
│ │ │ │ ├── ExpenseList.jsx
│ │ │ │ └── AddExpense.jsx
│ │ │ ├── attendance/
│ │ │ │ ├── AttendanceList.jsx
│ │ │ │ └── MarkAttendance.jsx
│ │ │ ├── events/
│ │ │ │ ├── EventList.jsx
│ │ │ │ └── AddEvent.jsx
│ │ │ ├── members/
│ │ │ │ ├── MemberList.jsx
│ │ │ │ └── MemberProfile.jsx
│ │ │ ├── notices/
│ │ │ │ ├── NoticeList.jsx
│ │ │ │ └── AddNotice.jsx
│ │ │ └── reports/
│ │ │ └── ReportsPage.jsx
│ │ │
│ │ ├── redux/ # Redux Toolkit (state management)
│ │ │ ├── store.js
│ │ │ ├── authSlice.js
│ │ │ ├── userSlice.js
│ │ │ ├── financeSlice.js
│ │ │ └── eventSlice.js
│ │ │
│ │ ├── services/ # API calls (Axios)
│ │ │ ├── authService.js
│ │ │ ├── userService.js
│ │ │ ├── financeService.js
│ │ │ ├── eventService.js
│ │ │ └── attendanceService.js
│ │ │
│ │ ├── routes/ # Protected & public routes
│ │ │ └── AppRoutes.jsx
│ │ │
│ │ ├── utils/ # Helper functions
│ │ │ └── formatDate.js
│ │ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
└── README.md
