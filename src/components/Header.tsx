type Props = {
	countCartItems: number
}

export function Header({ countCartItems }: Props) {
	return (
		<header className="row center block">
			<div>
				<a href="#/">
					<h2>Simple Shopping Cart</h2>
				</a>
			</div>
			<div>
				{ !!countCartItems && (
					<a href="#/">
						Cart <button className="badge">{countCartItems}</button>{' '}
					</a>
				) }
				<a href="#/">Sign In</a>
			</div>
		</header>			
	)
}