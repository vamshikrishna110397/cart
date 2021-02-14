
import './App.css';
import React , {useState} from 'react'
import Basket from './components/basket'
import Header from './components/header'
import Main from './components/main'
import data from './components/data'
import Product from './components/product'

function App() {
  const {products} =data
  const [cartItems , setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      )
      );
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
  }
  const onRemove = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if (exist.qty === 1) {
         setCartItems(cartItems.filter(x => x.id !== product.id))
     } else {
       setCartItems(
         cartItems.map((x) => 
         x.id === product.id ? {...exist , qty: exist.qty - 1} : x
       )
       )
    }
  }
  return (
    <div className="App">
      
      <Header countCartItems = {cartItems.length}/>
      <Main onAdd ={onAdd} products ={products} />
<Basket onAdd={onAdd} onRemove={onRemove} cartItems ={cartItems}/>
    </div>
  );
}


export default App;
