import "./App.css";
import { Switch, Route } from "react-router-dom";
 
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import ShowPage from "./Pages/ShowPage";
function App() {
  return (
    
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
    
  );
}

export default App;
