import React from "react";

// membuat komponen dengan props name, price, dan discount
const Product = ({ name, price, discount = 0 }) => {
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && (
        <p>
          <s>Rp {price}</s> ({discount}%)
        </p>
      )}
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
};

class PhoneData extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { name: "iPhone X", price: 10000000, discount: 50 },
        { name: "Oppo Find X", price: 14000000, discount: 30 },
        { name: "Redmi Note X", price: 5000000, discount: 42 },
        { name: "Vivo XYZ", price: 10000000, discount: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.phoneData.map((phone, id) => (
          <Product
            key={id}
            name={phone.name}
            price={phone.price}
            discount={phone.discount}
          ></Product>
        ))}
      </div>
    );
  }
}

////Saat kita membuat komponen di file terpisah, kita harus mengekspornya agar nanti bisa kita impor.
export default PhoneData;
