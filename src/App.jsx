import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ClientDetails from "./components/ClientDetails";
function App() {
return(

<Routes>

<Route path="/" element={<Dashboard/>} ></Route>
<Route path="/client" element={<ClientDetails/>} ></Route>

</Routes>

)


}

export default App