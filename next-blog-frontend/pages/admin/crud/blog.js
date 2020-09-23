import Link from "next/link";
import Layout from "components/Layout";
import Admin from "components/auth/Admin";
import BlogCreate from "components/crud/BlogCreate";

export default function blog() {
  return (
    <Layout>
      <Admin>
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
      </Admin>
    </Layout>
  );
}
