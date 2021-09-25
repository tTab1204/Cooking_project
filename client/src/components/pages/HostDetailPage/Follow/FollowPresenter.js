import React from "react";
import { Statistic, Row, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FollowBox, FollowAndLikeBox } from "./FollowStyle";
import LikesContainer from "../Likes/LikesContainer";

function FollowPresenter({
  detail,
  FollowNumber,
  Followed,
  url,
  onClickFollow,
}) {
  return (
    <>
      <Row style={{ width: "100%" }}>
        <FollowAndLikeBox>
          <FollowBox>
            <Statistic
              title="Followers"
              prefix={<UserOutlined />}
              value={FollowNumber}
            />
          </FollowBox>
          <LikesContainer
            userId={localStorage.getItem("userId")}
            detail={detail}
          />
        </FollowAndLikeBox>

        {url !== "/hosts" && (
          <Row
            style={{ paddingTop: "10px", textAlign: "center", width: "100%" }}
          >
            <Button
              onClick={onClickFollow}
              type={Followed ? "none" : "primary"}
              style={{ width: "100%" }}
            >
              {Followed ? "UnFollow" : "Follow"}
            </Button>
          </Row>
        )}
      </Row>
    </>
  );
}

export default FollowPresenter;
