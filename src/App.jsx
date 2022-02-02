// import { useState } from 'react'
import "./styles/less/index.less";

import { data } from "./data";
import { Footer, Header, IndividualCard } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="card-case">
          {data.map((item) => {
            return (
              <IndividualCard
                price={item.price}
                productName={item.productName}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
