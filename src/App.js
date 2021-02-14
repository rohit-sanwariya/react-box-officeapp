import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
function App() {
  return (
    <div>
      <Nav/>
    <Switch>
      <Route exact={true} path="/">
        <Home/>
      </Route>

      <Route  exact={true} path="/starred">
        <Starred/>
      </Route>
      <Route   >
        <h1 style={{color:'#e32755'}}>404! Page Not found</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
