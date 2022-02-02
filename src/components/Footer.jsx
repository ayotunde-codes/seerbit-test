import logo from "../assets/svg/seerbit.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-flex">
          <img src={logo} alt="" />
          {/* nalinks */}
          <nav className="navlinks-case">
            <a className="nav-link">Shop</a>
            <a className="nav-link">Info</a>
            <a className="nav-link">Service</a>
            <a className="nav-link">Contact</a>
            <a className="nav-link">Privacy Policy</a>
          </nav>
          {/* social links */}
          <nav className="social-links-case">
            <a className="nav-link">Fb</a>
            <a className="nav-link">In</a>
            <a className="nav-link">Yt</a>
            <a className="nav-link">Tw</a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Footer;
