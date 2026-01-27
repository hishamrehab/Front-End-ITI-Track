import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = (props) => {
 const params = useParams()
 
 console.log("params" ,params);

  return (
    <div>
        <h1>Product Details {props.match.params.id}</h1>
    </div>
  )
}

export default ProductDetails