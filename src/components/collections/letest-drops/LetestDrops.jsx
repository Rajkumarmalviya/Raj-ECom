import ProductSlider from "../../Sections/product-slider/ProductSlider";

export default function LatestDrop(props) {
  return (
    <div style={{
      width:"90%",
      margin:"0% auto"
    }} className="latestdrop-main-div">
      <div className="new-in-banner">
        <h2>OUR LATEST PRODUCT DROPS</h2>
      </div>
      <ProductSlider products={props.products} navigation={false} />
    </div>
  );
}
