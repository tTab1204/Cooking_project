import React, { useState, useEffect } from "react";
import { Col, Statistic, Row, Button } from "antd";
import Ratings from "./Ratings";
import Axios from "axios";

function Follow(props) {
  const [FollowNumber, setFollowNumber] = useState(0);
  const [Followed, setFollowed] = useState(false);

  const userFrom = props.userFrom;
  const hostId = props.detail._id;
  const hostName = props.detail.name;

  const variables = {
    userFrom: userFrom,
    hostId: hostId,
    hostName: hostName,
  };

  useEffect(() => {
    Axios.post("/api/follow/followNumber", variables).then((response) => {
      console.log(response.data);
      setFollowNumber(response.data.followNumber);
    });
  }, []);

  return (
    <div className="host-bottom-card-piece">
      <Row style={{ width: "100%" }}>
        <div className="host-bottom-card ">
          {/* Follow */}
          <Col span={12}>
            <Statistic title="Followers" value={FollowNumber} />
          </Col>

          {/* Ratings */}
          <Ratings />
        </div>
      </Row>
      <Row style={{ paddingTop: "10px", textAlign: "center", width: "100%" }}>
        <Button type="primary" style={{ width: "100%" }}>
          Follow
        </Button>
      </Row>
    </div>
  );
}

export default Follow;
