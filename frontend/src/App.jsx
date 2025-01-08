import React from "react";
import Home from "./Home/Home";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const[authUser, setAuthUser] = useAuth();
  console.log("authUser", authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
};

export default App;
