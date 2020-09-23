import Layout from "components/Layout";
import BlogCreate from "components/crud/BlogCreate";
import Private from "components/auth/Private";

export default function blog() {
  return (
    <Layout>
      <Private>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <h2>Create Blog</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <BlogCreate />
          </div>
        </div>
      </Private>
    </Layout>
  );
}
