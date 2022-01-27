import { useHistory } from "react-router-dom";
import React, { Suspense, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { Container, H1, Button } from "../Styles/employees";
import { getTTFB } from "web-vitals";
const Table = React.lazy(() => import("../Components/Table"));

// Measure and log TTFB as soon as it's available.
getTTFB(console.log);
function Employees(props) {
  const history = useHistory();
  const state = useContext(AppContext)[0];

  useEffect(() => {
    document.title = "HRnet - Current Employees";
  });

  const viewHomepage = () => {
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
          <Table employeeList={state.employeeList} />
        </Suspense>
        <Button onClick={viewHomepage}>Home</Button>
      </Container>
    </>
  );
}
// To better demonstrate how this works:

// To preview the site, press View App. Then press Fullscreen fullscreen.
// Press `Control+Shift+J` (or `Command+Option+J` on Mac) to open DevTools.
// Click the Network tab.
// Click the Throttling dropdown, which is set to No throttling by default. Select Slow 3G.
// Click the Click Me button in the app.
// The loading indicator will show for longer now. Notice how all the code that makes up the Table is fetched as a separate chunk.

export default Employees;
