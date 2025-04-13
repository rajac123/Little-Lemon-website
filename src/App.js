import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import pages from "./utils/pages";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/index";
import Bookings from "./components/pages/Bookings";
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";
import UnderConstruction from "./components/pages/UnderConstruction/index";
import About from "./components/pages/About/About";
import LoginPage from "./components/pages/Login_Registration/LogInPage";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const validPaths = Array.from(pages.values()).map((p) => p.path);
    const isValidPath = validPaths.includes(location.pathname);

    if (!isValidPath && location.pathname !== "/") {
      toast.error("Oops! Page not found. Redirecting to Home...", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate(pages.get("home").path);
      }, 2000);
    }
  }, [location, navigate]);

  return (
    <>
      <Toaster />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route
            path={pages.get("menu").path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get("bookings").path} element={<Bookings />} />
          <Route
            path={pages.get("confirmedBooking").path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get("orderOnline").path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get("login").path} element={<LoginPage />} />
          <Route path='*' element={<></>} /> {/* Handled by useEffect */}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
