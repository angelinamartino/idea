import { Product } from '../product/product'

export const List = (props) => {
    return props.products.map((product) => (
    <Product
        titulo={product.titulo}
        precio={product.precio}
        descripcion={product.descripcion}
    />
   ))
}