import React,{ useState, useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="w-full h-full overflow-x-hidden">
    <Router>
      <Navbar />
      <Routes>
        {/* Default route for Home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
