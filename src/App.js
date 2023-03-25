import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProviderDetails from "./components/Providers/ProviderDetails/ProviderDetails";
import Providers from "./components/Providers/ProviderPage/Providers";
import Homepage from "./components/Homepage/Homepage";
import AboutUS from "./components/AboutUs/AboutUs";
import Cars from "./components/Mycars/Mycars";
import Services from "./components/Services/Services";
import ProfileMenu from "./components/Homepage/ProfileMenu/ProfileMenu";
import Login from "./components/LogIn/Login";

function App() {
  return (
    <Router>
      <Homepage />
      <Routes>
        <Route path="/" element={<Services />}></Route>
        <Route path="/providers" element={<Providers />}></Route>
        <Route path="/provider_details/:id" element={<ProviderDetails />}></Route>
        <Route path="/profile" element={<ProfileMenu />}></Route>
        {/* <Route path="/MyReservations" element={<MyReservations />}></Route> */}
        <Route path="/MyCars" element={<Cars />}></Route>
        {/* <Route path="/Contact" element={<Contact />}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/aboutus" element={<AboutUS />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
