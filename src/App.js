
import './App.css';
import Intro from './img/Component/Intro/Intro';
import About from './img/Component/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './img/Component/ProductList/ProductList';
import Contact from './img/Component/Contact/Contact';
import Toggle from './img/Component/Toogle/Toggle';
import { ThemeContext } from './img/Component/Context';
import { useContext } from 'react';




function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      backgroundColor: darkMode ? "#000000" : "white",
      color: darkMode && "white",
    }} >
      <Toggle></Toggle>
     <Intro></Intro>
     <About></About>
     <ProductList></ProductList>
     <Contact></Contact>
    </div>
  );
}

export default App;
