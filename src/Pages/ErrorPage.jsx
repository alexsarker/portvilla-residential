import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-72">
      <h1 className="text-8xl text-black font-bold">404</h1>
      <p className="text-3xl pt-6 pb-2 font-semibold text-[#595D62]">
        Not Found
      </p>
      <p>the resource requested could not be found on this server!</p>
      <span className="flex justify-center pt-6">
        <Link to="/">
          <button className="flex gap-2 px-6 py-3 items-center bg-black text-white">
            <span className="text-2xl">
              <FiArrowLeft />
            </span>
            Back to home{" "}
          </button>
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
