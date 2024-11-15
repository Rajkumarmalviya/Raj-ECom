import ProductSlider from "../Sections/product-slider/ProductSlider";
import NewsLetterForm from "../collections/newsletter-form/NewsLetterForm";
import FeaturesFram from "./features-fram/FeaturesFram";
import FeaturesNotice from "./features-notice/FeaturesNotice";

export default function Features(props){
    return(
        <div>
            <FeaturesFram/>
            <FeaturesNotice pages={props.pages}/>
            <ProductSlider products={props.products}/>
            <NewsLetterForm/>
        </div>
    )
}