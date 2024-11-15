import { Link } from "react-router-dom";
export default function CollectionPage(props) {
  return (
    <div
      style={{
        width: "94%",
        margin: "0% auto",
      }}
    >
      <div className="collection-div-main">
        {props.products.map((card, index) => {
          return (
            <div key={index}>
              {card.id === 575819153442 && (
                <div className="image-container-div">
                  <img
                    className="collection-img-main"
                    src={card.images[0]?.src}
                  />

                  <div className="collection-content-div">
                    <h3 className="heading-three" style={{fontSize:"36px",fontWeight:"bold"}}>NEW ARRIVALS</h3>

                    <div className="collection-div-a">
                      <Link to="/collections" className="collection-div-btn">
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {card.id === 575817056290 && (
                <div className="image-container-div">
                  <img
                    className="collection-img-main"
                    src={card.images[0].src}
                  />

                  <div className="collection-content-div">
                    <h3 className="heading-three" style={{fontSize:"36px",fontWeight:"bold"}}>OUR FAVES</h3>

                    <div className="collection-div-a">
                      <Link to="/collections" className="collection-div-btn">
                        VIEW COLLECTION
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {card.id === 573103112226 && (
                <div className="image-container-div">
                  <img
                    className="collection-img-main"
                    src={card.images[0].src}
                  />

                  <div className="collection-content-div">
                    <h3 className="heading-three" style={{fontSize:"36px",fontWeight:"bold"}}>SALE NOW ON</h3>

                    <div className="collection-div-a">
                      {" "}
                      <Link
                        to="/collections/Romper"
                        className="collection-div-btn"
                      >
                        SHOP SALE
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
