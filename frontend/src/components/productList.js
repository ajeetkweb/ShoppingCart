import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Redux/slices/productSlice"
import { addToCart } from "../Redux/slices/cartSlice"

const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const status = useSelector((state) => state.products.status);
    console.log('products:', products)

    useEffect(() => {
        console.log('Calling fetchProducts...'); // Debugging
        if(status =='idle'){
            dispatch(getProducts());
        }
          
      }, [status]);

  
    return (
        <div className="productdv">
          <h2>Products</h2>
          {status === 'loading' && <p>Loading...</p>}
         
           { products.map((product) => (
              <div key={product.id} className="item">
                <img src={product.image} alt={product.name} width="200" height="200" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button className="primary-btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>

          ))}
         
        </div>
      );

}

export default ProductList