import { Link } from "react-router-dom";
import ProductSlider from "../product-slider/ProductSlider";

export default function NewIn(props) {
  const products = props.products.filter((p) => {
    return p.product_type === "Romper";
  });
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <div className="new-in-banner">
        <h2>NEW IN</h2> <br />
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontFamily:"var(--main-family)",
            fontSize:"var(--font-size)"
          }}
          to="collections"
        >
          View all
        </Link>
      </div>

      <ProductSlider products={products} />
    </div>
  );
}
