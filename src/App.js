import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

function App() {
  useEffect(() => {
    document.title = "HRnet";
  });
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='employee-list'>
            <div>Employees</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
