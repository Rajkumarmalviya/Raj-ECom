import { Link } from "react-router-dom";

export default function TextSlider() {
  return (
    <div className="scrolling-text-container" >
      <div className="scrolling-text-inner ">
        <div className="scrolling-text  marquee " >
          <div style={{ display: "flex", gap: "10px" }}>

            <div className="scrolling-text-item">
              <span> ♡</span>
            </div>
            <div className="scrolling-text-item">
              <span> ENJOY FREE SHIPPING AND FREE RETURN ON ALL ORDERS </span>{" "}
            </div>
            <div className="scrolling-text-item">
              🏷
            </div>
            <div className="scrolling-text-item">
              <span>
                {" "}
                OUR NEW DROP IS HERE - <Link style={{
                  color: "white"
                }} to="/collections/Romper">SHOP NOW</Link>{" "}
              </span>
            </div>
            <div className="scrolling-text-item">
              ♡
            </div>
            <div className="scrolling-text-item">
              <span> ENJOY FREE SHIPPING AND FREE RETURN ON ALL ORDERS </span>{" "}
            </div>
            <div className="scrolling-text-item">🏷</div>
            <div className="scrolling-text-item">

              <span>
                {" "}
                OUR NEW DROP IS HERE - <Link style={{
                  color: "white"
                }} to="/collections/Dress">SHOP NOW</Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
