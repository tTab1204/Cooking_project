import React, { useState } from 'react';
import { Row } from 'antd';
import EventImage from 'components/EventImage';
import ImageSlideModal from 'components/ImageSlideModal/ImageSlideModal';
import EventDescription from 'components/EventDescription';
import MenuImages from 'components/MenuImages';
import PurchaseButton from 'components/PurchaseButton';

// ---------------------------- CSS-in-JS --------------------------- //

// ----------------------------------------------------------------------//

function EventDetailPresenter({
  DetailEvent,
  addToCartHandler,
  onQuantityChange,
}) {
  // Modal
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [ShowModal, setShowModal] = useState(false);

  const handleModalOpen = (targetedImage, i) => {
    setShowModal(true);
    setCurrentSlide(i);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  // Image Slider
  const nextSlide = () => {
    if (CurrentSlide >= images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(CurrentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (CurrentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(CurrentSlide - 1);
    }
  };

  const { images, writer } = DetailEvent;

  return (
    <>
      {images && writer && (
        <div>
          <Row style={{ backgroundColor: 'white' }}>
            <EventImage images={images} handleModalOpen={handleModalOpen} />
            <EventDescription eventDetail={DetailEvent} />
          </Row>
          <MenuImages images={images} handleModalOpen={handleModalOpen} />
          <PurchaseButton
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

export default EventDetailPresenter;
