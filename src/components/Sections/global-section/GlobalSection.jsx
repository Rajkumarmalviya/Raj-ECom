import { Link } from "react-router-dom";

export default function GlobalSection(props) {
 
  return (
    <div className="main-div-global-section" style={{
      height:"100vh",
    }}>
      <div style={{
        width:"90%",
        margin:"2% auto",
        height:"100%",
        display:"flex"
      }}>
      <div className="img-div-gloabal-section" style={{position:'relative'}}>
        <img
          className="img-global-section"
          style={{
            position: "absolute",
            cursor:'pointer',
            top:"0%",
            left:"+1%",
            width:"50%",
            boxShadow:"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            // height:"100%",
            objectFit:"cover",
            // zIndex:"-1"
            
          }}
          src={props.products[9]?.images[0]?.src}
          alt="global-img"
        />

        <img
          className="img-global-section"
          style={{
            position: "absolute",
            cursor:'pointer',
            top:"+5%",
            right:"+2%",
            width:"50%",
            // height:"100%",
            objectFit:"cover",
            boxShadow:"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            zIndex:"+1"
            
          }}
          src={props.products[19]?.images[0]?.src}
          alt="global-img"
        />
      </div>

      <div className="content-div-global-section">
        <div style={{
          fontFamily:"var(--main-family)",
          fontStyle:"normal",
          fontWeight:"400",
          fontSize:"14px",
          lineHeight:"24px"
        }}>
          <h3>SALE ENDING SOON</h3>

          <p>
            Save up to 60% off clearance and end of season items.
            <br />
            All sales final, must end soon!
          </p>

          <Link to="/collections/Romper" style={{
            textDecoration:"none",
            
          }}className="content-div-global-section-btn">SHOP SALE</Link>
        </div>
      </div>
      </div>
    </div>
  );
}
