import { useDeferredValue, useEffect, useState, useTransition } from "react"

import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Basket } from "./components/Basket"
import data from './data'
import { CartItemType, ProductType } from "./types"

function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const countCartItems = useDeferredValue(cartItems.length)
  const [isPending, startTransition] = useTransition()
  
  const onAdd = (product: ProductType) => {
    const exists = cartItems.find(item => item.id === product.id)

    const items = exists 
      ? cartItems.map(item => (
        item.id === product.id ? {...item, qty: ++item.qty} : item
      ))
      : [...cartItems, {...product, qty: 1}]

    setCartItems(items)
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  const onRemove = (product: ProductType) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists) {
      const items = exists.qty > 1 
        ? cartItems.map(item => (
          item.id === product.id ? {...item, qty: --item.qty} : item
        ))
        : cartItems.filter(item => item.id !== product.id)

      setCartItems(items)
      localStorage.setItem('cartItems', JSON.stringify(items))
    }
  }

  useEffect(() => {
    startTransition(() => {
      const items = localStorage.getItem('cartItems')
      if (items) setCartItems(JSON.parse(items))
    })
  }, [])

  return isPending
    ? <div>Loading...</div>
    : (
    <div className="App">
      <Header countCartItems={countCartItems} />
      <div className="row">
        <Main 
          products={data.products} 
          cartItems={cartItems} 
          onAdd={onAdd} 
          onRemove={onRemove} 
        />
        <Basket
          cartItems={cartItems} 
          onAdd={onAdd} 
          onRemove={onRemove} 
        />
      </div>
    </div>
  );
}

export default App
