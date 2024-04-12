import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-48">
      <span>
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
      <span>
        <div className="bg-gray-100 p-10">
          {selectedBlog && (
            <>
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
            </>
          )}
        </div>
      </span>
    </div>
  );
};

export default Blogs;
