import React, { useState } from "react";
import { Row, Col, Typography, Card, Avatar, Divider, Statistic } from "antd";
import Axios from "axios";
import { LikeOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;

function HostPage() {
  const [Hosts, setHosts] = useState([]);

  return (
    <div className="app">
      <Title level={1}>Hosts</Title>
      <Row gutter={[16, 16]} type="flex" style={{ margin: "-16px 16px 16px" }}>
        <Col xl={8} md={12} xs={24} style={{ padding: "16px" }}>
          <Card hoverable={true}>
            <Row>
              <Col xs={10} md={24}>
                <Meta
                  style={{ display: "flex", justifyContent: "center" }}
                  avatar={
                    <Avatar
                      style={{ width: "150px", height: "150px" }}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  }
                />
                <Col
                  xs={14}
                  md={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ paddingTop: "10px" }}>
                    <Title level={2} style={{ marginBottom: "0px" }}>
                      Yume Ga Arukara
                    </Title>
                    <div>
                      <img src="/static/media/JP.d4c61b71.svg" alt="Japan" />
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
            <Divider />
            <Row>
              <div className="host-bottom-card ">
                <div className="host-bottom-card-piece">
                  <Col span={12}>
                    <Statistic title="Followers" value={"336"} />
                  </Col>
                </div>

                <div className="host-bottom-card-piece">
                  <Col span={12}>
                    <Statistic title="Ratings" value={"4.95(180)"} />
                  </Col>
                </div>
              </div>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              Please visit https://www.yumegaarukara.com for current ordering
              info!
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HostPage;
