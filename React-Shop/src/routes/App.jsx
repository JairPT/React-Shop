import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPAssword from "../containers/RecoveryPAssword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="recovery-pasword" element={<RecoveryPAssword/>} />
          <Route path="*" element={<NotFound/>} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
