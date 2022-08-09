import { CartItemType, ProductType } from "../types"

type Props = {
  cartItems: CartItemType[]
  onAdd: (product: ProductType) => void
  onRemove: (product: ProductType) => void
}

export function Basket({ cartItems, onAdd, onRemove }: Props) {
	const hasItems = !!cartItems.length
	const itemsPrice = hasItems
		? cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) : 0
	const taxPrice = itemsPrice * 0.14
	const shippingPrice = itemsPrice > 2000 ? 0 : 20
	const totalPrice = itemsPrice + taxPrice + shippingPrice

	return (
		<aside className="block col-1">
			<h2>Cart items</h2>
			<div>
				{ hasItems
					? <> 
						{cartItems.map(item => (
							<div key={item.id} className="row">
								<div className="col-1">{item.name}</div>
								<div className="col-1">
									<button className="remove" onClick={() => onRemove(item)}>-</button>
									<button className="add" onClick={() => onAdd(item)}>+</button>
								</div>
								<div className="col-1 text-right">
									{item.qty} x {item.price.toFixed(2)}
								</div>
							</div>
						))}

						<hr />
						<div className="row">
							<div className="col-2">Items Price</div>
							<div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
						</div>
						<div className="row">
							<div className="col-2">Tax Price</div>
							<div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
						</div>
						<div className="row">
							<div className="col-2">Shipping Price</div>
							<div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
						</div>
						<div className="row">
							<div className="col-2"><strong>Total Price</strong></div>
							<div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
						</div>
						<hr />
						<div className="row">
							<button onClick={() => alert('Implement checkout')}>
								Checkout
							</button>
						</div>
					</>
					: 
					<div>Cart is empty</div>
				}
			</div>
		</aside>
	)
}