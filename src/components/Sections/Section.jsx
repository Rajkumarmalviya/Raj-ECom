import CollectionPage from "./collections-page-section/CollectionsPage";
import Dresses from "./dresses-section/Dresses";
import MainSection from "./main-section/MainSection";
import NewIn from "./new-in/NewIn";
import GlobalSection from "./global-section/GlobalSection";
import Notice from "./notice-section/Notice";
import Spotlight from "./spotlight-section/Spotlight";
import TextSlider from "./text-slider/TextSlider";
import Tops from "./tops-section/Tops";
import AnnouncementBottom from "./announcement-section/AnnouncementBottom";
export default function Section(props) {
  return (
    <div>
      <MainSection />

      <TextSlider />

      <CollectionPage products={props.products} />

      <NewIn products={props.products} />

      <GlobalSection products={props.products} />

      <Dresses products={props.products} />

      <Spotlight products={props.products} />

      <Tops products={props.products} />

      <Notice blogs={props.blogs} />

      <AnnouncementBottom />
    </div>
  );
}
