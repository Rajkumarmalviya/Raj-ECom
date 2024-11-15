import { useEffect, useRef, useState } from "react";
import ShopNavigation from "./shop-navigation-page/ShopNavigation";
import CollectionNavigation from "./collection-navigation-page/CollectionNavigation";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Navigation(props) {
  const showRef = useRef(null);
  const collectionRef = useRef(null);
  const [showShop, updateShowShop] = useState(false);
  const [showCollection, updateShowCollection] = useState(false);
console.log(showRef)
  const handleHovershop = (val) => {
    updateShowShop(val);
  };

  const handleHovercollection = (val) => {
    updateShowCollection(val);
  };
  const handleClickOutside = (event) => {
    if (showRef.current && !showRef.current.contains(event.target)) {
      updateShowShop(false);
    }
    if (collectionRef.current && !collectionRef.current.contains(event.target)) {
      updateShowCollection(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mouseover', handleClickOutside);
    return () => {
      document.removeEventListener('mouseover', handleClickOutside);
    };
  }, []);
  return (
    <header style={{ padding: "1.5% 3%", }}>
      <nav
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginLeft: "4%",
          }}
          className="logo"
        >
          <Link to={"/"} style={{ cursor:"pointer", fontSize: "26px", fontWeight: "bold", color: "#9f9070" }}>CharmingChic</Link>
        </div>

        <div
          style={{
            marginLeft: "9%",
          }}
          className="nav-ul"
        >
          <ul style={{ letterSpacing: "0.05em", display: "flex", position: "relative"  }} className="navigation-ul">
            <div ref={showRef} >
              <Link
                to="/"
                className="link shop-navigation-li"
                id="shop-nav"
                onMouseEnter={() => {
                  updateShowShop(true);
                }}
              >
                Shop
                <RiArrowDropDownLine />
              </Link>

            </div>
            <div ref={collectionRef} >
              <Link
                to="collections"
                className="link collection-navigation-li"
                id="collection-nav"
                onMouseEnter={() => {
                  updateShowCollection(true);
                }}
              >
                Collections
              </Link>

            </div>
            <Link to="blogs" className="link">
              Blog
            </Link>
            <Link to="contacts" className="link">
              Contacts
            </Link>
            <Link to="features" className="link">
              Features
            </Link>
            <Link to="faqs" className="link">
              FAQ
            </Link>
          </ul>
          {showShop && <div ref={showRef}> <ShopNavigation  showShop={handleHovershop} /></div>}
          {showCollection && (
            <div ref={collectionRef}>
            <CollectionNavigation
              products={props.products}
              showCollection={handleHovercollection}
            />
            </div>
          )}
        </div>
      </nav>



    </header>
  );
}
