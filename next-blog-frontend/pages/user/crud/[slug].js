import Link from "next/link";
import Layout from "components/Layout";
import Private from "components/auth/Private";
import BlogUpdate from "components/crud/BlogUpdate";

export default function blog() {
  return (
    <Layout>
      <Private>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <h2>Update Blog</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <BlogUpdate />
          </div>
        </div>
      </Private>
    </Layout>
  );
}
