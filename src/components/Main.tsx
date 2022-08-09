import { ProductType } from "../types"
import { Product } from "./Product"

type Props = {
  products: ProductType[]
}

export function Main({ products }: Props) {

  if (!products) {
    return <div>Carregando...</div>
  }

	return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        { products.map(product => <Product key={product.id} product={product} /> )}
      </div>
    </main>
	)
}