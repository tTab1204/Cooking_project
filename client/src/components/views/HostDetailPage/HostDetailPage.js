import React, { useState, useEffect } from "react";
import HostCard from "./Sections/HostCard";
import { Row, Col, Tabs } from "antd";
import Axios from "axios";
//import HostTabs from "./Sections/HostTabs";
import { Route } from "react-router-dom";
import Auth from "../../../hoc/auth";
import { useRecoilState } from "recoil";
import { hostDetailState } from "../../../atoms/atoms";

const { TabPane } = Tabs;

function HostDetailPage({ match, history }) {
  const hostsId = match.params.hostsId;

  // const [DetailHost, setDetailHost] = useState({});
  const [DetailHost, setDetailHost] = useRecoilState(hostDetailState);

  useEffect(() => {
    Axios.get(`/api/hosts/hosts_by_id?id=${hostsId}&type=single`)
      .then((response) => {
        setDetailHost(response.data.host[0]);
      })
      .catch((err) => alert(err));
  }, []);

  const onHandleTab = (key) => {
    history.push(`${match.url}/${key}`);
  };

  return (
    <>
      <div className="app">
        <Row gutter={24}>
          {/* ---------------- Show Main Card ------------------ */}
          <HostCard detail={DetailHost} />
          {/* ---------------- Show Main Card ------------------ */}
          <Col className="gutter-row" xs={24} md={17}>
            <Tabs defaultActiveKey="events" onChange={onHandleTab}>
              {/* Events */}
              <TabPane tab="Events" key="events"></TabPane>

              {/* Reviews */}
              <TabPane tab="Reviews" key="reviews"></TabPane>

              {/* Followers */}
              <TabPane tab="Followers" key="followers">
                {/* <Followers /> */}
              </TabPane>
            </Tabs>
          </Col>
          <Route
            exact
            path={`${match.url}/:tab`}
            component={Auth(HostTabs, null)}
          />
          <Route
            exact
            path={match.url} // match.url === rooms
            render={() => <h3>탭을 선택해주세오.</h3>}
          />
        </Row>
      </div>
    </>
  );
}

export default HostDetailPage;

function HostTabs({ match }) {
  console.log("match.params.tab", match.params.tab);
  return (
    <div>
      <h2>{`${match.params.roomId} 탭을 선택하셨습니다.`}</h2>;
    </div>
  );
}
