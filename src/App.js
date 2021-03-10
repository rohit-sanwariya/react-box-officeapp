import "./App.css";
import { Switch, Route } from "react-router-dom";
 
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import ShowPage from "./Pages/ShowPage";
import { ThemeProvider } from "styled-components";
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};




function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
      <Route exact={true} path="/">
        <Home/>
      </Route>

      <Route  exact={true} path="/starred">
        <Starred/>
      </Route>
      <Route exact path="/show/:id">
        <ShowPage/>
      </Route>
      <Route   >
        <h1 style={{color:'#e32755'}}>404! Page Not found</h1>
      </Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
