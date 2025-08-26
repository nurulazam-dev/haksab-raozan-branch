import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import TestRoutes from "./routes/TestRoutes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <TestRoutes />
          {/* <AppRoutes /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
