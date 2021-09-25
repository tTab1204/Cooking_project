import React from 'react';
import { Modal } from 'antd';
import {
  ModalContentWrapper,
  InnerModalBox,
  ModalImage,
  LeftDirectionBox,
  RightDirectionBox,
} from '../pages/EventDetailPage/EventDetailStyle';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { LOCAL_SERVER } from '../Config';

const ImageSlideModal = ({
  CurrentSlide,
  prevSlide,
  ShowModal,
  nextSlide,
  handleCancel,
  images,
}) => {
  return (
    <>
      <Modal
        style={{
          paddingBottom: '0px',
          maxWidth: '80vw',
          minWidth: '80vw',
          width: 'auto',
          transformOrigin: '249.159px 183.727px',
        }}
        bodyStyle={{
          padding: '0px',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        visible={ShowModal}
        onCancel={handleCancel}
        footer={null}
      >
        <ModalContentWrapper>
          <InnerModalBox>
            <ModalImage
              alt="example"
              src={`${LOCAL_SERVER}${images[CurrentSlide]}`}
            />
          </InnerModalBox>
          <LeftDirectionBox>
            <LeftOutlined
              style={{
                background: ' rgba(255, 255, 255, 0.3)',
                border: 'none',
                fontSize: '25px',
                padding: '8px',
              }}
              onClick={prevSlide}
            />
          </LeftDirectionBox>
          <RightDirectionBox>
            <RightOutlined
              style={{
                background: ' rgba(255, 255, 255, 0.3)',
                border: 'none',
                fontSize: '25px',
                padding: '8px',
              }}
              onClick={nextSlide}
            />
          </RightDirectionBox>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};

export default ImageSlideModal;
