import Header from "./components/utils/Header";
import Home from "./components/pages/Home/index";
import NotFound from "./components/pages/NotFound/index";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Login/Register/Register";
import Profile from "./components/pages/Profile/Profile";
import Chat from "./components/pages/Chat/index";
import FindDoctor from "./components/pages/Doctor/FindDoctor";
import Appointment from "./components/pages/Doctor/Appointment";
import Checkout from "./components/pages/Doctor/Appointment/Checkout/Checkout";

function App() {
  const user = false;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<FindDoctor />} />
        <Route path="/doctor/appointment" element={<Appointment />} />
        <Route path="/doctor/appointment/checkout/:id" element={<Checkout />} />
        <Route path="/service" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
