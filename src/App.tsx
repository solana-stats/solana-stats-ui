import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/home/home";
import Account from './pages/account/account';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#03E1FF',
    },
    secondary: {
      main: '#03E1FF',
    },
    background: {
      default: '#161b19',
    }
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00FFA3',
    },
    secondary: {
      main: '#DC1FFF',
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
                <Route path={'/address/:address'} component={Account}/>
              </Switch>
            </div>
          </div>
      </ThemeProvider>
    </Router>

);
}

export default App;
