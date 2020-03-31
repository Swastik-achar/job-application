import React, { useState } from "react";

import "react-tabs/style/react-tabs.css";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { connect } from "react-redux";

import Applications from "./Applications";

function Dashboard(props) {
  const [value, setValue] = useState(0);
  const categories = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "Full Stack Developer"
  ];
  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

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
          onChange={handleChange}
          centered
        >
          {categories.map(category => {
            return <Tab label={category} />;
          })}
        </Tabs>
      </Paper>
      {value === 0 && (
        <Applications applications={props.frontEndApplications} store={props} />
      )}
      {value === 1 && (
        <Applications applications={props.nodeJsApplications} store={props} />
      )}
      {value === 2 && (
        <Applications applications={props.MeanStackDeveloper} store={props} />
      )}
      {value === 3 && (
        <Applications applications={props.FullStackDeveloper} store={props} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    frontEndApplications: state.applications.filter(
      ele => ele.jobTitle === "Front-End Developer"
    ),
    nodeJsApplications: state.applications.filter(
      ele => ele.jobTitle === "Node.js Developer"
    ),
    MeanStackDeveloper: state.applications.filter(
      ele => ele.jobTitle === "MEAN Stack Developer"
    ),
    FullStackDeveloper: state.applications.filter(
      ele => ele.jobTitle === "FULL Stack Developer"
    )
  };
};

export default connect(mapStateToProps)(Dashboard);
