export default function SortedItems(props) {
console.log(props)
  return (
    <div className="main-div-sorted-items">
      
      <p>Shop our selection of hand chosen items sorted by collection</p>
      <div className="sorted-items-main-div">
        {props?.collections ? <>{ props?.collections?.map((ph,index) => {
          return (
            <li className="div-img-collection" key={index}>
                <div className="sorted-items-img-component"> 
                  <img className="collection-img" src={props.products[index].images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">{ph.title}</span>
                    <span className="sorted-items-counts">{ph.products_count} ITEMS</span>
                  </div>
                </div>  
            </li>
          );
        } )}</> : props.collection.map((ph,index) => {
          return (
            <li className="div-img-collection" key={index}>
                <div className="sorted-items-img-component"> 
                  <img className="collection-img" src={props.products[index].images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">{ph.title}</span>
                    <span className="sorted-items-counts">{ph.products_count} ITEMS</span>
                  </div>
                </div>  
            </li>
          );
        })}
      </div>

    </div>
  );
}
