import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "components/Layout";
import { listAllBlogsCategoriesTags } from "actions/blog";
import { API, DOMAIN, APP_NAME } from "config";
import { useRouter } from "next/router";

import Card from "components/blog/Card";

export default function Blogs({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
}) {
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const router = useRouter();

  const loadMore = () => {
    let toSkip = skip + limit;
    listAllBlogsCategoriesTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-primary btn-large">
          load more
        </button>
      )
    );
  };

  const head = () => {
    return (
      <Head>
        <title>Blogs | {APP_NAME}</title>
        <meta name="description" content="this is a description" />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest podblogs | ${APP_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        <meta
          property="og:image"
          content={`${DOMAIN}/static/images/seoblog.jpg`}
        />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/static/images/seoblog.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog} />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => {
      return (
        <Link key={i} href={`/categories/${c.slug}`}>
          <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
        </Link>
      );
    });
  };

  const showAllTags = () => {
    return tags.map((t, i) => {
      return (
        <Link key={i} href={`/tags/${t.slug}`}>
          <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
        </Link>
      );
    });
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">
                  Blogs
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pt-3">
                <p>{showAllCategories()}</p>
                <p>{showAllTags()}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pt-3">{showAllBlogs()}</div>
              <div className="col-md-12 pt-3">{showLoadedBlogs()}</div>
              <div className="col-md-12 pt-6">{loadMoreButton()}</div>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
}

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;
  return listAllBlogsCategoriesTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};
