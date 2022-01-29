import "./App.css";
import Home from "./Pages/Home";
import Employees from "./Pages/EmployeesPage";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { reducer, initialState } from "./states/reducers";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  th { 
    font-size: 14px;
  }
  td {
    font-size: 15px;
  }

`;

export const AppContext = React.createContext(); // create a context for the app  to use
function App() {
  const contextValue = useReducer(reducer, initialState); // use the reducer to create the context value  and pass the initial state  to it  and return the context value  and the dispatch function

  return (
    <>
      <AppContext.Provider value={contextValue}>
        {" "}
        {/* pass the context value to the provider  */}
        <GlobalStyle />{" "}
        {/* pass the global style to the global style component  */}
        <Router basename={process.env.PUBLIC_URL}>
          {" "}
          {/* pass the basename to the router  */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/employee-list'>
              {" "}
              {/* pass the path to the route  */}
              <Employees />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
