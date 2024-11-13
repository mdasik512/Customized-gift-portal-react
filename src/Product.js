import { useState,useEffect } from 'react';
import './Product.css'
import axios from 'axios';

function Product()
{
  const [Product,setProduct]=useState([]);
  useEffect(() => {
  axios.get("http://localhost:3000/Product")
  .then((res)=>{
    const data=res.data;
    setProduct(data)
    console.log(data);
  })
  .catch(err=>console.error(err));
},[]);
    return(
      <div className='cart-body'>
        <div className='cart-product'>
        {
          Product.map((product)=>{
            return(
              <div key={product.id} className='product-card'>
                <img src={product.url}/>
                <p>{product.content}</p>
                <h2>₹ {product.rs}</h2>
                <button onClick={()=>{window.location.href="/PlaceOrder"}}>BUY</button>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
export default Product;