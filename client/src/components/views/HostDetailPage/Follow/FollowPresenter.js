import React, { useState, useEffect } from "react";
import { Statistic, Row, Button } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { FollowBox, FollowAndLikeBox } from "./FollowStyle";
import Axios from "axios";
import LikesContainer from "../Likes/LikesContainer";

function FollowPresenter({ userFrom, detail, url }) {
  const [loading, setloading] = useState(true);
  const [FollowNumber, setFollowNumber] = useState(0);
  const [Followed, setFollowed] = useState(false);

  const variables = {
    userFrom: userFrom,
    hostId: detail._id,
    hostName: detail.name,
  };

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
          alert("Follow 리스트에서 추가하는데에 실패했습니다.");
        }
      });
    }
  };

  useEffect(() => {
    Axios.post("/api/follow/follow-number", variables).then((response) => {
      setFollowNumber(response.data.followNumber);
      setloading(false);
    });

    Axios.post("/api/follow/followed", variables).then((response) => {
      if (response.data.success) {
        setFollowed(response.data.followed);
        setloading(false);
      } else alert("정보를 가져오는 데 실패했습니다.");
    });
  }, []);

  return (
    <>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingOutlined style={{ fontSize: "12px" }} />
        </div>
      )}

      <Row style={{ width: "100%" }}>
        {!loading && (
          <FollowAndLikeBox>
            <FollowBox>
              <Statistic
                title="Followers"
                prefix={<UserOutlined />}
                value={FollowNumber}
              />
            </FollowBox>
            {/* Likes */}
            <LikesContainer />
          </FollowAndLikeBox>
        )}

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
