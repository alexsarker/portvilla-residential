import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [newUser, setNewUser] = useState(user);
  console.log(user);

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const updatedName = form.get("name");
    const email = form.get("email");
    const updatedPhoto = form.get("photo");
    console.log(updatedName, email, updatedPhoto);
  };

  return (
    <div>
      <Helmet>
        <title>PortVilla | Profile</title>
      </Helmet>
      <div className="hero pt-10 pb-56" data-aos="zoom-out-down">
        <div className="py-12 px-16 border text-black">
          <div className="text-center pb-4">
            <h1 className="text-4xl font-medium pb-4">Profile</h1>
          </div>
          <div className="avatar flex justify-center pb-6">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} alt="User avatar" />
            </div>
          </div>
          <div className="card w-96">
            <form onSubmit={handleUpdate}>
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">Name</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-none">
                  <input
                    type="text"
                    name="name"
                    className="grow text-sm"
                    placeholder="Name"
                    value={newUser.displayName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, displayName: e.target.value })
                    }
                  />
                </label>
              </div>
              {/* Email */}
              <div className="form-control py-2">
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
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Photo URL
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-none">
                  <input
                    type="url"
                    name="photo"
                    className="grow text-sm"
                    placeholder="https:/"
                    value={newUser.photoURL}
                    onChange={(e) =>
                      setNewUser({ ...newUser, photoURL: e.target.value })
                    }
                  />
                </label>
              </div>

              {/* button */}
              <div className="form-control mt-10">
                <button className="btn bg-black text-white rounded-none hover:bg-[#6A9093]">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
