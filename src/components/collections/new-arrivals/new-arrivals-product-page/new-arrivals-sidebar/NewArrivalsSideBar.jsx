import { RiArrowDropDownLine } from "react-icons/ri";
import NewArrivalsPrice from "./new-arrivals-price/NewArrivalsPrice";
import NewArrivalsAvailability from "./new-arrivals-availability/NewArrivalsAvailability";
import NewArrivalsSize from "./new-arrivals-size/NewArrivalsSize";
import NewArrivalsProductType from "./new-arrivals-product-type/NewArrivalsProductType";
import NewArrivalsExplore from "./new-arrivals-explore/NewArrivalsExplore";
import { useState } from "react";
export default function NewArrivalsSideBar(props){
  const [showPrice,updateShowPrice]=useState(true);
  const [showAvailability,updateShowAvailability]=useState(true);
  const [showSize,updateShowSize]=useState(true);
  const [showType,updateShowType]=useState(true);
  const [showExplore,updateShowExplore]=useState(true);


    return(
         <div className="product-page-sidebar-div">
        <div className="sidebar-price-div ">
          <button className="sidebar-btn" onClick={()=>{updateShowPrice(!showPrice)}} >
            {" "}
            Price <RiArrowDropDownLine />
          </button>
          {showPrice===true&&<NewArrivalsPrice />}
        </div>
        <div className="sidebar-availability-div ">
          <button className="sidebar-btn" onClick={()=>{updateShowAvailability(!showAvailability)}}>
            {" "}
            Availability <RiArrowDropDownLine />
          </button>
          {showAvailability===true && <NewArrivalsAvailability  />}
        </div>
        <div className="sidebar-size-div">
          <button className="sidebar-btn" onClick={()=>{updateShowSize(!showSize)}}>
            {" "}
            Size <RiArrowDropDownLine />
          </button>
          {showSize===true &&<NewArrivalsSize />}
        </div>
        <div className="sidebar-type-div">
          <button className="sidebar-btn" onClick={()=>{updateShowType(!showType)}}>
            {" "}
            Product Type <RiArrowDropDownLine />
          </button>
          {showType===true&&<NewArrivalsProductType />}
        </div>
        <div className="sidebar-explore-div ">
          <button className="sidebar-btn" onClick={()=>{updateShowExplore(!showExplore)}}>
            {" "}
            Exlpore <RiArrowDropDownLine />
          </button>
          {showExplore===true&&<NewArrivalsExplore />}
        </div>
      </div>
    )
}