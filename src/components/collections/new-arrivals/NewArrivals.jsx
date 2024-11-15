import { useParams } from "react-router-dom";
import AnnouncementBottom from "../../Sections/announcement-section/AnnouncementBottom";
import NewArrivalsMainFram from "./new-arrivals-main-fram/NewArrivalsMainFram";
import NewArrivalsProductPage from "./new-arrivals-product-page/NewArrivalsProductPage";

export default function NewArrivals(props) {
  const { name } = useParams();

  const prod = props.products.filter((p) => {
    return p.product_type === name;
  });
  if (!prod) {
    prod = props.products;
  }
  return (
    <div className="newarrivals-main-div">
      <NewArrivalsMainFram collections={props.collection} />
      <NewArrivalsProductPage products={prod} collections={props.collection} name={name} />
      <AnnouncementBottom />
    </div>
  );
}
