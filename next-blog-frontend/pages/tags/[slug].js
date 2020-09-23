import Head from "next/head";
import Link from "next/link";
import Layout from "components/Layout";
import { getSingleTag } from "actions/tag";
import { API, DOMAIN, APP_NAME } from "config";
import renderHTML from "react-render-html";
import moment from "moment";
import Card from "components/blog/Card";

export default function Tag({ tag, blogs }) {
  return (
    <React.Fragment>
      <Layout>
        <div className="conatiner-fluid">
          <div className="col-md-12">
            <h2>{tag.name}</h2>
          </div>
          <div className="col-md-12">
            {blogs.map((b, i) => {
              return <Card key={i} blog={b} />;
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}

Tag.getInitialProps = ({ query }) => {
  return getSingleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs };
    }
  });
};
