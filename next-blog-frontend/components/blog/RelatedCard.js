import moment from "moment";
import renderHTML from "react-render-html";
import Link from "next/link";
import { API } from "config";

export default function RelatedCard({ blog }) {
  return (
    <div className="card">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              src={`${API}/blog/photo/${blog.slug}`}
              className="img img-fluid"
              alt={blog.title}
            />
          </a>
        </Link>
      </section>
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>{blog.title}</a>
        </Link>
        <span className="card-text">{renderHTML(blog.excerpt)}</span>
      </section>
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>Read More</a>
        </Link>
        <p>
          Posted {moment(blog.updatedAt).fromNow()} by{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a>{blog.postedBy.username}</a>
          </Link>
        </p>
      </section>
    </div>
  );
}
