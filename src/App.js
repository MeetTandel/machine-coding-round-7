import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CountryDetails } from "./pages/Home/CountryDetails";
import { Home } from "./pages/Home/Home";
import { LocationDetails } from "./pages/Home/LocationDetails";
import { PlaceDetails } from "./pages/Home/PlaceDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetails />} />
        <Route path="/:country/:location" element={<LocationDetails />} />
        <Route path="/:country/:location/:place" element={<PlaceDetails />} />
      </Routes>
    </div>
  );
}

export default App;
