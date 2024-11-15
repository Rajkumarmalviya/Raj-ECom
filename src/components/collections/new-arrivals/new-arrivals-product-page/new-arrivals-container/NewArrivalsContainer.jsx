import Product from "./product/Product";

export default function NewArrivalsContainer(props) {
console.log(props?.products);
  return (
    <div className="new-arrivals-container-main-div">
     
        <div className="new-arrivals-container-sub-div">
          {props.products.map((product,index) => {
            return (
              <div className="new-arrivals-container-product-div" key={index}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      
    </div>
  );
}
