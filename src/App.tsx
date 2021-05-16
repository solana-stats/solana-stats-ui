import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/home/home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#aa51ea',
    },
    secondary: {
      main: '#aa51ea',
    },
    background: {
      default: '#f5f5f5',
    }
  },
});

function App() {
  const [theme, setTheme] = useState(true)
  const appliedTheme = createMuiTheme(theme ? darkTheme : lightTheme)
  return (
    <Router>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline/>
          <div>
            <Nav themeToggle={setTheme} theme={theme}/>
            <div className={'content'}>
              <Switch>
                <Route path={'/'} exact={true} component={Home}/>
              </Switch>
            </div>
          </div>
      </ThemeProvider>
    </Router>

);
}

export default App;
