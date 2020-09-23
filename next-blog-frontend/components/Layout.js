import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
}
