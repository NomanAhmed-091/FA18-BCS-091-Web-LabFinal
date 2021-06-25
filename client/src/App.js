import LoginScreen from './screens/loginscreen'
import AppScreen from './screens/AppScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AppScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
