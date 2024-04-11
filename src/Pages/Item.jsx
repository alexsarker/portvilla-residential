import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const {
    id,
    image,
    estate_title,
    location,
    description,
    area,
    price,
    status,
  } = item;
  return (
    <div className="w-80">
      <img className="pb-10" src={image} />
      <span className="text-white bg-red-600 px-4 py-1">{status}</span>
      <h2 className="text-3xl font-bold pt-4 pb-2">{estate_title}</h2>
      <p className="text-[#595D62] font-semibold pb-4">{location}</p>
      <p className="text-[#39393980] pb-3">
        {description.slice(0, 70) + "..."}
      </p>
      <p className="text-[#595D62] font-semibold">Area: {area} sq ft</p>
      <p className="text-2xl text-red-400 font-bold py-6">${price}</p>
      <span>
        <Link to={`/item/${id}`}>
          <button className="flex gap-2 px-5 py-4 items-center bg-[#393939] text-white">
            View Property{" "}
            <span className="text-2xl">
              <FiArrowUpRight />
            </span>
          </button>
        </Link>
      </span>
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.object,
};
