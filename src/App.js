import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProviderDetails from "./components/Providers/ProviderDetails";
import Providers from "./components/Providers/Providers";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Homepage />
          <Routes>
            {/* <Route path="/" element={<Services />}></Route> */}
            <Route path="/providers" element={<Providers />}></Route>
            <Route path="/provider_details/:id" element={<ProviderDetails />}></Route>
            {/* <Route path="/reservation/provider/:id" element={<Reservation />}></Route> */}
            {/* <Route path="/MyReservations" element={<MyReservations />}></Route> */}
            {/* <Route path="/Reservation" element={<ReservationDetails />}></Route> */}
            {/* <Route path="/MyCars" element={<MyCars />}></Route> */}
            {/* <Route path="/CarDetails" element={<CarDetails />}></Route> */}
            {/* <Route path="/Profile" element={<Profile />}></Route> */}
            {/* <Route path="/Contact" element={<Contact />}></Route> */}
            {/* <Route path="/LogIn" element={<LogIn />}></Route> */}
            {/* <Route path="/Registration" element={<Registration />}></Route> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
