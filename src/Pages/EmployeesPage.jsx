import { useHistory } from "react-router-dom";
import React, { Suspense, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Container, H1, Button } from "../Styles/employees";
import { getTTFB } from "web-vitals";
const Table = React.lazy(() => import("../Components/Table"));

// Measure and log TTFB as soon as it's available.
getTTFB(console.log);

function Employees(props) {
  const history = useHistory(); // Allows user to navigate to /employee-list page
  const state = useContext(AppContext)[0]; // Gets state from AppContext

  useEffect(() => {
    document.title = "HRnet - Current Employees"; // Updates document.title to "HRnet - Current Employees"
  });

  const viewHomepage = () => {
    // Redirect user to page /home when button is clicked on Current Employees page (Employees.jsx)
    history.push("/");
  };
  const renderLoader = () => <p>Loading</p>;
  return (
    <>
      <Container>
        <H1>Current Employees</H1>
        {/* // Suspense fallback component for Table component to prevent error when
        loading data from API */}
        <Suspense fallback={renderLoader()}>
          {/* Suspense fallback is used to show a loading screen while the table
          is loading */}
          <Table employeeList={state.employeeList} />{" "}
          {/* Renders Table component */}
        </Suspense>
        <Button onClick={viewHomepage}>Home</Button>{" "}
        {/* Redirect user to page /home when button is clicked on Current Employees page (Employees.jsx) */}
      </Container>
    </>
  );
}

export default Employees;
