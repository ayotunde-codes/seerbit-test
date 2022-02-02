import { capitalize, formatMoney } from "../Helper";
// import image from "../assets/img/image1.png";
import cart from "../assets/svg/cart.svg";
import heart from "../assets/svg/heart.svg";
import { useContext, useEffect, useState } from "react";
import { TotalAmountContext } from "../context";

const IndividualCard = ({ productName, price, image }) => {
  const { totalAmount, setTotalAmount } = useContext(TotalAmountContext);
  const [state, updateState] = useState({
    like: false,
    cart: false,
  });
  const setState = (props) => {
    updateState((oldState) => ({
      ...oldState,
      ...props,
    }));
  };
  useEffect(() => {
    if (state.cart) {
      setTotalAmount(totalAmount + price);
    } else if (!state.cart && totalAmount > 0) {
      setTotalAmount(totalAmount - price);
    }
  }, [state.cart]);

  return (
    <div className="card-container">
      <div className="top-area">
        <img src={image} alt="adele top" className="product-image" />
      </div>
      <div className="bottom-area">
        <div className="flex-container margin-bottom">
          <div className="product-name">{capitalize(productName)}</div>
          <img
            src={cart}
            alt=""
            className={`${state.cart ? "svg-cart" : "svg"}`}
            onClick={() => {
              setState({ cart: !state.cart });
            }}
          />
        </div>
        <div className="flex-container">
          <div className="price">${formatMoney(price)}</div>
          <img
            src={heart}
            alt=""
            className={`${state.like ? "svg-heart" : "svg"}`}
            onClick={() => {
              setState({ like: !state.like });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default IndividualCard;
