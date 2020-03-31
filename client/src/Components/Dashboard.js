import React, { useState } from "react";

import "react-tabs/style/react-tabs.css";
import { Tabs, Tab, Paper } from "@material-ui/core";

import Applications from "./Applications";

function Dashboard(props) {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("Front-End Developer");
  const categories = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "FULL Stack Developer"
  ];

  return (
    <div style={{ marginLeft: "100px" }}>
      <br />
      <br />
      <h1>Admin Dashboard</h1>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={(e, newValue) => setValue(newValue)}
        >
          {categories.map((category, i) => {
            return (
              <Tab
                key={i}
                label={category}
                onClick={() => setCategory(category)}
              />
            );
          })}
        </Tabs>
      </Paper>
      <Applications category={category} />
    </div>
  );
}

export default Dashboard;
