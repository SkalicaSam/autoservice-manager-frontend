import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/CustomerDetail";
import VehicleDetail from "./pages/VehicleDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/customers" />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/:id" element={<CustomerDetail />} />
                <Route path="/vehicles/:id" element={<VehicleDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;