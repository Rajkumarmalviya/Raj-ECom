// import {ReactComponent as Visa  } from "../../datas/svg/visa.svg"

import OnlinePayment from "./online-payment/OnlinePayment";

export default function MainFooter() {
  return (
    <div className="mainfooter-main-div">
      <div id="footer" className="main-footer-main-div-content grid-wrapper">
      <div  className="main-footer-about-div footer-section-div">
        <h3 className="h4">About</h3>
        <p style={{
          fontFamily: "var(--main-family)",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
        }}>
          Since 2013 Mr Parker has been providing the&nbsp;most on point fashion
          and lifestyle accessories.
        </p>
      </div>
      <div className="footer-section-div">
        <h3 className="h4">Info</h3>
        <ul style={{
          fontFamily: "var(--main-family)",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
        }}>
          <li> <a href="/">Search</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section-div">
        <h3 className="h4">Explore</h3>
        <ul style={{
          fontFamily: "var(--main-family)",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
        }}>
          <li><a href="/">Shop</a></li>
          <li><a href="">Collections</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-section-div">
        <h3 className="h4">Quik Links</h3>
        <ul style={{
          fontFamily: "var(--main-family)",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
        }}>
          <li><a href="/">New Arrivals</a></li>
          <li><a href="/">Dresses</a></li>
          <li><a href="/">Tops</a></li>
          <li><a href="/">Skirts</a></li>
          <li><a href="/">Sale</a></li>
        </ul>
      </div>
      <div className="footer-section-div">
        <h3 className="h4">Connects</h3>
        <p style={{
          fontFamily: "var(--main-family)",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
        }}>Join our mailing list for updates</p>
        <input className="footer-form-input"
          type="email"
          name="email"
          id="email-id"
          placeholder="Email Address"
        />
        <br />
        <button className="footer-form-btn">Join</button>
      </div>
      </div>
      <div className="bottom-footer-main-div">
        <div className="bottom-footer-copyright">
          <a style={{
            fontFamily: "var(--main-family)",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
          }} className="anchor-tag" href="/">
            © 2024 Mr Parker - Wardrobe
          </a>
          •{" "}
          <a style={{
            fontFamily: "var(--main-family)",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
          }} className="anchor-tag" href="/">
            Website builder by Shopify
          </a>
        </div>
        <div className="bottom-footer-payment-gateway">
         <OnlinePayment/>
        </div>
      </div>
    </div>
  );
}
