import { ProductType } from "../types";

type Props = {
  product: ProductType
}

export function Product({ product }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}