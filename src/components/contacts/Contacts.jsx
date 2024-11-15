import { useEffect,useState } from "react";
import NewsLetterForm from "../collections/newsletter-form/NewsLetterForm";
import ContactForm from "./contact-form/ContactForm";
import MainContactFram from "./main-contact-fram/MainContactFram";

export default function Contacts(props){

    return(
        <div>
            <MainContactFram />
            <ContactForm pages={props.pages}/>
            <NewsLetterForm/>
        </div>
    )
}