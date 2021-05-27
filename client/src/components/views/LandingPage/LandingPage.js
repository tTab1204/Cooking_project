import React from "react";
import CardBox from "./Sections/CardBox";
import InfoBox from "./Sections/InfoBox";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Sections/InfoData";

function LandingPage() {
  return (
    <>
      <InfoBox {...homeObjOne} />
      <InfoBox {...homeObjTwo} />
      <CardBox />
      <InfoBox {...homeObjThree} />
    </>
  );
}

export default LandingPage;
