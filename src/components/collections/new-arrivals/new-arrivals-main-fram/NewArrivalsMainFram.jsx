import parse from "html-react-parser";

export default function NewArrivalsMainFram(props) {
  return (
    <div className="new-arrivals-main-div">
      {parse(props.collections[1]?.description.slice(0, 126))}

      <h1 className="new-arrivals-child-div">
        {props.collections[1]?.title}
      </h1>
    </div>
  );
}
