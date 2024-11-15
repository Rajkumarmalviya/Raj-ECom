import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function CartProduct(props) {
  const variant = props.pro.variant;

  const [pCount, updatePCount] = useState(props.pro.pc);

  return (
    <div
      style={{
        display: "flex",
        padding: "2%",
        justifyContent: "space-evenly",
        fontFamily:"var(--main-family)",
        fontSize:"14px",
        fontStyle:"normal",
        fontWeight:"400",
        borderBottom: "1px ridge lightgrey",
      }}
    >
      <div
        style={{
          height: "15%",
          width: "20%",
        }}
      >
        <img src={props.pro.p.images[0].src} alt="img" />
      </div>
      <div
        style={{
          textAlign: "left",
          paddingLeft: "3%",
        }}
      >
        <div
          style={{
            padding: "2% 0%",
            fontSize: "var(--font-size)",
          }}
        >
          {props.pro.p.title}
        </div>
        <div
          style={{
            padding: "2% 0%",
            fontSize: "var(--font-size)",
          }}
        >
          Size {props.pro.p.variants[0].title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "6%",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                width: "50%",

                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button
                onClick={() => {
                  if (pCount === 1) {
                    return;
                  } else {
                    updatePCount(pCount - 1);
                    // props.handlePrice(
                    //   pCount * props.pro.p.variants[0].price
                    // );
                  }
                }}
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                -
              </button>
              <input
                style={{
                  width: "50%",
                  border: "none",
                  textAlign: "center",
                }}
                type="number"
                value={pCount}
              />
              <button
                onClick={() => {
                  updatePCount(pCount + 1);
                  // props.handlePrice(
                  //   pCount * props.pro.p.variants[0].price
                  // );
                }}
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                +
              </button>
            </div>
          </div>
          <div>{props.pro.p.variants[variant].price}</div>
        </div>
      </div>
      <div onClick={() => props.handle(props.pro.id)}>
        <RxCross2 />
      </div>
    </div>
  );
}

export default CartProduct;
