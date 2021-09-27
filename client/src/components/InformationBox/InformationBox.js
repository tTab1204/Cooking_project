import React from 'react';
import styled from 'styled-components';
import { Divider, Typography, Steps } from 'antd';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const InformationBox = ({ page }) => {
  const { introTitle, mainStepTitle, steps } = page;
  const { first, second, third } = steps;

  return (
    <BottomBox>
      {/* First Bottom-Page */}
      <Title level={2}>{introTitle}</Title>

      <Paragraph>
        Grow your brand as a chef, test out your new recipes, and share your
        lovely food with the community. You’re in full control of your
        availability, prices, and rules.
      </Paragraph>
      <Divider />

      {/* Second Bottom-Page */}
      <Title level={2}>{mainStepTitle}</Title>
      <Steps direction="vertical">
        <Step
          status="process"
          title={first.title}
          description={first.description}
        />
        <Step
          status="process"
          title={second.title}
          description={second.description}
        />
        <Step
          status="process"
          title={third.title}
          description={third.description}
        />
      </Steps>
      <Divider />

      {/* Third Bottom-Page */}
      <Title level={2}>Payments made simple</Title>
      <Steps direction="vertical">
        <Step
          status="finish"
          title="No fees"
          description="There’s no cost to sign up, list, and share your kitchen."
        />
        <Step
          status="finish"
          title="Flexible payout models"
          description="Choose a payout model that fits your needs. Share your kitchen at a flat fee or collaborate with a chef and divide the revenue among the hosts."
        />
        <Step
          status="finish"
          title="Get paid quickly"
          description="
Once the event ends, the balance will be available in your dashboard to payout by direct deposit."
        />
      </Steps>
    </BottomBox>
  );
};

export const BottomBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export default InformationBox;
