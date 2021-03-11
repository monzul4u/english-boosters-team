import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';
import img1 from './images/bimages.jpg';



function App() {
  return (
    <div>
      <h1 className="bg-success text-center">English Boosters Team</h1>
      <img style={{width: '100%', height:'150px'}} src={img1} alt=""/>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/teams/:id">
            <TeamDetail></TeamDetail>
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



