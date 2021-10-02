import React from 'react';
import { Tabs, Typography } from 'antd';
import { getTotal } from 'utils/getTotal';
import { useSelector } from 'react-redux';
import TicketList from './TicketList';
import { ticketTabState } from 'atoms/atoms';
import { useRecoilState } from 'recoil';
import UsedTickets from 'components/UsedTickets';
import { color } from 'styles/Theme';
import { ROUTES } from 'utils/routes';

const { TabPane } = Tabs;
const { Title } = Typography;

const TicketTabs = ({ url, history, total }) => {
  const cart = useSelector(state => state.user?.cartDetail);
  const paymentHistory = useSelector(state => state.user?.userData?.history);
  const [, setTicketTab] = useRecoilState(ticketTabState);

  const { AVAILABLE, USED_EXPIRED } = ROUTES.MY_TICKETS;

  const onHandleTab = key => {
    setTicketTab(key);
    history.push(`${url}${key}`);
  };

  return (
    <>
      <Title level={2} style={titleStyle}>
        Tickets
      </Title>
      <Tabs
        defaultSelectedKeys={AVAILABLE}
        onChange={onHandleTab}
        style={tabStyle}
      >
        <TabPane tab={`Available (${getTotal(cart)})`} key={AVAILABLE}>
          <TicketList total={total} />
        </TabPane>

        <TabPane
          tab={`Used/Expired (${paymentHistory.length})`}
          key={USED_EXPIRED}
        >
          <UsedTickets />
        </TabPane>
      </Tabs>
    </>
  );
};

const titleStyle = {
  marginTop: '2rem',
  padding: '0 1rem',
};

const tabStyle = {
  background: `${color.white}`,
  padding: '0.5rem 1rem',
};

export default TicketTabs;
