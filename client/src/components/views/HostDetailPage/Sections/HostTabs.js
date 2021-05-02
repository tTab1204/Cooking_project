import React from "react";
// import Events from "./Events";
// import Reviews from "./Reviews";
// import Followers from "./Followers";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function HostTabs({ match }) {
  console.log("match.params.tab", match.params.tab);
  return (
    <div>
      <h2>{`${match.params.roomId} 탭을 선택하셨습니다.`}</h2>;
    </div>
  );
}

export default HostTabs;
