
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

 const Announcement = () => {
  const swiperElRef = useRef(null);

  return (
    <div>
    <swiper-container
    class="announcement-bar"
      ref={swiperElRef}
      autoplay='true'
      delay='6000'
      loop="true"
      slides-per-view="1"
      navigation="false"
      pagination="false"
    >
      <swiper-slide><span className="announcement-text">20% off all orders with code <strong className="announcement-text">SAVE20</strong></span></swiper-slide>
      <swiper-slide><span className="announcement-text">Free shipping on all orders over $100</span></swiper-slide>
      <swiper-slide><span className="announcement-text">Annual <strong className="announcement-text">SALE</strong> now on - Save up to 60%</span></swiper-slide>
    </swiper-container>
    </div>
  );
};

export default Announcement;