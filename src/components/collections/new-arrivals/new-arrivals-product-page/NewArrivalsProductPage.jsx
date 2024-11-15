import { FaGreaterThan } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useState } from "react";
import NewArrivalsSideBar from "./new-arrivals-sidebar/NewArrivalsSideBar";
import NewArrivalsContainer from "./new-arrivals-container/NewArrivalsContainer";
import SortedItems from "../../sorted-items/SortedItems";
// import { Link,useParams } from "react-router-dom";

export default function NewArrivalsProductPage(props) {
  // const { name } = useParams();
  // const products=[];
  // console.log(name);
  // if(name==="new-arrivals"){
  // products=props.products.filter((p)=>{return p.product_type==="Romper"})
  // }else if(name==="dresses"){
  //   products=props.products.filter((p)=>{return p.product_type==="Dress"})
  // }else if(name==="tops"){
  //   products=props.producs.filter((p)=>{return p.product_type==="Top"})
  // }
  let productsArray = [];
  productsArray = props.products;
  const [selectedMethod, setSelectedMethod] = useState("sort");
  const [showSide, updateShowSide] = useState(false);



  // this code is for our sort by buttons
  if (selectedMethod === "title-ascending") {
    productsArray = productsArray.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (selectedMethod === "title-descending") {
    productsArray = productsArray.sort(function (a, b) {
      if (b.title < a.title) {
        return -1;
      }
      if (b.title > a.title) {
        return 1;
      }
      return 0;
    });
  } else if (selectedMethod === "price-ascending") {
    productsArray = productsArray.sort(function (a, b) {
      if (a.variants[0].price < b.variants[0].price) return -1;
      if (a.variants[0].price > b.variants[0].price) return 1;
      return 0;
    });
  } else if (selectedMethod === "price-descending") {
    productsArray = productsArray.sort(
      (a, b) => b.variants[0].price - a.variants[0].price
    );
  } else if (selectedMethod === "created-ascending") {
    productsArray = productsArray.sort(function (a, b) {
      // Compare the 2 dates
      if (a.published_at < b.published_at) return -1;
      if (a.published_at > b.published_at) return 1;
      return 0;
    });
  } else if (selectedMethod === "created-descending") {
    productsArray = productsArray.sort(function (a, b) {
      // Compare the 2 dates
      if (a.published_at > b.published_at) return -1;
      if (a.published_at < b.published_at) return 1;
      return 0;
    });
  }

  return (
    <div style={{ width: '1400px', margin: 'auto' }} className="product-page-main-div">
      <div>
        <div className="product-page-navigation-main-div">
          <p style={{
            display: "flex",
            justifyItems: "baseline"
          }}>Home <FaAngleRight /> {props.name}</p>
        </div>
      </div>

      <section>
        <div className="product-page">
          <div className="product-page-control-bar-div">
            <div
              onClick={() => {
                updateShowSide(!showSide);
              }}
              className="product-page-filter-div"
            >
              <button className="product-page-filter-button">
                <span style={{ fontSize: "16px" }}>Filters</span> {showSide ? <div style={{ fontSize: '16px' }}> <HiAdjustmentsHorizontal /></div> : <div style={{ fontSize: '16px' }}><HiAdjustmentsHorizontal /></div>}
                {showSide ? <div style={{ fontSize: "16px" }}>  <FaAngleRight /></div> : <div style={{ fontSize: "16px" }}><FaAngleLeft /></div>}
              </button>
            </div>
            <div className="product-page-sorting-div">
              <div className="product-page-product-count">
                <p className="product-count">
                  {props.products.length} products
                </p>
              </div>
              <div className="product-page-select-div">
                <select
                  name="sortby"
                  id="sort"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="product-page-select-div"
                >
                  <option className="product-count" value="" disabled selected>
                    Sort By
                  </option>
                  <option value="featured">Featured</option>
                  <option value="best-selling">Best selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
            </div>
          </div>

          <div className="product-page-sidebar-container-div">
            {showSide === true && (
              <NewArrivalsSideBar
              // handleVariables={handleSideBarVariables}
              />
            )}
            <NewArrivalsContainer products={props.products} />
          </div>
          <div className="new-arrivals-main-div">
            {parse(props.collections[1].description.slice(0, 126))}
          </div>
        </div>
        <div >
          <SortedItems
            products={props.products}
            collections={props.collections}
          />
        </div>
      </section>
    </div>
  );
}
