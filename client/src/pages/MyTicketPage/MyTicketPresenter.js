import React from 'react';
import styled from 'styled-components';
import { Typography, Menu, Empty, List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { EmptyWrapper } from './MyTicketStyle';
import {
  DollarCircleOutlined,
  EnvironmentFilled,
  UserOutlined,
  DeleteOutlined,
  LoadingOutlined,
  ClockCircleFilled,
} from '@ant-design/icons';
import { EVENTS_CLIENT, LOCAL_SERVER } from 'utils/config';

const { Title } = Typography;

function MyTicketPresenter({
  ShowTotal,
  IconText,
  cart,
  Total,
  removeItem,
  removeLoading,
  goShippingPage,
}) {
  return (
    <>
      <Title level={2} style={titleStyle}>
        Tickets
      </Title>
      <Menu defaultSelectedKeys="available" mode="horizontal">
        <Menu.Item key="available">Available (0)</Menu.Item>
        <Menu.Item key="used/expired">Used/Expired (0)</Menu.Item>
      </Menu>

      {!ShowTotal && (
        <EmptyWrapper>
          <Empty description="Nothing here" />
        </EmptyWrapper>
      )}

      {ShowTotal && cart && (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={cart}
          footer={
            <Footer>
              Total: <span>{Total}원</span>
            </Footer>
          }
          renderItem={(event, index) => (
            <List.Item
              actions={[
                <IconText
                  icon={EnvironmentFilled}
                  text={event.location}
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={DollarCircleOutlined}
                  text={`${event.price * event.quantity}원`}
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={UserOutlined}
                  text={`${event.quantity}매`}
                  key="list-vertical-like-o"
                />,

                removeLoading ? (
                  <LoadingOutlined />
                ) : (
                  <CustomedDeleteOutline
                    key={index}
                    onClick={() => removeItem(event._id, index)}
                  />
                ),
              ]}
              extra={
                <img
                  width={250}
                  height={150}
                  alt="logo"
                  src={event.images && `${LOCAL_SERVER}${event.images[0]}`}
                />
              }
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={event.host && `${LOCAL_SERVER}${event.host.image[0]}`}
                  />
                }
                title={
                  <Link to={`${EVENTS_CLIENT}/${event._id}`}>{event.name}</Link>
                }
                description={
                  <TimeContainer>
                    <ClockCircleFilled className="icon" />
                    <span>{event.time}</span>
                  </TimeContainer>
                }
              />
              {event.description}
            </List.Item>
          )}
        />
      )}

      {ShowTotal && cart && (
        <ButtonContainer>
          <Button type="primary" size="large" onClick={goShippingPage}>
            Check Out
          </Button>
        </ButtonContainer>
      )}
    </>
  );
}

const Footer = styled.div`
  font-weight: 700;
  font-size: 18px;

  & > span {
    padding-left: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    width: 80%;
    margin-top: 2rem;
  }
`;

const TimeContainer = styled.div`
  & > .icon {
    margin-right: 5px;
  }
`;

const CustomedDeleteOutline = styled(DeleteOutlined)`
  color: red;
`;

const titleStyle = {
  marginTop: '2rem',
};

export default MyTicketPresenter;
