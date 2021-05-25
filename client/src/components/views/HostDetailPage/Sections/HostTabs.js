import React, { useState, useEffect } from "react";
import Events from "./Events";
import Reviews from "./Reviews";
import Followers from "./Followers";
import Axios from "axios";
import { Tabs, Col } from "antd";

const { TabPane } = Tabs;

function HostTabs({ url, history, hostId, detail }) {
  const API_REIVEWS = "/api/reviews";

  const [AllReviews, setAllReviews] = useState([]);

  const variable = { hostId: hostId };
  // Show All reviews
  const showReviews = async () => {
    try {
      const response = await Axios.post(
        `${API_REIVEWS}/show-reviews`,
        variable
      );

      setAllReviews(response.data.reviews);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    showReviews();
  }, []);

  const onHandleTab = (key) => {
    history.push(`${url}/${key}`);
  };

  const refreshFunction = (newComments) => {
    setAllReviews(AllReviews.concat(newComments));
  };

  return (
    <>
      <Col className="gutter-row" xs={24} md={17}>
        <Tabs defaultActiveKey="events" onChange={onHandleTab}>
          {/* Events */}
          <TabPane tab="Events" key="events">
            <Events hostId={hostId} />
          </TabPane>

          {/* Reviews */}
          <TabPane tab="Reviews" key="reviews">
            <Reviews
              refreshFunction={refreshFunction}
              reviewList={AllReviews}
              hostId={hostId}
              showReviews={showReviews}
              detail={detail}
            />
          </TabPane>

          {/* Followers */}
          <TabPane tab="Followers" key="followers">
            <Followers hostId={hostId} />
          </TabPane>
        </Tabs>
      </Col>
    </>
  );
}

export default HostTabs;
