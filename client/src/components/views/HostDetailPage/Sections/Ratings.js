import React from "react";
import { Col, Statistic } from "antd";

function Ratings() {
  return (
    <div className="host-bottom-card-piece">
      <Col span={12}>
        <Statistic title="Ratings" value={"4.95(180)"} />
      </Col>
    </div>
  );
}

export default Ratings;
