import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProviderDetails from "./components/Providers/ProviderDetails/ProviderDetails";
import Providers from "./components/Providers/ProviderPage/Providers";
import Homepage from "./components/Homepage/Homepage";
import Services from "./components/Services/Services";
//import Login from "./components/Login/Login";
import Reservation from "./components/Reservation/reservation.js";

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
            {/* <Route path="/LogIn" element={<LogIn />}></Route> */}
            {/* <Route path="/Registration" element={<Registration />}></Route> */}
          </Routes>
          <Reservation></Reservation>
    </Router>
  );
}

export default App;
