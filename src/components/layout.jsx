import { useState } from "react";
import { TotalAmountContext } from "../context";

const Layout = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}{" "}
    </TotalAmountContext.Provider>
  );
};
export default Layout;
