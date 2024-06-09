import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Blog</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 My Blog</footer>
      </body>
    </html>
  );
};

export default Layout;