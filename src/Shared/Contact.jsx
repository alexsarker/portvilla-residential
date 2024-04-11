import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-[#F6F9FA] p-20">
      <p className="text-6xl font-medium text-[#393939]">Let’s</p>
      <div className="flex items-center">

        <p className="lg:w-[1000px] text-[150px] font-medium text-[#393939]">
          Get in touch
        </p>


        <span className="lg:pl-52">
        <button className="flex gap-2 px-5 py-4 items-center bg-black text-white">
          Contact us{" "}
          <span className="text-2xl">
            <FiArrowUpRight />
          </span>
        </button>
        </span>
      </div>
    </div>
  );
};

export default Contact;
