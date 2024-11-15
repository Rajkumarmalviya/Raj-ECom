
import NewsLetterForm from "../collections/newsletter-form/NewsLetterForm";
import GallerySection from "./gallery-section/GallerySection";
import NewsSection from "./news-section/NewsSection";
import RecentBlog from "./recent-blog-section/RecentBlog";
import StartShopingSection from "./start-shoping-section/StartShopingSection";

export default function Blogs(props){
    
    return(
        <div>
            <NewsSection pages={props.pages}/>
            <GallerySection/>
            <RecentBlog/>
            <StartShopingSection products={props.products}/>
            <NewsLetterForm/>
            </div>
    )
}