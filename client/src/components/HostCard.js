import React from 'react';
import styled from 'styled-components';
import { getImage } from 'utils/getImage';
import { Link } from 'react-router-dom';
import FollowContainer from 'pages/HostDetailPage/Follow/FollowContainer';
import { Typography, Divider, Row } from 'antd';
import { FOOD_NATION } from 'utils/constants';
import { HOST_CLIENT } from 'utils/config';

const { Title } = Typography;

const HostCard = ({ host, index }) => {
  const { _id, name, food_nation, description, image } = host;

  return (
    <>
      <Link to={`${HOST_CLIENT}/${_id}`} style={removeLinkColor} key={index}>
        <HostCarouselCard>
          <HostCardIcon src={getImage(image[0])} />
          <Title level={3}>
            {name}
            {FOOD_NATION[food_nation]}
          </Title>

          <Divider style={dividerStyle} />
          <FollowContainer detail={host} followers={10} />

          <Row style={rowStyle}>
            <HostCardP>{description}</HostCardP>
          </Row>
        </HostCarouselCard>
      </Link>
    </>
  );
};

const rowStyle = { paddingTop: '10px' };
const removeLinkColor = { color: 'inherit', textDecoration: 'none' };
const dividerStyle = { marginTop: '0', marginBottom: '0' };

const HostCarouselCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 6px 0px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 30%) 0px 3px 6px 0px;
    transition: all 0.3s ease-in-out;
  }
`;

const HostCardIcon = styled.img`
  height: 150px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HostCardP = styled.p`
  height: 1.4rem;
  font-size: 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default HostCard;
