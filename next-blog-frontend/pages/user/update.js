import Link from "next/link";
import Layout from "components/Layout";
import Private from "components/auth/Private";
import ProfileUpdate from "components/auth/ProfileUpdate";

export default function UserProfileUpdate() {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ProfileUpdate />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
}
