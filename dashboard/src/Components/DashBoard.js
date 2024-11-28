
import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Fund from "./Fund";
import Holding from "./Holding";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Fund/>} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
