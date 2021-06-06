import React, { useState, useEffect } from "react";
import MyTicketPresenter from "./MyTicketPresenter";
import Loading from "../../Loading";
import { useDispatch, useSelector } from "react-redux";
import { showCartItems } from "../../../_actions/user_actions";

const IconText = ({ icon, text }) => (
  <div style={{ cursor: "default" }}>
    <span style={{ paddingRight: "5px" }}>{React.createElement(icon)}</span>
    {text}
  </div>
);

function MyTicketContainer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const cart = useSelector((state) => state.user.cartDetail);

  const [Total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);

  const calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
  };

  useEffect(() => {
    let cartItems = [];

    if (user && user.cart) {
      if (user.cart.length > 0) {
        user.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(showCartItems(cartItems, user.cart)).then((response) => {
          calculateTotal(response.payload);
          setLoading(false);
        });
      }
    }
  }, [user]);

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <MyTicketPresenter
          IconText={IconText}
          user={user}
          cart={cart}
          Total={Total}
        />
      )}
    </>
  );
}

export default MyTicketContainer;
