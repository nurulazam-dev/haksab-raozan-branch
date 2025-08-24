# Hazrat_Abul_Khair_Sultanpury_RH._Association_Bangladesh (HAKSAB) - Frontend Documentation

## Overview

This repository contains the frontend code for the Religious Organization Management Web Application, designed to assist the HAKSAB Raozan Branch in managing various organizational activities, including financial records, attendance, events, and member management.

## Project Structure

The frontend is structured as follows:

- **public/**: Contains static files, including the main HTML file.
- **src/**: Contains all the source code for the React application.
  - **assets/**: Images, icons, and fonts used throughout the application.
  - **components/**: Reusable UI components such as Navbar, Sidebar, Footer, and ChartCard.
  - **layouts/**: Layout components for different sections of the application.
  - **pages/**: Page components for various functionalities like authentication, dashboard, finance, attendance, events, members, notices, and reports.
  - **redux/**: State management using Redux Toolkit, including slices for authentication, users, finance, and events.
  - **services/**: API service files for handling requests related to authentication, users, finance, events, and attendance.
  - **routes/**: Defines the application's routing structure.
  - **utils/**: Utility functions for common tasks, such as date formatting.
  - **App.jsx**: Main application component that integrates routing and layout.
  - **main.jsx**: Entry point for the React application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Features

- **Authentication**: User login and registration with JWT-based authentication.
- **Dashboard**: Admin and Accountant dashboards with financial summaries and reports.
- **Financial Management**: Manage income and expenses with detailed records and reports.
- **Attendance Management**: Track attendance for events and meetings.
- **Event Management**: Create, edit, and manage events with attendance tracking.
- **Member Management**: Manage member details and profiles.
- **Notice Board**: Post announcements and upload documents.
- **Reports & Analytics**: Generate and export financial and attendance reports.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **API Calls**: Axios

## Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.