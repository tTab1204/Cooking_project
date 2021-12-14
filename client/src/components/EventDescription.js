import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/Theme';
import { Link } from 'react-router-dom';
import { getGoogleMapLink } from 'utils/getGoogleMapLink';
import { HOST_CLIENT, LOCAL_SERVER } from 'utils/config';
import {
  Card,
  Col,
  Typography,
  Divider,
  Descriptions,
  Avatar,
  Tag,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { isExpired } from 'utils/getRemainDay';
import { ROUTES } from 'routes/routes';

const { Title } = Typography;

const EventDescription = ({ eventDetail }) => {
  const { name, host, time, location, description, date } = eventDetail;

  return (
    <Col sm={24} md={10}>
      <CustomedCard>
        <CardHeader>
          <Title level={3}>{name}</Title>
          {isExpired(date) && <Tag>Event Ended</Tag>}
        </CardHeader>
        <Divider />
        <Descriptions column={1} colon={false}>
          <Descriptions.Item label="Host" style={gridStyle}>
            <DescriptionContentContainer>
              <DescriptionContentWrapper>
                <Link to={`${ROUTES.HOST.MAIN}/${host._id}`}>{host.name}</Link>
                <DescriptionFollowers>
                  <CustomedUserOutlined />
                  <Typography>4.8 (150)</Typography>
                </DescriptionFollowers>
              </DescriptionContentWrapper>
              <Avatar src={`${LOCAL_SERVER}${host.image}`} size="large" />
            </DescriptionContentContainer>
          </Descriptions.Item>

          <Descriptions.Item label="Time" style={gridStyle}>
            <DescriptionContentContainer>
              <DescriptionContentWrapper>{time}</DescriptionContentWrapper>
            </DescriptionContentContainer>
          </Descriptions.Item>

          <Descriptions.Item label="Location" style={gridStyle}>
            <DescriptionContentContainer>
              <DescriptionContentWrapper>
                {location}
                <br />
                <a target="_blank" href={getGoogleMapLink(location)}>
                  View Map
                </a>
              </DescriptionContentWrapper>
            </DescriptionContentContainer>
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Typography>{description}</Typography>
      </CustomedCard>
    </Col>
  );
};

const CardHeader = styled.div`
  & > span {
    font-weight: 700;
  }
`;

const DescriptionContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > .ant-avatar {
    width: 40px;
    height: 40px;
  }
`;

const DescriptionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 12px;

  & > a {
    color: ${color.green_2};
  }
`;

const DescriptionFollowers = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;

  & > .ant-typography {
    white-space: nowrap;
  }
`;

const CustomedCard = styled(Card)`
  height: 100%;

  & > & > .ant-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  & > .ant-card-body > .ant-divider {
    margin: 16px 0px;
  }

  & > .ant-card.body > .ant-avatar {
    white-space: pre-wrap;
  }
`;

const CustomedUserOutlined = styled(UserOutlined)`
  margin-right: 4px;
  color: ${color.green_2};
`;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
};

export default EventDescription;
