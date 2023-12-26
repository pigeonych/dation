import React, { useState } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hoc/AuthProvider";

import { Sidebar } from "./components/Sidebar";
import Company from "./components/Company";
import Branches from "./components/Branches";
import { Edit as BranchesEdit } from "./components/Branches/Edit";
import { Edit as RecordsEdit } from "./components/Edit";
import Calendar from "./components/Calendar";
import Stock from "./components/Stock";
import Services from "./components/Services";
import CategoryView from "./components/Services/Individual/CategoryView";
import Staff from "./components/Staff";
import Details from "./components/Staff/Details";
import Page404 from "./components/404";
import Login from "./components/Login";
import { PhoneNumber as LoginPhoneNumber } from "./components/Login/PhoneNumber";
import { ChooseCompany as LoginChooseCompany } from "./components/Login/ChooseCompany";

import { startOfToday } from "date-fns";
import { RequireAuth } from "./hoc/RequireAuth";
import SignUp from "./components/SignUp";
import PersonalInfo from "./components/SignUp/PersonalInfo";
import TechInfo from "./components/SignUp/TechInfo";

function App() {
  const today = startOfToday();
  const [day, setDay] = useState(today);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3B65F3",
        },
      }}
    >
      <AuthProvider>
        <Routes>
          <Route
            path={"/"}
            element={
              <RequireAuth>
                <Sidebar setDay={setDay} />
              </RequireAuth>
            }
          >
            <Route index element={<Company />} />
            // Company
            <Route path={"/company/about"} element={<Company />} />
            <Route path={"/company/branches"} element={<Branches />} />
            <Route
              path={"/company/branches/:id/edit"}
              element={<BranchesEdit />}
            />
            // Records
            <Route path={"/records/general"} element={<Calendar day={day} />} />
            <Route path={"/records/create"} element={<RecordsEdit create />} />
            <Route
              path={"/records/:id/personal"}
              element={<div>Personal</div>}
            />
            <Route path={"/records/:id/edit"} element={<RecordsEdit edit />} />
            // Stock
            <Route path={"/stock"} element={<Stock />} />
            // Services
            <Route path={"/services"} element={<Services />} />
            <Route path={"/services/:id"} element={<CategoryView />} />
            // Staff
            <Route path={"/staff"} element={<Staff />} />
            <Route path={"/staff/:id/view"} element={<Details />} />
            // Other routes...
            <Route path={"*"} element={<Page404 />} />
          </Route>
          <Route path={"/login"} element={<Login />}>
            <Route path={"phone-number"} element={<LoginPhoneNumber />} />
            <Route path={"choose-company"} element={<LoginChooseCompany />} />
          </Route>
          <Route path={"/sign-up"} element={<SignUp />}>
            <Route path={"tech-info"} element={<TechInfo />} />
            <Route path={"personal-info"} element={<PersonalInfo />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
