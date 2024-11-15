import blogs from "../../datas/blogs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function RecentBlog() {
  return (
    <div className="recent-blogs-main-div">
      <div className="new-in-banner">
        <h2>Recent</h2> <br />
        {/* <a href="/" >View all</a> */}
      </div>
      {blogs.map((blog,idx) => {
        return (
          <div className="recent-blogs-parent-div">
          {idx%2?
          <div className="recent-blogs-parent-div">
              <img className="recent-blogs-img" src={blog.src} alt="blog img" />
              <div className="recent-blog-child-div">
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <button className="recent-blogs-read-more-btn">Read More</button>
                <div className="recent-blogs-author-details">
                  <div >
                    <span class="date">{blog.date} &nbsp;</span>
                    <span class="author">•&nbsp;&nbsp;{blog.author}</span>
                  </div>
                  <div className="recent-blogs-social-icons">
                    <FaFacebookF />
                    <FaXTwitter />
                  </div>
                </div>
              </div>
              </div>:<div className="recent-blogs-parent-div">
              
              <div className="recent-blog-child-div">
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <button className="recent-blogs-read-more-btn">Read More</button>
                <div className="recent-blogs-author-details">
                  <div >
                    <span class="date">{blog.date} &nbsp;</span>
                    <span class="author">•&nbsp;&nbsp;{blog.author}</span>
                  </div>
                  <div className="recent-blogs-social-icons">
                    <FaFacebookF />
                    <FaXTwitter />
                  </div>
                </div>
              </div>
              <img className="recent-blogs-img" src={blog.src} alt="blog img" />
              </div>
          }
          </div>
        );
      })}
    </div>
  );
}
