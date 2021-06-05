import React, { useState, useEffect } from "react";
import EventDetailPresenter from "./EventDetailPresenter";
import Loading from "../../Loading";
import Axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../_actions/user_actions";

function EventDetailContainer({ match }) {
  const eventId = match.params.eventId;
  const dispatch = useDispatch();

  const [DetailEvent, setDetailEvent] = useState({});
  const [, setShowSuccess] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get(`/api/events/events_by_id?id=${eventId}&type=single`)
      .then((response) => {
        setDetailEvent(response.data.event[0]);
        setloading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const successMessage = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "장바구니에 상품이 담겼습니다!",
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  const addToCartHandler = async (e) => {
    try {
      const response = await dispatch(addToCart(eventId));
      successMessage();
    } catch {
      console.error(e);
    }
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <EventDetailPresenter
          DetailEvent={DetailEvent}
          addToCartHandler={addToCartHandler}
        />
      )}
    </>
  );
}

export default EventDetailContainer;
