import { useState } from "react";
import NProgress from "nprogress";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { signout, isAuth } from "actions/auth";
import { APP_NAME } from "config.js";
import Router from "next/router";
import Search from "components/Blog/Search";

import "node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <a className="navbar-brand">{APP_NAME}</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/blogs">
                <a className="nav-link">Blogs</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </NavItem>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <a className="nav-link">Sign in</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <a className="nav-link">Sign up</a>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
            {isAuth() && isAuth().role === 0 ? (
              <NavItem>
                <Link href="/user">
                  <a className="nav-link">{`${isAuth().name}'s Dashboard`}</a>
                </Link>
              </NavItem>
            ) : null}
            {isAuth() && isAuth().role === 1 ? (
              <NavItem>
                <Link href="/admin">
                  <a className="nav-link">Admin</a>
                </Link>
              </NavItem>
            ) : null}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={() => signout(() => Router.replace(`/signin`))}>
                  Sign out
                </NavLink>
              </NavItem>
            )}
            {isAuth() && (
              <NavItem>
                <Link href="/user/crud/blog">
                  <a className="nav-link">Create</a>
                </Link>
              </NavItem>
            )}
          </Nav>
          <NavbarText>help</NavbarText>
        </Collapse>
      </Navbar>
      <Search />
    </div>
  );
};

export default NavBar;
