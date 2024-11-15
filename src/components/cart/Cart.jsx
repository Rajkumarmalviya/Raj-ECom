import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { useDispatch } from "react-redux";
import { postRemove } from "../../redux-essentials/Slices/CartSlices";
import { Link } from "react-router-dom";

function Cart(props) {
  const posts = useSelector((state) => state.posts);
  const [showTxtArea, updateShowTxtArea] = useState(false);
  const dispatch = useDispatch();
  const [total, updateTotal] = useState();

  if(posts.length!==0){
    var priceArray=[];   
    priceArray= posts.map((item)=>{
      return item.p.variants[0].price*item.pc;}
    )
    var subtotal=priceArray.reduce((acc,crr)=>Number(acc)+Number(crr))

   
  }
  function hanldeDelete(id) {
    dispatch(postRemove(id));
  }
  // function handleTotal(price) {
  //   updateTotal(price);
  // }

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "100",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        display: "flex",
        fontFamily:"var(--main-family)",
        fontSize:"14px",
        fontStyle:"normal",
        fontWeight:"400",
        // right: "0",
        top: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "#0000009b",
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="cart-main-div"
          style={{
            // width: "35%",
            overflowY: "auto",
            height: "100%",
            // float: "right",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3% 2%",
              borderBottom: "1px ridge lightgrey",
            }}
          >
            <div
              style={{
                margin: "2%",
              }}
            >
              <button
                onClick={props.handle}
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <div
              style={{
                marginTop: "2%",
              }}
            >
              <strong>
                <h2>cart</h2>
              </strong>
            </div>
            <div
              style={{
                padding: "2%",
                fontFamily: "var(--main-family)",
                fontSize: "var(--font-size)",
              }}
            >
              {posts.length} Item&#40;s&#41;
            </div>
          </div>
          <div
            style={{
              marginLeft: "4%",
            }}
          >
            {posts ? (
              <div>
                {posts.map((pro, idx) => {
                  return (
                    <div key={idx}>
                      <CartProduct
                        pro={pro}
                        handle={hanldeDelete}
                
                      />
                    </div>
                  );
                })}
                <div style={
                  { padding:"3%"}
                }>
                  <div
                    onClick={() => {
                      updateShowTxtArea(!showTxtArea);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Leave a Note with your order</p>{" "}
                    {showTxtArea ? (
                      <p
                        onClick={() => {
                          updateShowTxtArea(!showTxtArea);
                        }}
                      >
                        -
                      </p>
                    ) : (
                      <p
                        onClick={() => {
                          updateShowTxtArea(!showTxtArea);
                        }}
                      >
                        +
                      </p>
                    )}
                  </div>
                  {showTxtArea && (
                    <div style={{overflowX:"hidden"}}>
                      <textarea
                        name="textaria"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  )}
                  <div
                    style={{
                      overflowX:"hidden",
                      textAlign: "center",
                      color: "white",
                      padding: "2%",
                      marginTop:"1%",
                      background: "#9f9070",
                    }}
                  >
                    <p style={{overflowX:'hidden',wordBreak:'keep-all'}}>Your order qualify for free shipping!</p>
                    <p style={{overflowX:'hidden',wordBreak:"keep-all"}}> &#40;Excludes Internation &#41;</p>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    background:"white",
                    height: "auto",
                    width: "93%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "2%",
                      borderBottom: "1px ridge lightgrey",
                    }}
                  >
                    <div>Subtotal</div>
                    <div> ${subtotal}.00</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "2%",
                      borderBottom: "1px ridge lightgrey",
                    }}
                  >
                    <div>Total</div>
                    <div> ${subtotal}.00</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "2%",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "45%",
                        padding: "2%",
                        borderRadius: "3px",
                        background: "var(--secondary-button-color)",
                        
                      }}
                    >
                      <Link style={{
                        textDecoration:"none",
                        color: "black",
                      }} onClick={props.handle} to="cart">Veiw Cart</Link>
                      
                    </div>
                    <div
                      style={{
                        padding: "2%",
                        borderRadius: "3px",
                        background: "var(--button-color)",
                        color: "var(--button-text)",
                        width: "45%",
                      }}
                    >
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", marginTop: "40%" }}>
                <h2>Your Cart is currently empty</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
