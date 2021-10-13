import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row, Typography } from 'antd';
import { getImage } from 'utils/getImage';

const { Title } = Typography;

const KitchenImages = ({ images }) => {
  return (
    <>
      <Title level={2}>Images</Title>
      <ImagesContainer>
        <Row gutter={[8, 8]}>
          {images &&
            images.map((image, index) => (
              <Col key={index} className="gutter-row" lg={6} md={12} sm={24}>
                <CustomedCard
                  hoverable={true}
                  bodyStyle={cardBodyStyle}
                  cover={
                    <img alt="kitchen_detail_images" src={getImage(image)} />
                  }
                />
              </Col>
            ))}
        </Row>
      </ImagesContainer>
    </>
  );
};

const ImagesContainer = styled.div`
  width: 100%;
`;

const CustomedCard = styled(Card)`
  min-width: auto;
  width: auto;
  border: none;
`;

const cardBodyStyle = {
  padding: 0,
};

export default KitchenImages;
