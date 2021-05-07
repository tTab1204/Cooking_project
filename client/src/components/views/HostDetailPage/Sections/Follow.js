import React, { useState, useEffect } from "react";
import { Col, Statistic, Row, Button } from "antd";
import Ratings from "./Ratings";
import Axios from "axios";

function Follow({ detail, url }) {
  const [FollowNumber, setFollowNumber] = useState(0);
  const [Followed, setFollowed] = useState(false);

  const userFrom = detail.userFrom;
  const hostId = detail._id;
  const hostName = detail.name;

  const variables = {
    userFrom: userFrom,
    hostId: hostId,
    hostName: hostName,
  };

  useEffect(() => {
    Axios.post("/api/follow/followNumber", variables).then((response) => {
      setFollowNumber(response.data.followNumber);
    });

    Axios.post("/api/follow/followed", variables).then((response) => {
      if (response.data.success) {
        setFollowed(response.data.followed);
      } else alert("정보를 가져오는 데 실패했습니다.");
    });
  }, [detail]);

  const onClickFollow = () => {
    if (Followed) {
      Axios.post("/api/follow/removeFollow", variables).then((response) => {
        if (response.data.success) {
          setFollowNumber(FollowNumber - 1);

          setFollowed(!Followed);
        } else {
          alert("Follow 리스트에서 지우는걸 실패했습니다.");
        }
      });
    } else {
      Axios.post("/api/follow/addFollow", variables).then((response) => {
        if (response.data.success) {
          setFollowNumber(FollowNumber + 1);

          setFollowed(!Followed);
        } else {
          alert("Favorite 리스트에서 추가하는데에 실패했습니다.");
        }
      });
    }
  };

  return (
    <>
      {detail && (
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
          {url !== "/hosts" && (
            <Row
              style={{ paddingTop: "10px", textAlign: "center", width: "100%" }}
            >
              <Button
                onClick={onClickFollow}
                type={Followed ? "none" : "primary"}
                style={{ width: "100%" }}
              >
                {Followed ? "Unfollow" : "Follow"}
              </Button>
            </Row>
          )}
        </div>
      )}
    </>
  );
}

export default React.memo(Follow);
