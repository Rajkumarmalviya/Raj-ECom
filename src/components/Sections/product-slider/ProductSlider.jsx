import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Product from "../../collections/new-arrivals/new-arrivals-product-page/new-arrivals-container/product/Product";

register();

export default function ProductSlider(props) {
  const swiperElRef = useRef(null);

  // function to apply css on navigaion btn
  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      pagination: false,
      autoplay: false,
      loop: true,
      slidesPerView: 4,
      injectStyles: [
        `
              .swiper-button-next,
              .swiper-button-prev {
                height:4%;
                width:2%;
                padding:1% 1%;
                color: var(--direction-color);
    background-color: var(--direction-background);
    margin: 0;
    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgb(0 0 0 / 5%);
              }
          `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div style={{
      width: "1400px",
      margin: "auto"
    }}>
      <div className="product-slider-main-div">
        <swiper-container ref={swiperElRef} init="false">
          {props.products?.map((product, index) => {
            return (
              <swiper-slide key={index}>
                <Product product={product} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
}
