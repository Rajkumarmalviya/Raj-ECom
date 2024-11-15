export default function Notice(props) {
console.log("hello")
  return (
    <div className="blogs-section-main-div">
      <div className="new-in-banner">
        <h2>RECENT POST</h2> <br />
      </div>
      <div className="blogs-section-sub-div">
        {props.blogs?.map((blog,index) => {
          return (
            <div className="blog-section-blog-div" key={index}>
              
              <img  className="blog-img" src={blog.src} alt="blog-img" />
              
              <div className="blog-section-blog-content">
                <a href="/" className="blog-section-blog-link">
                  {blog.title}
                </a>
                <p style={{
                  fontFamily: "var(--main-family)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                }}>{blog.content}</p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
