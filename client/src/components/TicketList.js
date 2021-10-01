import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import IconText from './IconText';
import {
  DollarCircleOutlined,
  EnvironmentFilled,
  UserOutlined,
  DeleteOutlined,
  LoadingOutlined,
  ClockCircleFilled,
} from '@ant-design/icons';
import { getImage } from 'utils/getImage';
import { EVENTS_CLIENT } from 'utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '_actions/user_actions';
import { color } from 'styles/Theme';

const TicketList = ({ total }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.user?.cartDetail);

  const [removeLoading, setRemoveLoading] = useState(false);

  const removeItem = eventId => {
    setRemoveLoading(true);
    dispatch(removeCartItem(eventId)).then(response => {
      setRemoveLoading(false);
    });
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={cart}
      footer={
        <Footer>
          Total: <span>{total}원</span>
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
              src={event.images && getImage(event.images[0])}
            />
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src={event.host && getImage(event.host.image[0])} />
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
  );
};

const Footer = styled.div`
  font-weight: 700;
  font-size: 18px;

  & > span {
    padding-left: 10px;
  }
`;

const TimeContainer = styled.div`
  & > .icon {
    margin-right: 5px;
  }
`;

const CustomedDeleteOutline = styled(DeleteOutlined)`
  color: ${color.error};
`;

export default TicketList;
