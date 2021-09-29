import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card, Typography } from 'antd';
import { LOCAL_SERVER } from 'utils/config';

const { Title } = Typography;

const MenuImages = ({ images, handleModalOpen }) => {
  return (
    <MenuContainer>
      <Title level={3}>Menu</Title>
      <Row gutter={[12, 12]}>
        {images.map((image, index) => (
          <Col key={index} lg={6} md={12} sm={24}>
            <CustomedCard
              hoverable={true}
              cover={
                <MenuImg
                  alt="event_menu_images"
                  src={`${LOCAL_SERVER}${image}`}
                  onClick={() => handleModalOpen(image, index)}
                />
              }
            />
          </Col>
        ))}
      </Row>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const CustomedCard = styled(Card)`
  min-width: auto;
  width: auto;
  border: none;

  & > .ant-card-body {
    padding: 0;
  }
`;

const MenuImg = styled.img`
  height: 200px;

  @media screen and (max-width: 975px) {
    height: 300px;
  }
`;

export default MenuImages;
