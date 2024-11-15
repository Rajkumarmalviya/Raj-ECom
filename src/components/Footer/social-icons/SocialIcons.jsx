import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function SocialIcons(){
    return(
        <div className="social-icons-main-div">
            <ul>
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
            </ul>
        </div>
    )
}