import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductItem = () => {
  const [product, setProduct] = useState ({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  
  return (
    <div>
        <h3>{product.title}</h3>
        <img src={product.images} alt="" width={150} height={150}/>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
    </div>
  )
}

export default ProductItem;