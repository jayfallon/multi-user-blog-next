import Link from "next/link";
import Layout from "components/Layout";

export default function Index() {
  return (
    <Layout>
      <h2>Index Page</h2>
      <ul>
        <li>
          <Link href="/signin">
            <a>Signin</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
