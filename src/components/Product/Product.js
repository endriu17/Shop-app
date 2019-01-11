import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem/ProductItem";
import "./Product.css";

const Product = (props) => {

return (
  <Link
    // id={props.id}
    to={`/product/${props.id}`}
    // component={ProductItem}
    className="Product"
  >
    <img src={props.photo} alt={props.name} />
    <div className="product-wrapper">
      <span className="product-name">{props.name}</span>
      <span className="product-price product-price_promo">
        $ {props.price}
        {console.log(props.id)}
      </span>
    </div>
  </Link>     
)};

// export const ProductItem = (props) => {
//   console.log(props.name);
//   return (
//     <div  className="product-item">
//       <img src={props.photo} alt={props.name} />
//       <div className="product-wrapper">
//         <span className="product-name">{props.name}</span>
//         <span className="product-price product-price_promo">
//           {props.price}
//         </span>
//         <p>{props.description}</p>
//       </div>
//       <button>Add to bag</button>
//     </div>
// )
// }

export default Product;
