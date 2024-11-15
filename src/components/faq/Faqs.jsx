import FaqFram from "./faq-fram/FaqFram";
import FaqSection from "./faq-section/FaqSection";

export default function Faqs(props){
    return(
        <div>
        <FaqFram/>
<FaqSection pages={props.pages}/>
        </div>
    )
}