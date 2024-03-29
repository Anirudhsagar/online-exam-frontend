
import { Button, Flex } from "antd";
import './stylesheets/theme.css'
import './stylesheets/alignments.css'
import './stylesheets/textelements.css'
import './stylesheets/custom-components.css'
import './stylesheets/form-elements.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/common/Login/Login";
import Register from "./pages/common/Register/Register";
import Home from "./pages/common/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" component={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
