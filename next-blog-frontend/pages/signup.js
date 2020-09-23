import Layout from "components/Layout";
import SignupComp from "components/auth/SignupComp";

export default function Signup() {
  return (
    <Layout>
      <h2>Signup Page</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComp />
        </div>
      </div>
    </Layout>
  );
}
