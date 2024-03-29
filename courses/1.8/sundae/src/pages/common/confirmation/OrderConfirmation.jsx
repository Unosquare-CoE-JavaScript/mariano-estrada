import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../../../contexts/OrderDetails";


function OrderConfirmation({ setOrderPhase }) {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => {
      });
  }, []);

  function handleClick() {
    resetOrder();
    setOrderPhase("inProgress");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>thank you</h1>
      <p>Your order number is {orderNumber}</p>
      <p style={{ fontSize: "25%" }}>
        as per our terms and conditions, nothing will happen now
      </p>
      <Button onClick={handleClick}>Create new order</Button>
    </div>
  );
}

export default OrderConfirmation