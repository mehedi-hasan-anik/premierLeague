
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
        <Router>
             <Switch>
                   <Route path="/home">
                       <Home></Home>
                   </Route>
                   <Route path="/team/:teamId">
                       <TeamDetails></TeamDetails>
                   </Route>
                   <Route exact path="/">
                       <Home></Home>
                   </Route>
                   <Route path="*">
                       <NotFound></NotFound>
                   </Route>
             </Switch>
        </Router>
    </div>
  );
}

export default App;
