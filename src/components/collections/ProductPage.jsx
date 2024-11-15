import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { postAdded } from "../../redux-essentials/Slices/CartSlices";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { PiTruckBold } from "react-icons/pi";
import { TfiRulerAlt } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa6";
import OnlinePayment from "../Footer/main-footer/online-payment/OnlinePayment";
import Product from "./new-arrivals/new-arrivals-product-page/new-arrivals-container/product/Product";
import { useState } from "react";
import GlobalSection from "../Sections/global-section/GlobalSection";
import SortedItems from "./sorted-items/SortedItems";
import AnnouncementBottom from "../Sections/announcement-section/AnnouncementBottom";
export default function ProductPage(props) {
  const dispatch = useDispatch();
  const [variantIdx, updateVariantIdx] = useState(0);
  const [pCount, updatePCount] = useState(1);
  const [showDetails, updateShowDetails] = useState(true);
  const [showDelivery, updateShowDelivery] = useState(false);
  const [showReturns, updateShowReturns] = useState(false);
  const { id, name } = useParams();

  let product = props.products.filter((p) => {
    return p.handle === id;
  });

  let recommends = props.products.filter((p) => {
    return p.product_type === product[0].product_type;
  });

  // localStorage.setItem("cart-products", JSON.stringify(listCart));

  return (
    <div className="product-page-main-div">
      <div>
        <section className="product-page-section">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              fontFamily: "var(--main-family)",
              fontSize: "13.5px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            Home{" "}
            <FaAngleRight
              style={{
                fontSize: "8px",
                marginRight: "2px",
              }}
            />{" "}
            {name}{" "}
            <FaAngleRight
              style={{
                fontSize: "8px",
                marginRight: "2px",
              }}
            />{" "}
            {product[0].title}
          </p>
        </section>
        <div className="product-page-sub-div">
          <div className="product-page-img-div">
            {product[0]?.images.map((image, index) => {
              return (
                <img
                  style={{
                    padding: "0% 0% 2% 2.5%",
                  }}
                  src={image?.src}
                  alt="product images"
                  key={index}
                />
              );
            })}
          </div>

          <div className="product-page-content-div">
            <div className="product-page-social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaPinterestP />
            </div>
            <div style={{ padding: "0 5%" }}>
              <div
                class="rte"
                style={{
                  marginBottom: "1%",
                }}
              >
                <PiTruckBold />
                <div
                  style={{
                    marginLeft: "3%",
                    fontFamily: "var(--main-family)",
                    fontSize: "var(--font-size)",
                    fontStyle: "normal",
                    fontWeight: "100",
                  }}
                >
                  Free delivery within the USA
                </div>
              </div>
              <div>
                <h1>{product[0]?.title}</h1>
              </div>
              <div
                style={{
                  borderBottom: "1px ridge lightgrey",
                }}
              >
                $ {product[0]?.variants[0]?.price}
              </div>
              <div>
                <div
                  style={{
                    padding: "6% 0% 2% 0%",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--main-family)",
                        fontWeight: "600",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Size :{" "}
                    </strong>{" "}
                    <span className="swatch">
                      {" "}
                      {product[0]?.variants[variantIdx]?.title}
                    </span>
                  </div>
                  <div>
                    <TfiRulerAlt />
                    <span
                      style={{
                        fontFamily: "var(--main-family)",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Size chart
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {product[0].variants.map((vr, index) => {
                    return (
                      <div
                        onClick={() => {
                          updateVariantIdx(index);
                        }}
                        style={
                          index === variantIdx
                            ? {
                                background: "black",
                                color: "white",
                                border: "1px ridge grey",
                                marginRight: "2%",
                                fontSize: "14px",
                                fontFamily: "var(--main-family)",
                                fontWeight: "50",
                                fontStyle: "normal",
                                padding: "1% 2%",
                                borderRadius: "3px",
                              }
                            : {
                                border: "1px ridge grey",
                                marginRight: "2%",
                                borderRadius: "3px",
                                fontSize: "14px",
                                padding: "1% 2%",
                                fontFamily: "var(--main-family)",
                                fontWeight: "50",
                                fontStyle: "normal",
                              }
                        }
                        key={index}
                      >
                        {vr.title}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  padding: "6% 0% 1%",
                }}
              >
                <div>
                  <strong
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--main-family)",
                      fontWeight: "600",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Quantity
                  </strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "1px ridge lightgrey",
                    width: "25%",
                    margin: "3% 0%",
                  }}
                >
                  <button
                    onClick={() => {
                      if (pCount === 1) {
                        return;
                      } else {
                        updatePCount(pCount - 1);
                      }
                    }}
                    style={{
                      width: "30%",
                      border: "none",
                      background: "none",
                    }}
                  >
                    <p>-</p>
                  </button>
                  <input
                    type="number"
                    value={pCount}
                    style={{
                      textAlign: "center",
                      width: "40%",
                      border: "none",
                    }}
                  />
                  <button
                    onClick={() => {
                      updatePCount(pCount + 1);
                     
                    }}
                    style={{
                      width: "30%",
                      border: "none",
                      background: "none",
                    }}
                  >
                    <p>+</p>
                  </button>
                </div>
              </div>
              <div
                style={{
                  padding: "4% 0% 3%",
                  borderBottom: "1px ridge lightgrey",
                }}
              >
                <button
                  onClick={() => {
                    dispatch(
                      postAdded({
                        id: product[0].id,
                        variant: variantIdx,
                        pc: pCount,
                        p: product[0],
                      })
                    );
                    props.handle();
                  }}
                  style={{
                    background: "var(--secondary-button-color)",
                    width: "60%",
                    border: "none",
                    padding: "2% 0%",
                    marginBottom: "2%",
                  }}
                >
                  Add to Cart
                </button>{" "}
                <br />
                <button
                  style={{
                    font: "14px",
                    borderRadius: "3px",
                    width: "60%",
                    background: "var(--button-color)",

                    color: "white",
                    border: "none",
                    padding: "2% 0%",
                  }}
                  disabled
                >
                  Buy it now
                </button>
              </div>
              <div
                style={{
                  padding: "8% 6% 2% 4%",
                }}
              >
                <h5
                  style={{
                    fontSize: "14px",

                    fontWeight: "400",
                  }}
                >
                  Secure online shopping
                </h5>
                <OnlinePayment />
              </div>
              <div
                style={{
                  padding: "2%",
                  borderBottom: "1px ridge lightgrey",
                  paddingBottom: "3%",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                  }}
                >
                  <li
                    onClick={() => {
                      if (showDetails === true) {
                        return;
                      } else {
                        updateShowDetails(!showDetails);
                        updateShowDelivery(false);
                        updateShowReturns(false);
                      }
                    }}
                    style={{
                      padding: "3% 2%",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      border: "1px ridge lightgrey",
                    }}
                  >
                    Details
                  </li>
                  <li
                    onClick={() => {
                      if (showDelivery === true) {
                        return;
                      } else {
                        updateShowDelivery(!showDelivery);
                        updateShowDetails(false);
                        updateShowReturns(false);
                      }
                    }}
                    style={{
                      padding: "3% 2%",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      border: "0.5px ridge lightgrey",
                    }}
                  >
                    Delivery
                  </li>
                  <li
                    onClick={() => {
                      if (showReturns === true) {
                        return;
                      } else {
                        updateShowReturns(!showReturns);
                        updateShowDetails(false);
                        updateShowDelivery(false);
                      }
                    }}
                    style={{
                      padding: "3% 2%",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      border: "1px ridge lightgrey",
                    }}
                  >
                    Returns
                  </li>
                </ul>
                <section
                  style={{
                    padding: "3% 3%",
                    fontFamily: "var(--main-family)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    border: "1px ridge lightgrey",
                  }}
                  className="product-page-section"
                >
                  {showDetails === true && parse(product[0].body_html)}
                  {showDelivery === true && parse(props.pages[2].body_html)}
                  {showReturns === true && parse(props.pages[6].body_html)}
                </section>
              </div>
              <div
                style={{
                  padding: "6% 2%",
                  fontFamily: "var(--main-family)",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                <strong>Pair it with</strong>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px ridge lightgrey",
                    paddingBottom: "3%",
                  }}
                >
                  <Product product={recommends[1]} />
                  <Product product={recommends[0]} />
                </div>
                <div
                  style={{
                    padding: "2% 2%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    to={"/collections/new-arrivals/"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      border: "none",
                      background: "none",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    Back To New Arrivals
                  </Link>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    Previous Product
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      fontFamily: "var(--main-family)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    Next Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="new-in-banner">
          <h2>Recommended products</h2> <br />
          {/* <a href="/" >View all</a> */}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Product product={recommends[0]} />
          <Product product={recommends[1]} />
          <Product product={recommends[2]} />
          <Product product={recommends[3]} />
        </div>
      </div>
      <GlobalSection products={props.products} />
      <div>
        <div className="new-in-banner">
          <h2>Browse Our Collection</h2> <br />
          {/* <a href="/" >View all</a> */}
        </div>
        <div>
          <SortedItems
            products={props.products}
            collection={props.collection}
          />
        </div>
      </div>

      <AnnouncementBottom />
    </div>
  );
}
