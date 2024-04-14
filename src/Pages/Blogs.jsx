import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  const blogs = useLoaderData();
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>PortVilla | Blogs</title>
      </Helmet>

      <h2 className="my-12 text-center text-3xl font-medium">Blogs</h2>
      <hr className="my-12" />
      <div
        className={
          selectedBlog
            ? "grid lg:grid-cols-2 gap-12 mb-48"
            : "grid lg:grid-cols-1 gap-12 mb-48"
        }
      >
        <span data-aos="fade-right">
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-6 p-8 bg-gray-100">
              {blogs.map((blog, idx) => (
                <div
                  onClick={() => handleBlogClick(blog)}
                  key={idx}
                  className="max-w-80 cursor-pointer"
                >
                  <img src={blog.image} />
                  <h2 className="text-xl font-bold pt-4">{blog.heading}</h2>
                  <p className="py-2 text-sm text-gray-400 font-medium">
                    Date: {blog.date}
                  </p>
                  <p className="text-[#131313B2] text-justify">
                    {blog.description.slice(0, 110) + "..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </span>
        {selectedBlog && (
          <>
            <span data-aos="fade-left">
              <div className="bg-gray-100 p-10">
                <p className="pb-4  text-gray-400">
                  Published Date: {selectedBlog.date}
                </p>
                <img
                  className="max-h-[550px] pb-6"
                  src={selectedBlog.image}
                  alt="Image"
                />
                <h2 className="text-2xl font-bold pb-6">
                  {selectedBlog.heading}
                </h2>
                <hr className="pb-6" />
                <p className="text-[#131313B2] text-justify">
                  {selectedBlog.description}
                </p>
                <div className="flex justify-center py-24">
                  <Link to="/">
                    <button className="flex gap-2 px-5 py-2 items-center bg-[#393939] text-white">
                      <span className="text-2xl">
                        <FiArrowLeft />
                      </span>
                      Back{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
