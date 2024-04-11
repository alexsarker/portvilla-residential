import Contact from "./Contact";

const Footer = () => {
  return (
    <div>
      <Contact></Contact>
      <footer className="footer p-20 bg-base-100 text-base-content">
        <aside>
          <h2 className="text-4xl font-bold">PortVilla</h2>
          <p className="max-w-96 text-[#C8C8C8] pt-8">
            They key difference between ordinary and special. No matter the
            season, our spaces are as nuanced as the lifestyles they reflect, do
            not just dream it.
          </p>
        </aside>
        <nav>
          <h6 className="text-3xl font-bold text-black pb-6">COMPANY</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-3xl font-bold text-black pb-6">VISIT US</h6>
          <a className="link link-hover">Address</a>
          <a className="link link-hover">Website</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Term & Condition</a>
        </nav>
        <nav>
          <h6 className="text-3xl font-bold text-black pb-6">CONNECT</h6>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
