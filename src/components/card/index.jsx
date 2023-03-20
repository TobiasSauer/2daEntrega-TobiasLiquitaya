import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`${product.id}`} >
        <h3>{product.title}</h3>
        <img src={product.images} alt="" width={150} height={150}/>
        <h4>{product.category.name}</h4>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
    </Link>
  )
}

export default Card;