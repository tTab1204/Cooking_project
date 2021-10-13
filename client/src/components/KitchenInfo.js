import React from 'react';
import styled from 'styled-components';
import { Typography, Divider, Descriptions } from 'antd';
import { EnvironmentOutlined, TeamOutlined } from '@ant-design/icons';
import { color } from 'styles/Theme';

const { Title, Paragraph } = Typography;

const KitchenInfo = ({ detail }) => {
  const { name, address, capacity, description } = detail;

  return (
    <>
      <AddressAndCapacityWrapper>
        <EnvironmentOutlined />
        <div>{address}</div>
        <TeamOutlined />
        <div>{capacity}</div>
      </AddressAndCapacityWrapper>

      <Title level={1} style={titleStyle}>
        {name}
      </Title>
      <Divider />
      <Paragraph>{description}</Paragraph>
      <Divider />
      <Descriptions title="address">
        <Descriptions.Item>{address}</Descriptions.Item>
      </Descriptions>
      <Divider />
    </>
  );
};

const AddressAndCapacityWrapper = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  color: ${color.black};
  padding-right: 10px;

  & > span {
    margin-right: 0.2rem;
  }

  & > div {
    margin-right: 1rem;
  }
`;

const titleStyle = {
  margin: '1rem 0',
};

export default KitchenInfo;
