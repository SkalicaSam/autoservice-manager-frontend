import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/CustomerDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/customers" />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/:id" element={<CustomerDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;