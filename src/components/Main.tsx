import { Product } from "../types"

type Props = {
  products: Product[]
}

export function Main({ products }: Props) {

  if (!products) {
    return <div>Carregando...</div>
  }

	return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        { products.map(product => (
          <div key={product.id}>
            <div>{product.name}</div>
          </div>
        )) }
      </div>
    </main>
	)
}