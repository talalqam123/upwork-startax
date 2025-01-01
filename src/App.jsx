import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ClientDetails from "./components/ClientDetails";
import RemunerationForm from "./components/Business/AddBusiness/BSPL/remuneration";
import ShareDebenturesForm from "./components/Business/Capital Gains/share_debentures";
function App() {
return(

<Routes>

<Route path="/" element={<Dashboard/>} ></Route>
<Route path="/client" element={<ClientDetails/>} ></Route>
{/* Define route for Remuneration Form */}
<Route path="/business_remuneration/:clientRelId" element={<RemunerationForm />} />
<Route path="/catalog_2024/capital_gains_share_debentures/:clientRelId" element={<ShareDebenturesForm />} />
</Routes>

)


}

export default App