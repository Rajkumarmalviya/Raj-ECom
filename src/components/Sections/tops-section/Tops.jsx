import ProductSlider from "../product-slider/ProductSlider";
import { Link } from 'react-router-dom';
export default function Tops(props) {
  const products=props.products.filter((p)=>{return p.product_type==="Top"})
  return (
    <div className="tops-main-div">
      <div className="new-in-banner">
        <h2>TOPS</h2> <br />
        <Link style={{
                textDecoration:"none",
                color:"black",
                fontFamily:"var(--main-family)",
                fontSize:"var(--font-size)",
                fontStyle:"normal",
                fontWeight:"400"
            }} to="collections/Top" >View all</Link>
      </div>
      <div style={{
        width:"90%",
        margin:"0% auto"
      }}>
      <ProductSlider products={products} />
      </div>
    </div>
  );
}
