import { CartItemType, ProductType } from "../types"
import { Product } from "./Product"

type Props = {
  products: ProductType[]
  cartItems: CartItemType[]
  onAdd: (product: ProductType) => void
  onRemove: (product: ProductType) => void
}

export function Main({ products, cartItems, onAdd, onRemove }: Props) {

  if (!products) {
    return <div>Carregando...</div>
  }

	return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        { products.map(product => (
          <Product 
            key={product.id} 
            product={product}
            cartItem={cartItems.find(item => item.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ) )}
      </div>
    </main>
	)
}