import Announcement from "../Header/announcement-bar/Announcement";
import Navigation from "../Header/navigation-bar/Navigation";
import UpperHeader from "../Header/upper-header/UpperHeader";

export default function Topbar(props) {
  return (
    <div className="topbar">
      <UpperHeader handle={props.handle}/>
      <Navigation products={props.products} />
      <Announcement />
    </div>
  );
}
