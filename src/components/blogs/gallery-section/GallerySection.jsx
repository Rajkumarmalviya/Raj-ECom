import blogsCollection from "../../datas/blogsCollection"
export default function GallerySection() {
    return (
        <div style={{width:'1400px',margin:"auto"}}>
            <div className="gallery-section-main-div" >
                {blogsCollection.map((images) => {
                    return (<div className="gallery-section-parent-div">
                        <img className="gallery-section-img" src={images.src} />
                        <div className="gallery-section-child-div">
                            <h3 className="gallery-section-img-txt">{images.title}</h3>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}