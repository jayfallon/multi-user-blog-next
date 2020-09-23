import { useState, useEffect } from "react";
import renderHTML from "react-render-html";
import Link from "next/link";
import { API } from "config";
import { listSearch } from "actions/blog";
import blog from "pages/admin/crud/blog";

export default function Search() {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found.`,
      });
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="jumbotron bg-white">
        {message && <p className="pt-4 text-muted">{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="text-primary">{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => {
    return (
      <form onSubmit={searchSubmit}>
        <div className="row">
          <div className="col-md-8">
            <input
              type="search"
              className="form-control"
              placeholder="search blogs"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-block btn-outline-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      <div className="container-fluid">{searchForm()}</div>
      {searched && <div>{searchedBlogs(results)}</div>}
    </React.Fragment>
  );
}
