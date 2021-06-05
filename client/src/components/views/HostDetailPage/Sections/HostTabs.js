import React, { useState, useEffect, useRef } from "react";
import Events from "./Events";
import Reviews from "./Reviews";
import Followers from "./Followers";
import Axios from "axios";
import { Tabs, Col, Button } from "antd";
import Loading from "../../../Loading";

const { TabPane } = Tabs;

function HostTabs({ url, history, hostId, detail }) {
  const API_REIVEWS = "/api/reviews";

  const [loading, setLoading] = useState(false);
  const [AllReviews, setAllReviews] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const pageEnd = useRef();

  // Show All reviews
  const showReviews = async (body) => {
    try {
      const response = await Axios.post(`${API_REIVEWS}/show-reviews`, body);

      const data = await response.data.reviews;

      if (body.loadMore) {
        setAllReviews([...AllReviews, ...data]);
        setLoading(true);
      } else {
        setAllReviews(data);
      }
      // console.log("data: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("pageEnd: ", pageEnd);

  let num = 1;
  // Infinite Scroll
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("entries:", entries[0].isIntersecting);
            num++;
            onLoadMore();
            if (num >= 5) observer.unobserve(pageEnd.current);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
      hostId: hostId,
    };
    showReviews(body);
  }, []);

  const onLoadMore = () => {
    setSkip((prevSkip) => prevSkip + Limit);

    let body = {
      skip: Skip,
      limit: Limit,
      hostId: hostId,
      loadMore: true,
    };

    showReviews(body);
    console.log("Skip: ", Skip);
  };

  const onHandleTab = (key) => {
    history.push(`${url}/${key}`);
  };

  const refreshFunction = (newComments) => {
    setAllReviews(AllReviews.concat(newComments));
  };

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
              onLoadMore={onLoadMore}
              pageEnd={pageEnd}
            />
            {/* <button onClick={onLoadMore} ref={pageEnd}>
              더 보기
            </button> */}
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
