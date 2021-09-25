import React from 'react';
import { Row, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
  HostCardContainer,
  HostCardWrapper,
  HostCarouselCard,
  HostCardIcon,
  HostCardP,
} from './HostStyle';
import { LOCAL_SERVER } from 'utils/config';
import FollowContainer from '../HostDetailPage/Follow/FollowContainer';

const { Title } = Typography;

const removeLinkColor = { color: 'inherit', textDecoration: 'none' };

function HostPresenter({ Hosts, FOOD_NATION, userId, url }) {
  return (
    <>
      <Title level={1} style={{ marginTop: '20px' }}>
        Hosts
      </Title>
      <HostCardContainer>
        <HostCardWrapper>
          {Hosts.map((host, index) => (
            <Link to={`/hosts/${host._id}`} style={removeLinkColor} key={index}>
              <HostCarouselCard>
                <HostCardIcon src={`${LOCAL_SERVER}${host.image[0]}`} />

                <Title level={3}>
                  {' '}
                  {host.name}
                  {FOOD_NATION[host.food_nation]}
                </Title>

                <Divider style={{ marginTop: '0', marginBottom: '0' }} />

                {/* Follow and Likes */}
                <FollowContainer userFrom={userId} detail={host} url={url} />

                <Row style={{ paddingTop: '10px' }}>
                  <HostCardP>{host.description}</HostCardP>
                </Row>
              </HostCarouselCard>
            </Link>
          ))}
        </HostCardWrapper>
      </HostCardContainer>
    </>
  );
}

export default HostPresenter;
