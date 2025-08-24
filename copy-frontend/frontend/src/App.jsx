import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Optional: Import any global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;