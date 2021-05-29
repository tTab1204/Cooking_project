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
import { useMotionValue, useTransform } from "framer-motion";

const CardBox = () => {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const rotateX = useTransform(y, [-100, 100], [30, -30]);
  // const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CarouselCard
          // style={{ x, y, rotateX, rotateY, z: 100 }}
          // drag
          // dragElastic={0.16} // 얼마나 드래그 할 것인지를 결정
          // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          // whileTap={{ cursor: "grabbing" }}
          >
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
            <CardH2>파티를 위한 주방!</CardH2>
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
