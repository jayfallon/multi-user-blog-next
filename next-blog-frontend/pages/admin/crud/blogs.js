import Link from "next/link";
import Layout from "components/Layout";
import Admin from "components/auth/Admin";
import BlogRead from "components/crud/BlogRead";

export default function blog() {
  return (
    <Layout>
      <Admin>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <h2>Manage Blogs</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <BlogRead />
          </div>
        </div>
      </Admin>
    </Layout>
  );
}
