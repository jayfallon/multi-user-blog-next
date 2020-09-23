import Layout from "components/Layout";
import SigninComp from "components/auth/SigninComp";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();

  const showRedirectMessage = () => {
    if (router.query.message) {
      return <p className="alert alert-info">{router.query.message}</p>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <h2>Signin Page</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComp />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
      </div>
    </Layout>
  );
}
