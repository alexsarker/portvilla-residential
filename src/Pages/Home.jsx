import { useLoaderData } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Item from "./Item";

const Home = () => {
  const items = useLoaderData();
  return (
    <div>
      {/* section 1 */}
      <div className="relative">
        <div className="carousel w-full relative z-10">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/S7Gg7Q5/1.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/gMs40QT/2.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/g9GVFqX/3.png" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center ml-56 z-20 pointer-events-none gap-10">
          <h1 className="max-w-lg text-6xl text-[#333333] font-bold">
            Discover the best Residents
          </h1>
          <p className="max-w-xl text-[#393939]">
            Find your dream home among our diverse range of residential
            properties, from cozy apartments to spacious single-family homes,
            tailored to suit your lifestyle.
          </p>
          <span>
            <button className="flex gap-2 px-5 py-4 items-center bg-[#393939] text-white">
              Contact us{" "}
              <span className="text-2xl">
                <FiArrowUpRight />
              </span>
            </button>
          </span>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <div className="flex justify-between items-center mt-16">
          <h2 className="text-5xl font-bold">Discover Houses</h2>
          <p className="max-w-96 text-[#39393990] text-right">
            As it involves exploring and learning about various options
            available in the market
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 mt-24 mb-20 gap-20">
            {items.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;