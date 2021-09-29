import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { LOCAL_SERVER } from 'utils/config';

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

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InnerModalBox = styled.div`
  min-width: auto;
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
`;

const ModalImage = styled.img`
  object-fit: contain;
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
`;

const LeftDirectionBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
`;

export const RightDirectionBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
`;

export default ImageSlideModal;
