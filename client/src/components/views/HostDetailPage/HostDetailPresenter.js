import React from "react";
import { Row } from "antd";
import HostTabsContainer from "./HostTabs/HostTabsContainer";
import HostCardPresenter from "./HostCard/HostCardPresenter";

const HostDetailPresenter = ({ url, hostId, history, DetailHost, userId }) => {
  return (
    <>
      <Row gutter={24}>
        {/* ---------------- Show Main Card ------------------ */}
        <HostCardPresenter url={url} detail={DetailHost} userId={userId} />
        {/* ---------------- Show Main Card ------------------ */}

        <HostTabsContainer
          url={url}
          history={history}
          hostId={hostId}
          detail={DetailHost}
        />
      </Row>
    </>
  );
};

export default HostDetailPresenter;
