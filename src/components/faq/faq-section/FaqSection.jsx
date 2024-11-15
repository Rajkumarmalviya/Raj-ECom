import { useState } from "react";
import Faqs from "../../datas/Faq";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function FaqSection(props) {
  const [show, updateShow] = useState({
    idx: 0,
    show: false,
  });
  return (
    <div>
    <div className="faq-section-main-div">
      {
        props.pages.map((page) => {
          return (
            <div>{page.id === 79231156258 && <p>{page.body_html}</p>}</div>
          );
        })}
      <div className="new-in-banner">
        <h2>F A Q</h2> <br />
        {/* <a href="/" >View all</a> */}
      </div>
      <div className="faq-section-qna">
        {Faqs.map((faq, index) => {
          return (
            <div key={index} className="faq-section-qna-div">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateShow({ idx: index, show: !show.show });
                }}
                className="faq-section-question"
              >
                {faq.question}{" "}
                <span className="dropDownArrow">
                  <RiArrowDropDownLine />
                </span>
              </button>
              {index === show.idx && show.show === true && (
                <p className="faq-section-question">{faq.answere}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
