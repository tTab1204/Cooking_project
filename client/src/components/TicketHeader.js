import React from 'react';
import { Menu, Typography } from 'antd';
import { getTotal } from 'utils/getTotal';
import { useSelector } from 'react-redux';

const { Title } = Typography;

const TicketHeader = () => {
  const cart = useSelector(state => state.user?.cartDetail);
  const history = useSelector(state => state.user?.userData?.history);

  return (
    <>
      <Title level={2} style={titleStyle}>
        Tickets
      </Title>
      <Menu defaultSelectedKeys="available" mode="horizontal">
        <Menu.Item key="available">Available ({getTotal(cart)})</Menu.Item>
        <Menu.Item key="used/expired">
          Used/Expired ({history.length})
        </Menu.Item>
      </Menu>
    </>
  );
};

const titleStyle = {
  marginTop: '2rem',
};

export default TicketHeader;
