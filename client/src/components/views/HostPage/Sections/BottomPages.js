import React from "react";
import { Divider, Steps, Typography } from "antd";
const { Step } = Steps;
const { Title, Paragraph } = Typography;

const bottomPageLayout = {
  paddingLeft: "24px",
  paddingRight: "24px",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
};

const renderHostBottom = (
  <div style={bottomPageLayout}>
    {/* First Bottom-Page */}
    <Title level={2}>Why Host an Event?</Title>

    <Paragraph>
      Grow your brand as a chef, test out your new recipes, and share your
      lovely food with the community. You’re in full control of your
      availability, prices, and rules.
    </Paragraph>

    <Divider />

    {/* Second Bottom-Page */}
    <Title level={2}>Hosting in 3 Steps</Title>
    <Steps direction="vertical">
      <Step
        status="process"
        title="Apply"
        description="Apply to become a host. We will perform basic identity verficiation and background checks."
      />
      <Step
        status="process"
        title="Plan Your Event"
        description="Bring your own kitchen or look for local kitchens who would love to host you."
      />
      <Step
        status="process"
        title="Cook"
        description="We handle all the logistics before, during, and after the event. No need to worry about invoices, payments, and ticketing. Connect with your customers in unique ways. Grow your following and automatically update them of your future events."
      />
    </Steps>

    <Divider />
    {/* Third Bottom-Page */}

    <Title level={2}>Payments made simple</Title>
    <Steps direction="vertical">
      <Step
        status="finish"
        title="Low fees"
        description="There’s no cost to sign up and host your events. Souskasa generally charges lower than the event ticketing industry standard."
      />
      <Step
        status="finish"
        title="Plan Your Event"
        description="Know how much revenue you will make before your event even happens (minus tips)."
      />
      <Step
        status="finish"
        title="Get paid quickly"
        description="
Once the event ends, the balance will be available in your dashboard to payout by direct deposit."
      />
    </Steps>
  </div>
);
const renderKitchenBottom = (
  <div style={bottomPageLayout}>
    {/* First Bottom-Page */}
    <Title level={2}>Why List Your Kitchen?</Title>

    <Paragraph>
      Gain new customers by collaborating with local chefs. Make a guaranteed
      form of income by sharing your kitchen or allowing chefs to host pop-ups.
      You’re in full control of your availability, prices, and rules.
    </Paragraph>

    <Divider />

    {/* Second Bottom-Page */}
    <Title level={2}>Listing in 3 Steps</Title>
    <Steps direction="vertical">
      <Step
        status="process"
        title="Apply"
        description="Apply to list your kitchen. The kitchen will be inspected for cleanliness and safety."
      />
      <Step
        status="process"
        title="Set Availability"
        description="Choose your own schedule, prices, and requirements for hosts. You can also set kitchen appliances, prep area, and fridge space you are willing to let the hosts use."
      />
      <Step
        status="process"
        title="Find Host"
        description="
        Once your listing is live, qualified hosts and reach out."
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
  </div>
);

function BottomPages({ url }) {
  return (
    <>{url === "/list-your-kitchen" ? renderKitchenBottom : renderHostBottom}</>
  );
}

export default BottomPages;
