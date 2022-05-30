import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Hall } from './pages/Hall';
import { AllOrders } from './pages/AllOrders';
import './styles/main.css';
import './styles/forms.css';

export const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hall" element={<Hall />} />
                <Route path="/allorders" element={<AllOrders />} />
            </Routes>
        </BrowserRouter>
    );
};


