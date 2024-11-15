import ProductSlider from "../../Sections/product-slider/ProductSlider";

export default function StartShopingSection(props) {
    return (
        <div style={{width:'1400px',margin:'auto'}}>
            <div className="start-shopping-section-main-div">

                <div className='new-in-banner'>
                    <h2>START SHOPPING</h2> <br />
                    <a href="/" >View all</a>
                </div>
                <ProductSlider products={props.products} />
            </div>
        </div>
    )
}