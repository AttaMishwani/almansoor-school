import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Login from "./components/auth/login";
import Signup from "./components/auth/Signup";

import AdmissionInfo from "./pages/AdmissionInfo";
import EventsPage from "./pages/EventsPage";
import AdminPanel from "./pages/AdminPanel";
import { useSelector } from "react-redux";
import AdminAuth from "./components/auth/AdminAuth";

const AdminRoute = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.isAuthenticated && auth.user?.email) {
    return <AdminPanel />;
  }

  return <AdminAuth />;
};

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
          <Route path="adminpanel" element={<AdminRoute />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
