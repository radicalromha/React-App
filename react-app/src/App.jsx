import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import World from "./pages/World";
import Science from "./pages/Science";
import Business from "./pages/Business";
import Tech from "./pages/Tech";
import Health from "./pages/Health";
import ErrorBoundary from "./components/ErrorBoundary";

const NotFound = () => <div>404 - Page Not Found</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/world" element={<World />} />
        <Route path="/science" element={<Science />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/health" element={<Health />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
