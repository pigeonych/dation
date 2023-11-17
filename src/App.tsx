import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3B65F3",
        },
      }}
    >
      <Sidebar />
    </ConfigProvider>
  );
}

export default App;
