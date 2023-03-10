// Interface to defining our object of response functions
type Product = {
    _id: String,
    name: String,
    description: String,
    category: String,
    price: String,
    picture: String,
}

type response = {
    product: Array<Product>
}

type Props = {
    promise: response
}