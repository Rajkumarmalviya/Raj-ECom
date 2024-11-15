import parse from "html-react-parser";
export default function FeaturesNotice(props) {
  return (
    <div className="features-notice-main-div">
      {props.pages.map((page) => {
        return (
          <div style={{
            fontFamily: "var(--main-family)",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
          }} className="features-notice-content-div">
            {page.id === 10660597 && parse(page.body_html)}
          </div>
        );
      })}
    </div>
  );
}
