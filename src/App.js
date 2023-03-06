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
          </Routes>
      </div>
    </Router>
  );
}

export default App;
