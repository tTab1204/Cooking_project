import React from "react";
import BottomBox from "./Sections/BottomBox";
import MiddleBox from "./Sections/MiddleBox";
import { Typography } from "antd";

const { Title } = Typography;

const main_breadCrumb_style = {
  background: `linear-gradient(to bottom, rgba(0,0,0,0.4)
                39%, rgba(0,0,0,0.5)
                41%, rgba(0,0,0,0.65)
                100%),
                url('https://source.unsplash.com/1600x900/?cooking'), #1c1c1c`,
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center, center",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  paddingLeft: "24px",
  paddingRight: "24px",
};

function LandingPage() {
  return (
    <>
      <div style={main_breadCrumb_style}>
        <Title level={1} style={{ color: "white" }}>
          Find new Events on Cooking!
        </Title>
      </div>
      {/* MiddleBox */}
      <MiddleBox />
    </>
  );
}

export default LandingPage;
