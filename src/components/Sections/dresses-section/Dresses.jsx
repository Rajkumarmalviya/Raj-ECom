import ProductSlider from "../product-slider/ProductSlider";
import { Link } from 'react-router-dom';
export default function Dresses(props){
    const products=props.products.filter((p)=>{return p.product_type==="Dress"})
    return(
        <div>

            <div className='new-in-banner'>
            <h2>Dresses</h2> <br />
            <Link style={{
                textDecoration:"none",
                color:"black",
                fontFamily:"var(--main-family)",
                fontSize:"var(--font-size)",
                fontStyle:"normal",
                fontWeight:"400"
            }} to="collections/Dress" >View all</Link>
        </div>
<div style={{
    width:"90%",
    margin:"0 auto"
}}>
            <ProductSlider products={products}/>
            </div>       
        </div>
    )
}