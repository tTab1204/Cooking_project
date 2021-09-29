import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';
import { getImage } from 'utils/getImage';

const EventImage = ({ images, handleModalOpen }) => {
  return (
    <CustomedCol sm={24} md={14}>
      <div>
        <Row>
          <Col span={24}>
            <Card
              hoverable={true}
              bodyStyle={cardBodyStyle}
              cover={
                <MainImgWrapper>
                  <img
                    alt="event_main"
                    src={getImage(images[0])}
                    onClick={() => handleModalOpen(images[0], 0)}
                  />
                </MainImgWrapper>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    </CustomedCol>
  );
};
const CustomedCol = styled(Col)`
  align-items: center;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
  }
`;

const MainImgWrapper = styled.div`
  min-width: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 75%;
  display: flex;
  border: none;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

const cardBodyStyle = {
  padding: '0',
};

export default EventImage;
