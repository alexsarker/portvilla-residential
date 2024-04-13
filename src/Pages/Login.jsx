import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signUser(email, password)
      .then(() => {
        toast.success("You're logged in");
      })
      .catch(() => {
        toast.error("Not Login!");
      });
  };
  return (
    <div className="hero pt-10 pb-56">
      <div className="py-12 px-16 border text-black">
        <div className="text-left pb-8">
          <h1 className="text-4xl font-medium pb-4">Welcome back!</h1>
          <p className="font-medium">
            Enter your Credentials to access your account
          </p>
        </div>
        <div className="card w-full">
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered rounded-none text-sm"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control pt-2">
              <label className="label">
                <span className="label-text font-medium text-base">
                  Password
                </span>
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-none">
                <input
                  type="password"
                  name="password"
                  className="grow text-sm"
                  placeholder="Password"
                />
                <IoEyeOutline className="text-xl" />
              </label>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt font-medium text-[#6A9093] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* button */}
            <div className="form-control mt-6">
              <button className="btn bg-black text-white rounded-none hover:bg-[#6A9093]">
                Login
              </button>
            </div>
          </form>

          <div className="divider text-center py-4">Or</div>

          {/* more button */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Link>
              <button className="py-2 px-6 border flex items-center gap-2 hover:bg-blue-500 hover:text-white">
                <FaGoogle />
                Sign in with Google
              </button>
            </Link>
            <Link>
              <button className="py-2 px-6 border flex items-center gap-2 hover:bg-blue-500 hover:text-white">
                <FaGithub />
                Sign in with Github
              </button>
            </Link>
          </div>

          {/* sign up button */}
          <p className="text-center pt-6">
            Don’t have an account?{"  "}
            <Link to="/register">
              <span className="text-[#6A9093] font-medium">Register</span>
            </Link>
          </p>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
