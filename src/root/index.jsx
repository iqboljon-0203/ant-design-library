import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Components from "../components/Components";
import { navbar } from "../utils/navbar";
import { sidebar } from "../utils/sidebar";
import { NotFound } from "../components/Not_Found_Page";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/components"} />} />
        {/* Components */}
        <Route element={<Components />}>
          <Route path="/components" element={<Sidebar />} />
        </Route>

        {/* Sidebar */}
        <Route element={<Sidebar />}>
          {sidebar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>

        {/* navbar */}
        {navbar.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;
