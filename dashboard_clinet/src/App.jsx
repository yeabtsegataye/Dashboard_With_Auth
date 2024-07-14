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
import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRefreshToken from "./hooks/useRefreshToken";
import verifyToken from "./middleware/verifiToken";

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const refresh = useRefreshToken();
  const dispatch = useDispatch();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isInitialLoad ) {
      refresh();
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, refresh]);

  const token = useSelector((state) => state.auth.token);

  const verified = async () => {
    const IsVerified = await verifyToken(token, dispatch, refresh);
    setIsVerified(IsVerified);
  };
  verified();

  // console.log("isverified : ", isVerified);

  const location = useLocation();
  const authPaths = ["/login", "/signup"]; // Convert to lowercase

  const currentPath = location.pathname.toLowerCase();
  const shouldHideSideBarAndHeader = authPaths.includes(currentPath);
  return (
    <>
      {!shouldHideSideBarAndHeader && isVerified && <Header />}
      <main className={!shouldHideSideBarAndHeader && isVerified && `main`}>
        {!shouldHideSideBarAndHeader && isVerified && <SideBar />}
        <div className={!shouldHideSideBarAndHeader && isVerified && `content`}>
          <Routes>
            <Route
              path={"/"}
              element={isVerified ? <Dashboard /> : <Login />}
            />
            <Route
              path={"/setting"}
              element={isVerified ? <Setting /> : <Login />}
            />
            <Route
              path={"/Users"}
              element={isVerified ? <AllUsers /> : <Login />}
            />
            <Route
              path={"/Login"}
              element={isVerified ? <Dashboard /> : <Login />}
            />
            <Route
              path={"/Signup"}
              element={isVerified ? <Dashboard /> : <Signup />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
