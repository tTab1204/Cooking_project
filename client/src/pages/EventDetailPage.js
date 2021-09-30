import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventImage from 'components/EventImage';
import ImageSlideModal from 'components/ImageSlideModal';
import EventDescription from 'components/EventDescription';
import MenuImages from 'components/MenuImages';
import Loading from 'components/Loading';
import PurchaseButton from 'components/PurchaseButton';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import { successMessage } from 'utils/successMessage';
import { addToCart } from '_actions/user_actions';
import { SHOW_EVENT_DETAIL } from 'utils/api';
import { isExpired } from 'utils/getRemainDay';

function EventDetailPage({ match }) {
  const eventId = match.params.eventId;
  const dispatch = useDispatch();

  const [detailEvent, setDetailEvent] = useState({});
  const [Quantity, setQuantity] = useState(1);
  const [, setShowSuccess] = useState(false);
  const [loading, setloading] = useState(true);
  const [isEventExpired, setIsEventExpired] = useState(false);

  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [ShowModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(SHOW_EVENT_DETAIL(eventId))
      .then(response => {
        setDetailEvent(response.data[0]);
        setloading(false);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setIsEventExpired(isExpired(detailEvent.date));
  }, [detailEvent]);

  const onQuantityChange = label => setQuantity(label.key);

  const addToCartHandler = async e => {
    try {
      const response = await dispatch(addToCart(eventId, Quantity));
      console.log('response: ', response);
      successMessage(setShowSuccess);
    } catch {
      console.error(e);
    }
  };

  const handleModalOpen = (targetedImage, i) => {
    setShowModal(true);
    setCurrentSlide(i);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const nextSlide = () => {
    if (CurrentSlide >= images.length - 1) setCurrentSlide(0);
    else setCurrentSlide(CurrentSlide + 1);
  };

  const prevSlide = () => {
    if (CurrentSlide === 0) setCurrentSlide(images.length - 1);
    else setCurrentSlide(CurrentSlide - 1);
  };

  const { images, writer } = detailEvent;

  return (
    <>
      {loading && <Loading />}
      {!loading && images && writer && (
        <div>
          <Row style={rowStyle}>
            <EventImage images={images} handleModalOpen={handleModalOpen} />
            <EventDescription eventDetail={detailEvent} />
          </Row>
          <MenuImages images={images} handleModalOpen={handleModalOpen} />
          <PurchaseButton
            isEventExpired={isEventExpired}
            addToCartHandler={addToCartHandler}
            onQuantityChange={onQuantityChange}
          />
          <ImageSlideModal
            CurrentSlide={CurrentSlide}
            ShowModal={ShowModal}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            handleCancel={handleCancel}
            images={images}
          />
        </div>
      )}
    </>
  );
}

const rowStyle = {
  backgroundColor: 'white',
};

export default EventDetailPage;
