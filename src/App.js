import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import News from "./components/News";


function App() {
 const apiKey=process.env.REACT_APP_NEWS_API
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
     <Route exact path="/"> <News key="general" pageSize={5} api={apiKey} country="in" category="general" /></Route>
     <Route exact path="/business"> <News key="business" pageSize={5} api={apiKey} country="in" category="business" /></Route>
     <Route exact path="/entertainment"> <News key="entertainment" pageSize={5} api={apiKey} country="in" category="entertainment" /></Route>
     <Route exact path="/general"> <News key="general" pageSize={5} api={apiKey} country="in" category="general" /></Route>
     <Route exact path="/health"> <News key="health" pageSize={5} api={apiKey} country="in" category="health" /></Route>
     <Route exact path="/sciece"> <News key="sciece" pageSize={5} api={apiKey} country="in" category="sciece" /></Route>
     <Route exact path="/sports"> <News key="sports" pageSize={5} api={apiKey} country="in" category="sports" /></Route>
     <Route exact path="/technology"> <News key="technology" pageSize={5} api={apiKey} country="in" category="technology" /></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
