import { CartItemType, ProductType } from "../types";

type Props = {
  product: ProductType
  cartItem?: CartItemType
  onAdd: (product: ProductType) => void
  onRemove: (product: ProductType) => void
}

export function Product({ product, cartItem, onAdd, onRemove }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        { cartItem ?
          <div>
            <button className="remove" onClick={() => onRemove(product)}>-</button>
            <span className="p-1">{cartItem.qty}</span>
            <button className="add" onClick={() => onAdd(product)}>+</button>
          </div>
         : 
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        }
      </div>
    </div>
  )
}