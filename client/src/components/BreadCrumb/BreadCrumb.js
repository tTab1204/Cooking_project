import React from 'react';
import { BreadCrumbImg } from './BreadCrumbStyle';
import { Typography } from 'antd';

const { Title } = Typography;

const BreadCrumb = ({ title, img }) => {
  return (
    <BreadCrumbImg img={img}>
      <Title level={1}>{title}</Title>
    </BreadCrumbImg>
  );
};

export default BreadCrumb;
