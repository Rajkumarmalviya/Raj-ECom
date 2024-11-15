// import MultiRangeSlider from "./multi-range-slider/MultiRangeSlider";
import MultiRangeSlider from "multi-range-slider-react";
import { useState,useRef } from "react";
export default function NewArrivalsPrice() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(169);

  const ref = useRef();
  const handleOnChangeMin = (e) => {
    set_minValue(e.target.value);
  };

  const handleOnChangeMax = (e) => {
    set_maxValue(e.target.value);
  };
  return (
    <div className="new-arrivals-price-main-div">
      <div className="new-arrivals-price-input-div">
        $
        <input
          type="number"
          className="new-arrivals-price-input"
          value={minValue}
          onInput={handleOnChangeMin}
        />
        $
        <input
          type="number"
          className="new-arrivals-price-input"
          value={maxValue}
          onInput={handleOnChangeMax}
        />
      </div>
      {/* <MultiRangeSlider
        className="multi-range-slider"
        min={min}
        max={max}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      /> */}
      <MultiRangeSlider
      ref={ref}
        style={{ border: "none", padding: "15px 10px",boxShadow:"none" }}
        label={false}
        ruler={false}
        barLeftColor="#000000"
        barInnerColor="#000000"
        barRightColor="#000000"
        thumbLeftColor="#ffffff"
        thumbRightColor="#ffffff"
        min={0}
        max={169}
        step={5}
        subSteps={true}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onChange={(e) => {
            set_minValue(e.minValue);
            set_maxValue(e.maxValue);
        }}
      />
    </div>
  );
}
