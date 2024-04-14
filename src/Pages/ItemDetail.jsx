import { Helmet } from "react-helmet-async";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ItemDetail = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  const itemId = item?.id;
  const itemStatus = item?.status;
  const itemSegment = item?.segment_name;
  const itemImage = item?.image;
  const itemTitle = item?.estate_title;
  const itemDescription = item?.description;
  const itemFacilities = item?.facilities;
  const itemArea = item?.area;
  const itemLocation = item?.location;
  const itemPrice = item?.price;

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>PortVilla | Item Detail</title>
      </Helmet>
      <div className="flex justify-center mb-24" data-aos="flip-right">
        <div className="grid lg:grid-flow-col gap-16 mt-12 p-10 lg:p-0">
          <div>
            <img className="max-h-[600px]" src={itemImage} alt="item Cover" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid gap-6">
              <div className="flex  justify-between items-center">
                <span className="text-white bg-red-600 px-4 py-1">
                  {itemStatus}
                </span>
                <p className="text-xl">{itemSegment}</p>
              </div>
              <h1 className="text-4xl font-bold">{itemTitle}</h1>
              <hr />
              <p className="text-xl font-medium">{itemId}</p>
              <hr />
              <p className="text-[#131313B2]">
                <span className="font-bold text-black">Description : </span>
                {itemDescription}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-bold">Facilities : </p>
                {itemFacilities.map((facility, idx) => (
                  <div key={idx}>
                    <p className="px-4 py-2 text-[#6A9093] border">
                      {facility}
                    </p>
                  </div>
                ))}
              </div>
              <hr />
              <div className="grid grid-cols-2 gap-10">
                <p className="text-[#131313B2]">Area :</p>
                <p className="font-bold">{itemArea} sq ft</p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <p className="text-[#131313B2]">Location :</p>
                <p className="font-bold">{itemLocation}</p>
              </div>
              <div className="flex justify-between items-center pt-10">
                <h1 className="text-red-400 text-4xl font-bold">
                  <span className="text-black text-4xl font-bold">Price :</span>{" "}
                  ${itemPrice}
                </h1>
                <span>
                  <Link to="/">
                    <button className="flex gap-2 px-5 py-4 items-center bg-[#393939] text-white">
                      <span className="text-2xl">
                        <FiArrowLeft />
                      </span>
                      Back{" "}
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
