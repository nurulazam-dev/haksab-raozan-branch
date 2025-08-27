import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import TestRoutes from "./routes/TestRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <TestRoutes />
        {/* <AppRoutes /> */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
