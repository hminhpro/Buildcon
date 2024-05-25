import logo from "./logo.svg";
import "./App.css";
import Project from "./pages/project/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectInfo from "./pages/project-info/ProjectInfo";
import Result from "./pages/result/Result";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="homepage" element={<Homepage />}></Route>
        <Route path="project" element={<Project />}></Route>
        <Route path="project-info" element={<ProjectInfo />}></Route>
        <Route path="result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
