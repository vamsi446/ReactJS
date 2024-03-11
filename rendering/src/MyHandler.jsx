import React, { useState } from "react";
function MyHandler() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, useShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    useShipping(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea placeholder="Enter Delivery Instructions" value={comment} onChange={handleCommentChange} />
      <p>Name: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment : {payment}</p>

      <label >
        <input type="radio" value="Pick Up" checked = {shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick Up
      </label><br/>
      <label >
        <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyHandler;
