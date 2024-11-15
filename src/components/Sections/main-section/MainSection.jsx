import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// this is the row data provided for hompage
const Pictures = [
  {
    heading: "NEW RESORT COLLECTION",
    subheading: "",
    btnText: "START SHOPING",
    src: "https://mr-parker.myshopify.com/cdn/shop/files/Mr_Parker____hero_1.jpg",
  },
  {
    heading: "AUTUMN DAZE",
    subheading: "dreamy autumnal hues",
    btnText: "SHOP NOW",
    src: "https://mr-parker.myshopify.com/cdn/shop/files/mr_parker_fall_hero-1.jpg",
  },
  {
    heading: "MID SEASON SALE",
    subheading: "Limited stocks, end soon!",
    btnText: "SHOP NOW",
    src: "https://mr-parker.myshopify.com/cdn/shop/files/mr_parker_fall_hero-2.jpg",
  },
];

export default function MainSection() {
  // initializing state for sliden number
  const [slide, updateSlide] = useState(0);

  // function to run slide show at every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === Pictures.length - 1) {
        updateSlide(0);
      } else {
        updateSlide(slide + 1);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="slide-show-img" >
      <div className="box-ratio" >
        <img className="main-image fadeOut" src={Pictures[slide].src} style={{height:'80vh'}}/>

        <div className="caption-container" style={{cursor:"pointer"}}>
          <h2 className="heading-text-main-slider">
            {Pictures[slide].heading}
          </h2>

          <p className="sub-heading-text-main-slider">
            {Pictures[slide].subheading}
          </p>

          <Link
            to={"collections/Romper"}
            style={{ color: "white", textDecoration: "none" }}
            className="div-btn-main-slider"
          >
            {Pictures[slide].btnText}
          </Link>
        </div>
      </div>
    </div>
  );
}
