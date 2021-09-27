import React from 'react';
import { Select } from 'antd';
import { selectStyle } from './SelectBoxStyle';

const { Option } = Select;

const SelectBox = ({ placeholder, onSelectChange, optionValue }) => {
  const { one, two, three } = optionValue;

  return (
    <Select
      labelInValue
      noStyle
      size="large"
      placeholder={placeholder}
      onChange={onSelectChange}
      style={selectStyle}
    >
      <Option value={one}>{one}</Option>
      <Option value={two}>{two}</Option>
      <Option value={three}>{three}</Option>
    </Select>
  );
};

export default SelectBox;
