import moment from "moment";
import renderHTML from "react-render-html";
import Link from "next/link";
import { API } from "config";

export default function Card({ blog }) {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => {
      return (
        <Link key={c._id} href={`/categories/${c.slug}`}>
          <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
        </Link>
      );
    });

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => {
      return (
        <Link key={t._id} href={`/tags/${t.slug}`}>
          <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
        </Link>
      );
    });

  return (
    <div className="lead">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>{blog.title}</a>
        </Link>
      </header>
      <section>
        <p className="mark ml-1">
          Written by:{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a>{blog.postedBy.username}</a>
          </Link>{" "}
          | Published on {moment(blog.updatedAt).fromNow()}
        </p>
      </section>
      <section>
        <p>
          {showBlogCategories(blog)}
          {showBlogTags(blog)}
        </p>
      </section>
      <div className="row">
        <div className="col-md-4">
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
        </div>
        <div className="col-md-8">
          <section>
            {renderHTML(blog.excerpt)}
            <Link href={`/blogs/${blog.slug}`}>
              <a>read more</a>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
