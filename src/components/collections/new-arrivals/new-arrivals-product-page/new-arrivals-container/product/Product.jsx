import { useState } from "react";
import { Link } from "react-router-dom";
export default function Product(props) {
  const [hvr, updateHvr] = useState(false);

  return (
    <div className="main-div-inside-swiper" style={{cursor:"pointer"}}>
      <Link to={"/collections/"+props.product.product_type+"/products/" + props.product.handle}>
        <img
          className="slider-image"
          onMouseOut={() => {
            updateHvr(!hvr);
          }}
          onMouseEnter={() => {
            updateHvr(!hvr);
          }}
          src={
            hvr === true ? props.product.images[1].src : props.product.images[0].src
          }
          alt="product image"
        />
      </Link>
      <div className="product-slider-card-title">{props.product.title}</div>
      <div className="product-slider-card-price">
        <strong style={{
          fontFamily:"var(--main-family)",
          fontStyle:"normal",
          
          fontSize:"15px"
        }}>${props.product.variants[0].price}</strong>
      </div>
      <div className="product-slider-card-variants">
        {props.product.options?.map((option, index) => {
          return (
            <div className="product-slider-variants-values" key={index}>
              <div> {option.values[0]}</div>
              <div>{option.values[1]}</div>
              <div>{option.values[2]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
