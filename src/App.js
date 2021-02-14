import "./App.css";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <h1>Home</h1>
      </Route>

      <Route  exact={true} path="/starred">
        <h1>Starred</h1>
      </Route>
      <Route   >
        <h1 style={{color:'#e32755'}}>404! Page Not found</h1>
      </Route>
    </Switch>
  );
}

export default App;
