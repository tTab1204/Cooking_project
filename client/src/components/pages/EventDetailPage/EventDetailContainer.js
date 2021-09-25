import React, { useState, useEffect } from 'react';
import EventDetailPresenter from './EventDetailPresenter';
import Loading from '../../Loading';
import Axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';

function EventDetailContainer({ match }) {
  const eventId = match.params.eventId;
  const dispatch = useDispatch();

  const [DetailEvent, setDetailEvent] = useState({});
  const [Quantity, setQuantity] = useState(1);
  const [, setShowSuccess] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get(`/api/events/events_by_id?id=${eventId}&type=single`)
      .then((response) => {
        setDetailEvent(response.data[0]);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const successMessage = () => {
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });

    setTimeout(() => {
      message.success({
        content: 'You picked an event. Please check User > MyTicket',
        key,
        duration: 4,
      });
      setShowSuccess(true);
    });
  };
  const onQuantityChange = (label) => {
    setQuantity(label.key);
  };

  const addToCartHandler = async (e) => {
    try {
      const response = await dispatch(addToCart(eventId, Quantity));

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
          onQuantityChange={onQuantityChange}
        />
      )}
    </>
  );
}

export default EventDetailContainer;
