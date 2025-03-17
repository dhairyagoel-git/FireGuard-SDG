import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout, { NoNavbarRoutes } from "./layout.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MapsPage from "./components/mapspage.jsx";
import { ReportFire } from "./components/ReportFire.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import { Login } from "./components/login.jsx";
import {
  DownloadResources,
  SafetyTipsAndCommunityResources,
} from "./components/SafetyTips.jsx";
import {FireStationLogin,  FireStation } from "./components/FireStationPage.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="maps" element={<MapsPage />} />
        <Route path="reports" element={<ReportFire />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<NoNavbarRoutes />}>
        <Route path="/" element={<NoNavbarRoutes />}>
          <Route path="tips" element={<SafetyTipsAndCommunityResources />} />
          <Route path="download" element={<DownloadResources />} />
        </Route>
      </Route>
      <Route path='/firestation' element={<FireStation/>}/>
      <Route path='/firestation/login' element={<FireStationLogin/>}/>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
