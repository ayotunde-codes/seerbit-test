import { useContext, useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import search from "../assets/svg/search.svg";
import shopbag from "../assets/svg/shopbag.svg";
import { TotalAmountContext } from "../context";
import { formatMoney } from "../Helper";
const Header = () => {
  const { totalAmount, setTotalAmount } = useContext(TotalAmountContext);
  //   state to change the search icon  and input
  const [searchActive, setSearchActive] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    //   this the function to handle color change on scroll
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header className={`${colorChange ? "header-scroll" : "header"}`}>
      <div className="page-container">
        <div
          className={`${colorChange ? "header-case-scroll" : "header-case"}`}
        >
          <div className="socials">
            <p className="darktext">Follow - </p>
            <a className="nav-link-dark">Fb.</a>
            <a className="nav-link-dark">Tw.</a>
            <a className="nav-link-dark">In.</a>
          </div>
          <div className="logo">
            <img src={logo} className="logo-img" alt="" />
          </div>
          <div className="cart-notification">
            <p
              className={`${
                searchActive ? "darktext none-mobile" : "darktext"
              }`}
            >
              $ {formatMoney(totalAmount)}
            </p>
            <div className="search-case">
              <div
                className="search-icon-case"
                onClick={() => setSearchActive((searchActive) => !searchActive)}
              >
                <img src={search} alt="" className="search-icon" />
              </div>

              <input
                className={`${
                  searchActive ? "search-input-active" : "search-input"
                }`}
                placeholder="Search product"
              />
            </div>
            <div className="notifications">
              <div className="notification">4</div>
              <div className="notification-case">
                <img src={shopbag} alt="" className="shop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
