import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import LandingPage from "../pages/landing-page";
import Home from "../pages/home";
import { UserRouteProtected } from "./user/userRouteProtected";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import YourMoney from "../pages/your-money";
import Profile from "../pages/profile/Profile";
import YourData from "../pages/your-data";
import QrLink from "../pages/qrlink-page";
import AddMoney from "../pages/addmoney";
import CardsPage from "../pages/cards-page";
// import Activity from "../pages/activity/Activity";
// import Details from "../pages/activity/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<UserRouteProtected />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/money" element={<YourMoney />} />
          <Route path="/data" element={<YourData />} />
          <Route path="/addmoney" element={<AddMoney />} />
          <Route path="/qrlink" element={<QrLink />} />
          <Route path="/cards" element={<CardsPage />} />
          {/* <Route path="/activity" element={<Activity />} /> */}
          {/* <Route path="/activity/:id" element={<Details />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
