import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

import AdmissionInfo from "./pages/AdmissionInfo";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="admissioninfo" element={<AdmissionInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
