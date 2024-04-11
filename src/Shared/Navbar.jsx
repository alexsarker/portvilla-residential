import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <Link to="/" className="btn btn-ghost font-normal text-base">
        Home
      </Link>
      <Link to="/blogs" className="btn btn-ghost font-normal text-base">
        Blogs
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="flex-1">
        <Link to="/" className="text-3xl font-bold">
          PortVilla
        </Link>
      </div>
      <div className="flex-none gap-8">
        {navLinks}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
