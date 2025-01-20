import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Dashboard/Dashboard";
import ClientDetails from "./components/Client Details/ClientDetails";
import Dashboard from "./components/Dashboard/Navbar";
import AddClientInfo from "./components/Dashboard/add_clientdetails";
import ClientSummary from "./components/Client Details/26AS_AIS";
import AddClient from "./components/Dashboard/add_client_by_id";
import RemunerationForm from "./components/Business/AddBusiness/BSPL/remuneration";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    
                    {/* Handle client routes with wildcard and replace */}
                    <Route path="client" element={<Navigate to="client/permanent/basic" replace />} />
                    <Route path="client/*" element={<ClientDetails />} />
                    
                    {/* Other routes */}
                    <Route path="basic_details/add_client" element={<AddClientInfo />} />
                    <Route path="basic_details/26AIS" element={<ClientSummary />} />
                    <Route path="basic_details/add_client_by_id_password" element={<AddClient />} />
                </Route>
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default App;
