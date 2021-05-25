import React from "react";
import {
  CardContainer,
  CardWrapper,
  CarouselCard,
  CardIcon,
  CardH2,
  CardP,
} from "./CardStyle";
import Barbeque from "../../../Images/barbeque.svg";
import Chef from "../../../Images/chef.svg";
import Cooking from "../../../Images/cooking.svg";
import { Typography } from "antd";

const { Title } = Typography;

const CardBox = () => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CarouselCard>
            <CardIcon src={Barbeque} />
            <CardH2>이벤트를 찾아보세요!</CardH2>
            <CardP>
              {" "}
              We help reduce your fees and increase your overall revenue.
            </CardP>
          </CarouselCard>

          <CarouselCard>
            <CardIcon src={Chef} />
            <CardH2>최고의 요리사와 함께</CardH2>
            <CardP>
              {" "}
              We help reduce your fees and increase your overall revenue.
            </CardP>
          </CarouselCard>

          <CarouselCard>
            <CardIcon src={Cooking} />
            <CardH2>당신만의 주방을 대여하세요!</CardH2>
            <CardP>
              {" "}
              We help reduce your fees and increase your overall revenue.
            </CardP>
          </CarouselCard>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default CardBox;
