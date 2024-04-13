import { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch(() => {
        toast.error("Logout Error");
      });
  };

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
        {/* Main Work */}
        {user ? (
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
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <Link to="/login">
              <button className="flex gap-2 px-5 py-4 items-center bg-black text-white">
                Login{" "}
                <span className="text-2xl">
                  <FiArrowUpRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Navbar;
