import LatestDrop from "./letest-drops/LetestDrops";
import MainCollection from "./main-collection-fram/MainCollection";
import NewsLetterForm from "./newsletter-form/NewsLetterForm";
import SortedItems from "./sorted-items/SortedItems";

export default function Collections(props) {
  console.log(props.products);
  return (
    <div>
      <MainCollection collection={props.collection} />
      <SortedItems
        products={props.products}
        collection={props.collection}
      />
      <LatestDrop products={props.products} />
      <NewsLetterForm />
    </div>
  );
}
