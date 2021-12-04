import logo from './logo.svg';
import './App.css';
import Intro from './img/Component/Intro/Intro';
import About from './img/Component/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './img/Component/ProductList/ProductList';
import Contact from './img/Component/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Intro></Intro>
     <About></About>
     <ProductList></ProductList>
     <Contact></Contact>
    </div>
  );
}

export default App;
