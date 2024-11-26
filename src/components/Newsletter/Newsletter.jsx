import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="px-6 lg:px-14">
      <div className="border-2 bg-gray-300 p-4 rounded-2xl bg-opacity-20 ">
        <div className="newsLetterBg shadow-lg flex flex-col justify-center items-center gap-6 text-center p-5">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-gray-400">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-gradient-to-r from-red-200 font-bold via-red-300 to-yellow-200 hover:bg-gradient-to-bl">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
