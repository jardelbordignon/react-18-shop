import { useState } from "react"

import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Basket } from "./components/Basket"
import data from './data'
import { CartItemType, ProductType } from "./types"

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  
  const onAdd = (product: ProductType) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists) {
      setCartItems(cartItems.map(item => (
        item.id === product.id ? {...item, qty: ++item.qty} : item
      )))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const onRemove = (product: ProductType) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists) {
      if (exists.qty > 1) {
        setCartItems(cartItems.map(item => (
          item.id === product.id ? {...item, qty: --item.qty} : item
        )))
      } else {
        setCartItems(cartItems.filter(item => item.id !== product.id))
      }
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main 
          products={data.products} 
          cartItems={cartItems} 
          onAdd={onAdd} 
          onRemove={onRemove} 
        />
        <Basket />
      </div>
    </div>
  );
}

export default App
