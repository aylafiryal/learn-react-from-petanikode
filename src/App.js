import React from "react";
import "./App.css";
import { render } from "@testing-library/react";

// var phoneData = [
//   { name: "iPhone X", price: 10000000, discount: 50 },
//   { name: "Oppo Find X", price: 14000000, discount: 30 },
//   { name: "Redmi Note X", price: 5000000, discount: 42 },
//   { name: "Vivo XYZ", price: 10000000, discount: 0 },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:8000/test")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  // membuat komponen dengan props name, price, dan discount
  // Product({ name, price, discount = 0 }) {
  //   return (
  //     <div>
  //       <h2>{name}</h2>
  //       {discount > 0 && (
  //         <p>
  //           <s>Rp {price}</s> ({discount}%)
  //         </p>
  //       )}
  //       <p>
  //         <b>
  //           Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
  //         </b>
  //       </p>
  //       <hr />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <h1>{this.state.apiResponse}</h1>
        {/* {phoneData.map((phone, id) => (
          <Product
            key={id}
            name={phone.name}
            price={phone.price}
            discount={phone.discount}
          ></Product>
        ))} */}
      </div>
    );
  }
}

export default App;
