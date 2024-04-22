// import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Landingpage from "./pages/Landingpage";

import Loginpage from "./pages/Loginpage";
import Navbar from "./component/Navbar.js";
import Signup from "./pages/Signup.js";
import Login from "./component/Login.js";
import Footer from "./component/Footer.js";
import Leaderboard from "./pages/Leaderboard.js";
import Materi from "./pages/Materi.js";
import UX from "./materi/UX.js";
import UI from "./materi/UI.js";
import Topic from "./pages/Topic.js";
import UIQuiz from "./pages/UIQuiz.js";
import PlayQuizMain from "./pages/PlayQuizMain.js";
import Profile from "./pages/Profile.js";
import Consistency from "./materi/Consistency.js";
import Simplicity from "./materi/Simplicity.js";
import Welcome from "./pages/Welcome.js";
import Clarity from "./materi/Clarity.js";
import ClearFeedback from "./materi/ClearFeedback.js";
import Flexibility from "./materi/Flexibility.js";
import ClearFunctionality from "./materi/ClearFunctionality.js";
import Aesthetic from "./materi/Aesthetic.js";
import { PATH } from "./helpers/path.js";
import LandingLayouts from "./layouts/LandingLayouts.jsx";
import DashboardLayouts from "./layouts/DashboardLayouts.jsx";
import PlayQuiz from "./pages/PlayQuiz.js";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={PATH.BASE}
          element={<Navigate to={PATH.LANDING} replace />}
        />

        <Route path={PATH.BASE} Component={LandingLayouts}>
          <Route path={PATH.LANDING} Component={Landingpage} />
          <Route path={PATH.LOGIN} Component={Login} />
          <Route path={PATH.REGISTER} Component={Signup} />
        </Route>

        <Route path={PATH.BASE} Component={DashboardLayouts}>
          <Route path={PATH.DASHBOARD} Component={Welcome} />
          <Route path={PATH.MATERI} Component={Materi} />
          <Route path={PATH.QUIZ} Component={PlayQuizMain} />
          <Route path={PATH.LEADERBOARD} Component={Leaderboard} />
          <Route path={PATH.PROFILE} Component={Profile} />
          <Route path={PATH.PLAY_QUIZ} Component={PlayQuiz} />
          <Route path="/materi/UI" Component={UI} />
          <Route path="/materi/UX" Component={UX} />
          <Route path="/materi/Consistency" Component={Consistency} />
          <Route path="/materi/Simplicity" Component={Simplicity} />
          <Route path="/materi/Clarity" Component={Clarity} />
          <Route path="/materi/ClearFeedback" Component={ClearFeedback} />
          <Route path="/materi/Flexibility" Component={Flexibility} />
          <Route path="/materi/Aesthetic" Component={Aesthetic} />
          <Route
            path="/materi/ClearFunctionality"
            Component={<ClearFunctionality />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
