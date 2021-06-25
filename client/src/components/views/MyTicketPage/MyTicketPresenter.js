import React from 'react';
import { Typography, Menu, Empty, List, Avatar, Button, Affix } from 'antd';
import { Link } from 'react-router-dom';
import { EmptyWrapper } from './MyTicketStyle';
import {
  DollarCircleOutlined,
  EnvironmentFilled,
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { EVENTS_CLIENT, LOCAL_SERVER } from '../../Config';

const { Title } = Typography;

function MyTicketPresenter({ ShowTotal, IconText, cart, Total, removeItem, removeLoading, goShippingPage }) {
  return (
    <>
      <Title level={2} style={{ marginTop: '20px' }}>
        Tickets
      </Title>
      <Menu defaultSelectedKeys='available' mode='horizontal'>
        <Menu.Item key='available'>Available (0)</Menu.Item>
        <Menu.Item key='used/expired'>Used/Expired (0)</Menu.Item>
      </Menu>

      {!ShowTotal && (
        <EmptyWrapper>
          <Empty description='Nothing here' style={{ width: '100%' }} />
        </EmptyWrapper>
      )}

      {ShowTotal && cart && (
        <List
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={cart}
          footer={
            <div>
              <strong style={{ fontWeight: 'bolder', fontSize: '18px' }}>
                Total: <span style={{ paddingLeft: '10px' }}>{Total}원</span>
              </strong>
            </div>
          }
          renderItem={(event, index) => (
            <List.Item
              actions={[
                <IconText icon={EnvironmentFilled} text={event.location} key='list-vertical-like-o' />,
                <IconText
                  icon={DollarCircleOutlined}
                  text={`${event.price * event.quantity}원`}
                  key='list-vertical-like-o'
                />,
                <IconText icon={UserOutlined} text={`${event.quantity}매`} key='list-vertical-like-o' />,

                removeLoading ? (
                  <LoadingOutlined />
                ) : (
                  <DeleteOutlined
                    key={index}
                    style={{ color: 'var(--primary-color)' }}
                    onClick={() => removeItem(event._id, index)}
                  />
                ),
              ]}
              extra={
                <img width={250} height={150} alt='logo' src={event.images && `${LOCAL_SERVER}${event.images[0]}`} />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={event.host && `${LOCAL_SERVER}${event.host.image[0]}`} />}
                title={<Link to={`${EVENTS_CLIENT}/${event._id}`}>{event.name}</Link>}
                description={event.time}
              />
              {event.description}
            </List.Item>
          )}
        />
      )}

      {ShowTotal && cart && (
        <Affix offsetBottom={0} style={{ height: '72px' }}>
          <Button type='primary' size='large' onClick={goShippingPage}>
            결제 진행하기
          </Button>
        </Affix>
      )}
    </>
  );
}

export default MyTicketPresenter;
