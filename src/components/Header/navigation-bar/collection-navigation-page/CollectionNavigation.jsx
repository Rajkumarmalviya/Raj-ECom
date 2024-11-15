import { Link } from "react-router-dom";

export default function CollectionNavigation(props) {
  const {ref}=props
  return (
    <div
      className="collection-image-component"
      ref={ref}
      style={{
        position:"absolute",
        height:"30%",
        zIndex:'100',
        background:'#fff',
        top:"117px",
        padding:"10px",
        boxShadow:"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        width:"100vw",
        // left:'-460px',
        left:'0px',
        transition: "height 0.5s ease-in-out"
      }}
      onMouseLeave={() => {
        props.showCollection(false);
      }}
    >
      <div style={{
        display:"flex",
        width:"1200px",
        alignSelf:"center",
        justifyContent:"center",
      }}>
      {props.products.map((ph, index) => {
        return (
          <li className="div-img-collection" key={index}>
            {ph.id === 575844974626 && (
              <Link to="collections/Dress" className="img-component">
                <img className="collection-img" style={{height:"150px",width:"130px"}} src={ph.images[0].src} />
                <p className="collection-title">Dresses</p>
              </Link>
            )}

            {ph.id === 573170876450 && (
              <Link to="collections/Romper" className="img-component">
                <img className="collection-img" style={{height:"150px",width:"130px"}} src={ph.images[0].src} />
                <p>Rompers</p>
              </Link>
            )}

            {ph.id === 575849234466 && (
              <Link to="collections/Top" className="img-component">
                <img className="collection-img" style={{height:"150px",width:"130px"}} src={ph.images[0].src} />
                <p>Tops</p>
              </Link>
            )}

            {ph.id === 573103112226 && (
              <Link to="collections/new-arrivals" className="img-component">
                <img className="collection-img" style={{height:"150px",width:"130px"}} src={ph.images[0].src} />
                <p>New Arrivals</p>
              </Link>
            )}
          </li>
        );
      })}
      </div>
    </div>
  );
}
