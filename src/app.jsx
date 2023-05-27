import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register'
import Home from "./pages/home";
import BodyLogin from "./pages/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BodyLogin/>}></Route>
                <Route path="/Resgiter" element={<Register/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;