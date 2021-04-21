export const Product = (props) => {
    const handleClick = () =>
        alert(`Compra ${props.titulo}`) 

    return (
        <div onClick={handleClick}>
          <h2>{props.titulo}</h2>
         <p>{props.precio}</p>
         <p>{props.descripcion}</p>
        </div>
    )
}