import Header from "./components/utils/Header";
import Home from "./components/pages/Home/index";
import NotFound from "./components/pages/NotFound/index";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Login/Register/Register";
import Profile from "./components/pages/Profile/Profile";
import Chat from "./components/pages/Chat/index";
import FindDoctor from "./components/pages/Doctor/FindDoctor";
import Appointment from "./components/pages/Doctor/Appointment";
import Checkout from "./components/pages/Doctor/Appointment/Checkout/Checkout";
import ProtectedRoute from "./Routes/ProtectedRoute";
import useAuth from "../hooks/useAuth";

function App() {
  const location = useLocation();
  useAuth();
  const isChatPage = location.pathname === "/chat";
  return (
    <>
      {!isChatPage && <Header />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/doctor" element={<FindDoctor />} />
        <Route path="/doctor/appointment" element={<Appointment />} />
        <Route path="/doctor/appointment/checkout/:id" element={<Checkout />} />
        <Route path="/service" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isChatPage && <Footer />}
    </>
  );
}

export default App;
