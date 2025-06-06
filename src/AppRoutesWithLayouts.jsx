import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./utils/Constant.js";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import TrainingPage from "./Components/AllExercise.jsx";
import TrailPage from "./Pages/TrailPage.jsx";
import RealTimePage from './Pages/RealTimePage.jsx'
import SignupPage from './Pages/SignupPage.jsx';

function AppRoutesWithLayouts() {
    return (
        <Routes>
            {/* When path is '/', render HomePage */}
            <Route path={AppRoutes.HOME} element={<HomePage />} />
            {/* Optional: When path is '/Login', render LoginPage */}
            <Route path={AppRoutes.Training} element={<TrainingPage />} />
            <Route path = {AppRoutes.SignupPage} element = {<SignupPage/>}/>
            <Route path={AppRoutes.TrailPage} element= {<TrailPage />}/>
            <Route path={AppRoutes.RealTimePage} element = {<RealTimePage />}/>
            <Route path={AppRoutes.LoginPage} element={<LoginPage />} />
        </Routes>
    );
}

export default AppRoutesWithLayouts;
