import { Link } from "react-router-dom";

export default function Spotlight(props) {
  return (
    <div className="div-main-spotlight">
      <div className="spotlight-section-sub-div">
        <div className="spotlight-section-heading-div">
          <h2 className="center">SPOTLIGHT ON</h2>
          <p
            style={{
              fontFamily: "var(--main-family)",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              letterSpacing: "0.05em",
            }}
          >
            Hot items that we love right now
          </p>
        </div>

        <div className="spotlight-main-div">
          {props.products?.map((card, index) => {
            return (
              <div className="spotlight-section-img-component-div" key={index}>
                {card.id === 573199548450 && (
                  <div className="image-container-div">
                    <img
                      className="collection-img-main"
                      src={card.images[0]?.src}
                    />

                    <div className="spotlight-section-img-content-div">
                      <h3>{card.title}</h3>

                      <p
                        style={{
                          fontFamily: "var(--main-family)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          marginBottom: "6%",
                        }}
                      >
                        Perfect for the summer
                      </p>

                      <div style={{}}>
                        <Link
                          style={{
                            textDecoration: "none",
                            fontFamily: "var(--main-family)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                          to={
                            "/collections/" +
                            card.product_type +
                            "/products/" +
                            card.handle
                          }
                          className="spotlight-section-img-content-btn"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {card.id === 573262200866 && (
                  <div className="image-container-div">
                    <img
                      className="collection-img-main"
                      src={card.images[0].src}
                    />

                    <div className="spotlight-section-img-content-div">
                      <h3>{card.title}</h3>
                      <p
                        style={{
                          fontFamily: "var(--main-family)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          marginBottom: "6%",
                        }}
                      >
                        Cheeky Nautical number
                      </p>
                      <div>
                        <Link
                          style={{
                            fontFamily: "var(--main-family)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                          to={
                            "/collections/" +
                            card.product_type +
                            "/products/" +
                            card.handle
                          }
                          className="spotlight-section-img-content-btn"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {card.id === 575767674914 && (
                  <div className="image-container-div">
                    <img
                      className="collection-img-main"
                      src={card.images[0].src}
                    />

                    <div className="spotlight-section-img-content-div">
                      <h3>{card.title}</h3>
                      <p
                        style={{
                          fontFamily: "var(--main-family)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          marginBottom: "6%",
                        }}
                      >
                        Seriously! how cute is this?
                      </p>
                      <div>
                        <Link
                          style={{
                            fontFamily: "var(--main-family)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                          to={
                            "/collections/" +
                            card.product_type +
                            "/products/" +
                            card.handle
                          }
                          className="spotlight-section-img-content-btn"
                        >
                          Buy Now
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
    </div>
  );
}
