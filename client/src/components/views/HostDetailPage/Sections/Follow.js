import React, { useState, useEffect } from "react";
import { Col, Statistic, Row, Button } from "antd";
// import Loading from "../../../Loading";
//import Ratings from "./Ratings";
import Axios from "axios";

import {
  LoadingOutlined,
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import {
  FollowBox,
  LikeBox,
  FollowAndRatingsBox,
} from "../../HostPage/Sections/HostPageStyle";

function Follow({ detail, url }) {
  // Follow
  const [FollowNumber, setFollowNumber] = useState(0);
  const [Followed, setFollowed] = useState(false);
  const [loading, setloading] = useState(true);

  // Likes
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);

  const userFrom = localStorage.getItem("userId");
  const hostId = detail._id;
  const hostName = detail.name;

  const variables = {
    userFrom: userFrom,
    hostId: hostId,
    hostName: hostName,
  };

  let likeVariables = {};

  likeVariables = {
    hostId: hostId,
    userId: userFrom,
  };

  useEffect(() => {
    Axios.post("/api/follow/followNumber", variables).then((response) => {
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

  return (
    <>
      {detail && (
        <div>
          {/* Follow */}

          {loading && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LoadingOutlined />
            </div>
          )}
          {!loading && (
            <FollowAndRatingsBox>
              <FollowBox>
                <Statistic
                  title="Followers"
                  prefix={<UserOutlined />}
                  value={FollowNumber}
                />
              </FollowBox>
              <LikeBox>
                <Statistic
                  title="Likes"
                  prefix={<LikeOutlined />}
                  value={FollowNumber}
                />
              </LikeBox>
            </FollowAndRatingsBox>
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
