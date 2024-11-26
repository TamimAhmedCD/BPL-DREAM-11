import fotterLogo from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="pt-10 bg-slate-900">
      <div className="flex justify-center">
        <img src={fotterLogo} alt="" />
      </div>
      <footer className="footer bg-slate-900 px-6 lg:px-14 py-8 flex flex-col lg:flex-row justify-between mt-10">
        <nav>
          <h6 className="text-white font-bold">About Us</h6>
          <a className="link link-hover text-gray-400">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </a>
        </nav>
        <nav>
          <h6 className=" font-bold text-white">Quick Links</h6>
          <a className="link link-hover text-gray-400">About us</a>
          <a className="link link-hover text-gray-400">Contact</a>
          <a className="link link-hover text-gray-400">Jobs</a>
          <a className="link link-hover text-gray-400">Press kit</a>
        </nav>
        <form>
          <h6 className="footer-title text-white">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-gradient-to-r from-red-200 font-bold via-red-300 to-yellow-200 hover:bg-gradient-to-bl rounded-none rounded-r-md">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
