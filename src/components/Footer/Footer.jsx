// import BottomFooter from "./bottom-footer/BottomFooter";
import MainFooter from "./main-footer/MainFooter";
import SocialIcons from "./social-icons/SocialIcons";

export default function Footer(){
    return(
        <div className="footer-main-div">
            <SocialIcons/>
            <MainFooter/>
            {/* <BottomFooter/> */}
        </div>
    )
}