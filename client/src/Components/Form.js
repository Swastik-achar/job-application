import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { startAddApplication } from "../Actions/applicationsAction";
import { connect } from "react-redux";

function Form(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    jobs: [
      "--Select--",
      "FULL Stack Developer",
      "MEAN Stack Developer",
      "Node.js Developer",
      "Front-End Developer"
    ],
    jobTitle: "",
    experience: "",
    skills: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      skills: values.skills,
      jobTitle: values.jobTitle,
      experience: values.experience
    };
    console.log("form", formData);
    props.dispatch(startAddApplication(formData));
  };
  return (
    <div align="center">
      <h2>Application Form</h2>
      <Box border="2px solid black" style={{ width: "80%", height: "auto" }}>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ marginRight: "160px" }}>
            Full Name
          </label>
          <input
            placeholder="Enter Full Name"
            required
            type="text"
            value={values.name}
            onChange={handleChange}
            name="name"
            style={{
              width: "55%",
              height: "25px"
            }}
          />
          <br />
          <br />
          <hr />
          <br />
          <label style={{ marginRight: "140px" }}>Email Address</label>
          <input
            placeholder="example@gmail.com"
            required
            name="email"
            value={values.email}
            type="email"
            onChange={handleChange}
            style={{ width: "55%", height: "25px" }}
          />
          <br />
          <br />
          <hr />
          <br />
          <label htmlFor="number" style={{ marginRight: "120px" }}>
            Contact Number
          </label>
          <input
            placeholder="+91 9009874529"
            required
            name="phone"
            value={values.phone}
            type="text"
            onChange={handleChange}
            style={{ width: "55%", height: "25px" }}
          />
          <br />
          <br />
          <hr />
          <br />
          <label htmlFor="job" style={{ marginRight: "150px" }}>
            Job Category
          </label>
          <select
            name="jobTitle"
            defaultValue="--Select--"
            value={values.jobTitle}
            style={{ width: "55%", height: "35px" }}
            onChange={handleChange}
          >
            {values.jobs.map((jobs, i) => {
              return (
                <option key={i} value={jobs}>
                  {jobs}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <hr />
          <br />
          <label style={{ marginRight: "160px" }}>Experience</label>
          <input
            placeholder="Experience(2 years,3months)"
            type="text"
            value={values.experience}
            name="experience"
            onChange={handleChange}
            style={{ width: "55%", height: "25px" }}
          />
          <br />
          <br />
          <hr />
          <br />
          <label style={{ marginRight: "140px" }}>Technical Skills</label>
          <input
            placeholder="Technical Skills"
            type="text"
            value={values.skills}
            name="skills"
            onChange={handleChange}
            style={{ width: "55%", height: "100px" }}
          />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <input
            type="submit"
            value="Send Application"
            style={{
              width: "30%",
              height: "40px",
              backgroundColor: "#2a3439",
              border: "none",
              fontSize: "18px",
              color: "white",
              cursor: "pointer",
              borderRadius: "4px",
              marginRight: "550px",
              boxShadow:
                "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"
            }}
          />
        </form>
        <br />
        <br />
      </Box>
      <br />
      <br />
    </div>
  );
}

export default connect()(Form);
