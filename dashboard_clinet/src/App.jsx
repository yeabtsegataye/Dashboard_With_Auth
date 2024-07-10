import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Setting } from "./pages/Setting";
import { Dashboard } from "./pages/Dashboard";
import { AllUsers } from "./pages/AllUsers";
import { Notfound } from "./pages/Notfound";
import Login from "./auth/Login";
import { Signup } from "./auth/Signup";
import { lazy } from 'react';

function App() {
  // Use the useLocation hook to get the current path
  const location = useLocation();

  // Define a set of paths where the Sidebar and Header should not be displayed
  const authPaths = ["/Login", "/Signup"];

  // Check if the current path matches any of the paths in authPaths
  const shouldHideSideBarAndHeader = authPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Header and SideBar */}
      {!shouldHideSideBarAndHeader && <Header />}
      <main className={!shouldHideSideBarAndHeader && `main`}>
        {!shouldHideSideBarAndHeader && <SideBar />}
        <div className={!shouldHideSideBarAndHeader && `content`}>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/setting"} element={<Setting />} />
            <Route path={"/Users"} element={<AllUsers />} />
            <Route path={"/Login"} element={<Login />} />
            <Route path={"/Signup"} element={<Signup />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
