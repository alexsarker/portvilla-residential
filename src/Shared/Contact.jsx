import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-[#F6F9FA] p-8 lg:p-20">
      <p className="text-6xl md:text-center lg:text-left font-medium text-[#393939]">
        Let’s
      </p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center">
        <p className="lg:w-[1000px] text-9xl md:text-[100px] lg:text-[150px] font-medium text-[#393939]">
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
