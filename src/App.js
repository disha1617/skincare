
import './App.css';
import MenuAppBar from './Components/Menubar';
import Card from './Components/Card';
import Circle from './Components/Circle';
import Boxes from './Components/Boxes';
import PriceBoxes from './Components/Priceboxes';
// import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <MenuAppBar/>
   
    <Card/>
    <br/>
    <Circle/>
    <br/>
    <Boxes/>
    <br/>
    <PriceBoxes/>
    <br/>
    <hr/>
    
    </div>
  
  );
}

export default App;
