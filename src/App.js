import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProviderDetails from "./components/Providers/ProviderDetails";
import Providers from "./components/Providers/Providers";
import SideBar from "./components/SideBar/SideBar";
import Homepage from "./components/Homepage/Homepage";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Homepage />
          <h1>Car-Fix Reservation System</h1>
        </div>
        <SideBar />
        <div className="body">
          <Routes>
            <Route path="/providers" element={<Providers />}></Route>
            <Route
              path="/provider_details/:id"
              element={<ProviderDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
