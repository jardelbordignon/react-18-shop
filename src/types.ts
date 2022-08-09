export type ProductType = {
  id: string
  name: string
  price: number
  image: string
}

export type CartItemType = ProductType & {
  qty: number
}

export type DataType = {
  products: ProductType[]
}