import React from "react";
import { Typography, Menu, Empty, List, Avatar } from "antd";
import { Link } from "react-router-dom";
import { EmptyWrapper } from "./MyTicketStyle";
import {
  DollarCircleOutlined,
  EnvironmentFilled,
  UserOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { EVENTS_CLIENT, LOCAL_SERVER } from "../../Config";

const { Title } = Typography;

function MyTicketPresenter({
  IconText,
  user,
  cart,
  Total,
  removeItem,
  removeLoading,
}) {
  return (
    <>
      <Title level={2}>Tickets</Title>
      <Menu
        onClick={removeItem}
        defaultSelectedKeys="available"
        mode="horizontal"
      >
        <Menu.Item key="available">Available (0)</Menu.Item>
        <Menu.Item key="used/expired">Used/Expired (0)</Menu.Item>
      </Menu>

      {user && !cart && (
        <EmptyWrapper>
          <Empty description="Nothing here" style={{ width: "100%" }} />
        </EmptyWrapper>
      )}

      {cart && (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={cart}
          footer={
            <strong style={{ fontWeight: "bolder", fontSize: "18px" }}>
              Total: <span style={{ paddingLeft: "10px" }}>{Total}원</span>
            </strong>
          }
          renderItem={(event) => (
            <List.Item
              key={event.name}
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
                  text={`${event.quantity}명`}
                  key="list-vertical-like-o"
                />,

                <EditOutlined style={{ color: "var(--primary-color)" }} />,

                removeLoading ? (
                  <LoadingOutlined />
                ) : (
                  <DeleteOutlined
                    style={{ color: "var(--primary-color)" }}
                    onClick={() => removeItem(event._id)}
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
                description={event.time}
              />
              {event.description}
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default MyTicketPresenter;
