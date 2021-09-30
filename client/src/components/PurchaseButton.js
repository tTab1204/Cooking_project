import React from 'react';
import styled from 'styled-components';
import { Affix, Button, Select } from 'antd';
import { color } from 'styles/Theme';

const { Option } = Select;

const PurchaseButton = ({
  addToCartHandler,
  onQuantityChange,
  isEventExpired,
}) => {
  return (
    <BottomButtonBox>
      <Affix offsetBottom={0}>
        <AffixBox>
          <Button
            type="primary"
            size="large"
            disabled={isEventExpired}
            onClick={addToCartHandler}
          >
            Add To Cart
          </Button>
          {!isEventExpired && (
            <Select
              labelInValue
              defaultActiveFirstOption={true}
              size="large"
              placeholder="1"
              onChange={onQuantityChange}
              dropdownAlign={{
                offset: [0, -210],
              }}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          )}
        </AffixBox>
      </Affix>
    </BottomButtonBox>
  );
};
const BottomButtonBox = styled.div`
  padding: 16px 0;
  width: 100%;
  text-align: center;
`;

const AffixBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  width: 100%;
  text-align: center;
  background-color: ${color.white};
  box-shadow: ${color.boxShadow};

  & > button {
    width: ${({ isEventExpired }) => (isEventExpired ? '90%' : '70%')};
    display: block;
    transition: width 0.2s ease-in-out 0s;
    box-shadow: 0.2s ease-in-out 0s;
  }

  & > .ant-select {
    width: 15%;
  }
`;

export default PurchaseButton;
