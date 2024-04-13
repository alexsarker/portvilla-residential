const Profile = () => {
  return (
    <div className="hero pt-10 pb-56">
      <div className="py-12 px-16 border text-black">
        <div className="text-center pb-4">
          <h1 className="text-4xl font-medium pb-4">Profile</h1>
        </div>
        <div className="avatar flex justify-center pb-6">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card w-96">
          <form>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-none">
                <input
                  type="text"
                  className="grow text-sm"
                  placeholder="Name"
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
                placeholder="Email"
                className="input input-bordered rounded-none text-sm"
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
                  className="grow text-sm"
                  placeholder="https:/"
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
  );
};

export default Profile;
