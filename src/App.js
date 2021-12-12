
import './App.css';
import Intro from './img/Component/Intro/Intro';
import About from './img/Component/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './img/Component/ProductList/ProductList';
import Contact from './img/Component/Contact/Contact';
import Toggle from './img/Component/Toogle/Toggle';
import { ThemeContext } from './img/Component/Context';
import { useContext } from 'react';
import Navber from './img/Component/Navber/Navber';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      backgroundColor: darkMode ? "#000000" : "white",
      color: darkMode && "white",
    }} >
     <Router>
     <Navber></Navber>
        <Switch>
          <Route exact path="/">
          <Intro></Intro>
          </Route>
          <Route path="/home">
          <Intro></Intro>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/projects">
          <ProductList></ProductList>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>  
        </Switch> 
      </Router>
    <Toggle></Toggle>
    
    
      
       
    </div>
  );
}

export default App;
