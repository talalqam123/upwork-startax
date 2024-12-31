import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ClientDetails from "./components/ClientDetails";
import RemunerationForm from "./components/Business/AddBusiness/BSPL/remuneration";
function App() {
return(

<Routes>

<Route path="/" element={<Dashboard/>} ></Route>
<Route path="/client" element={<ClientDetails/>} ></Route>
{/* Define route for Remuneration Form */}
<Route path="/business_remuneration/:clientRelId" element={<RemunerationForm />} />
     
</Routes>

)


}

export default App