import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register'
import Home from "./pages/home.jsx";
import BodyLogin from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="App">
                    <Routes>
                        <Route exact path="/" element={<BodyLogin />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/index" element={<Home />} />
                    </Routes>
            </div>
        </Router>
    );
}

export default App;