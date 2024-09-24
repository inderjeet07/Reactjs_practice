import { Outlet, Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="ml-auto flex items-center space-x-2.5">
          <li className="inline-block">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <div className="cart-icon">
      <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart" style={{ width: '24px', height: 'auto' }} />
      {/* {itemCount > 0 && ( */}
        <span className="badge badge-warning" id="lblCartCount">
          {0}
        </span>
      {/* )} */}
    </div>
      {/* )} */}
      </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;