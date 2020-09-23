import Head from "next/head";
import Link from "next/link";
import Layout from "components/Layout";
import { userPublicProfile } from "actions/user";
import { API, DOMAIN, APP_NAME } from "config";
import moment from "moment";
import ContactForm from "../../components/form/ContactForm";

export default function userProfile({ user, blogs }) {
  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="mt-4 mb-4" key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a>{blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5>{user.name}</h5>
                  <Link href={`${user.profile}`}>
                    <a>View Profile</a>
                  </Link>
                  <p className="text-muted">
                    Joined {moment(user.createdAt).fromNow()}
                  </p>
                  <p>
                    <img
                      src={`${API}/user/photo/${user.username}`}
                      className="img img-fluid mb-3"
                      alt={`${user.username}'s profile photo`}
                      style={{ maxHeight: "auto", maxWidth: "100%" }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5>Recent Blogs by {user.name}</h5>
                  <div>{showUserBlogs()}</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Contact form</h5>
              <br />
              <div>
                <ContactForm authorEmail={user.email} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}

userProfile.getInitialProps = ({ query }) => {
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { user: data.user, blogs: data.blogs };
    }
  });
};
