import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// =============== router Water app ================
const ThemeWaterLevel = lazy(() => import("../themes/waterLevel.theme"));
const WaterLevel404 = lazy(() => import("../routes/_404"));
const WaterLevelLayout = lazy(() => import("../layout/waterLevel.layout"));
const AboutUs = lazy(() => import("../views/AboutUs/AboutUsComponent"));
const ContactUs = lazy(() => import("../views/ContactUs/ContactUsComponent"));

// ======= path routes ========
const privateWaterRoute = [
  { path: "/aboutUs", component: <AboutUs /> },
  { path: "/contactUs", component: <ContactUs /> },
];

const WaterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ThemeWaterLevel>
        <WaterLevelLayout/>
      </ThemeWaterLevel>}>
        {
          privateWaterRoute.map((route, index) =>(
            <Route key={index} path={route.path} element={route.component} />
          ))
        }
      </Route>

      <Route path="*" element={<WaterLevel404/>} />

    </Routes>
  );
};
export default WaterRoutes;
