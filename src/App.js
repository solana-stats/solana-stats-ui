import React from 'react';
import './App.css';
import Nav from './components/nav';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Stats from "./pages/stats";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4cb1c2',
    },
    secondary: {
      main: '#4cb1c2',
    },
    background: {
      default: '#232323',
    }
  },
});

function App() {
  const appliedTheme = createMuiTheme(darkTheme)
  return (
      <Router>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline/>
          <div>
            <Nav/>
            <div className={'content'}>
              <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/stats'} exact={true} component={Stats}/>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
  );
}

export default App;
