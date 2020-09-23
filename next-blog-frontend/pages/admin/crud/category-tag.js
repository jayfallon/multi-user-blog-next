import Link from "next/link";
import Layout from "components/Layout";
import Admin from "components/auth/Admin";
import Category from "components/crud/Category";
import Tag from "components/crud/Tag";

export default function CategoryTag() {
  return (
    <Layout>
      <Admin>
        <div className="lg:container lg:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div>
              <h2>Categories</h2>
              <Category />
            </div>
            <div>
              <h2>Tags</h2>
              <Tag />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}
