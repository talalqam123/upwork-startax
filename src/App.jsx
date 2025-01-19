import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ClientDetails from "./components/ClientDetails";
import Dashboard from "./components/Dashboard";
import AddClientInfo from "./components/add_clientdetails";
import ClientSummary from "./components/26AS_AIS";
import AddClient from "./components/add_client_by_id";
import RemunerationForm from "./components/Business/AddBusiness/BSPL/remuneration";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    
                    {/* Client routes - Let ClientDetails handle all nested routing */}
                    <Route path="client/*" element={<ClientDetails />} />
                    
                  
                    
                    {/* Non-client routes */}
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
