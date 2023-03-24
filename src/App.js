import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProviderDetails from "./components/Providers/ProviderDetails/ProviderDetails";
import Providers from "./components/Providers/ProviderPage/Providers";
import Homepage from "./components/Homepage/Homepage";
import Services from "./components/Services/Services";
import Login from "./components/Register/Login/Login";
import Signup from "./components/Register/Signup/Signup";
import Forgot from "./components/Register/Forgot/Forgot";

function App() {
  return (
    <Router>
        <Homepage  />
          <Routes>
            <Route path="/" element={<Services />}></Route>
            <Route path="/providers" element={<Providers />}></Route>
            <Route path="/provider_details/:id" element={<ProviderDetails />}></Route>
            {/* <Route path="/reservation/provider/:id" element={<Reservation />}></Route> */}
            {/* <Route path="/MyReservations" element={<MyReservations />}></Route> */}
            {/* <Route path="/Reservation" element={<ReservationDetails />}></Route> */}
            {/* <Route path="/MyCars" element={<MyCars />}></Route> */}
            {/* <Route path="/Profile" element={<Profile />}></Route> */}
            {/* <Route path="/Contact" element={<Contact />}></Route> */}
            {/* <Route path="/About" element={<About />}></Route> */}
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Forgot" element={<Forgot />}></Route>
          
          </Routes>
    </Router>
  );
}

export default App;
