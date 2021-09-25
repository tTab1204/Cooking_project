import React from "react";
import HostEventsContainer from "../HostEvents/HostEventsContainer";
import ReviewsContainer from "../Reviews/ReviewsContainer";
import FollowersContainer from "../Followers/FollowersContainer";
import { Tabs, Col } from "antd";

const { TabPane } = Tabs;

function HostTabsContainer({
  refreshFunction,
  AllReviews,
  onHandleTab,
  hostId,
  detail,
  showReviews,
  pageEnd,
}) {
  return (
    <>
      <Col className="gutter-row" xs={24} md={17}>
        <Tabs
          defaultActiveKey="events"
          onChange={onHandleTab}
          style={{ background: "rgb(255, 255, 255)", padding: "20px" }}
        >
          {/* Events */}
          <TabPane tab="Events" key="events">
            <HostEventsContainer hostId={hostId} />
          </TabPane>

          {/* Reviews */}
          <TabPane tab="Reviews" key="reviews">
            <ReviewsContainer
              refreshFunction={refreshFunction}
              reviewList={AllReviews}
              hostId={hostId}
              showReviews={showReviews}
              detail={detail}
              pageEnd={pageEnd}
            />
          </TabPane>

          {/* Followers */}
          <TabPane tab="Followers" key="followers">
            <FollowersContainer hostId={hostId} />
          </TabPane>
        </Tabs>
      </Col>
    </>
  );
}

export default HostTabsContainer;
