import React, { useState } from 'react';
import { Steps, Button, message, Form, Input, Typography, Radio, Divider } from 'antd';
import {
  StepsAction,
  FormContainer,
  ButtonWrapper,
  RadioWrapper,
  OrderContainer,
  OrderDetails,
  OrderItem,
  OrderItemInfo,
  OrderSummary,
  OrderSummaryAmount,
  OrderSummaryTable,
} from './PaymentStyle';
import { CreditCardOutlined, CreditCardFilled } from '@ant-design/icons';
import { LOCAL_SERVER } from '../../Config';

const { Step } = Steps;
const { TextArea } = Input;
const { Title } = Typography;

const PaymentPresenter = ({ cartDetail, Total, paymentSuccess }) => {
  const steps = [
    {
      title: 'Enter your wishes to your host',
      content: (
        <FormContainer>
          <Title level={4}>Enter your wishes to your host</Title>
          <Form colon={false}>
            <Form.Item>
              <TextArea style={{ minHeight: '200px' }} />
            </Form.Item>
          </Form>
        </FormContainer>
      ),
    },
    {
      title: 'Payment Methods',
      content: (
        <FormContainer>
          <Title level={4} style={{ marginBottom: '2rem' }}>
            Payment Methods
          </Title>
          <Radio.Group defaultValue={1}>
            <RadioWrapper>
              <Radio value={1} style={{ marginBottom: '1rem' }}>
                <CreditCardOutlined style={{ marginRight: '3px' }} />
                Credit Card
              </Radio>
              <Radio value={2} disabled style={{ marginBottom: '1rem' }}>
                KaKao Pay
              </Radio>
              <Radio value={3} disabled style={{ marginBottom: '1rem' }}>
                Naver Pay
              </Radio>
            </RadioWrapper>
          </Radio.Group>
        </FormContainer>
      ),
    },
    {
      title: 'Order',
      content: (
        <OrderContainer>
          <OrderDetails>
            <Title level={4}>PAYMENT METHOD</Title>
            <div>
              {' '}
              <CreditCardFilled /> Credit Card{' '}
            </div>
            <Divider />
            <Title level={4}>ORDER ITEM</Title>
            {cartDetail?.map((item) => (
              <>
                <OrderItem>
                  <div>
                    <img
                      style={{ width: '60px', display: 'block' }}
                      src={`${LOCAL_SERVER}${item.images[0]}`}
                      alt='test_item'
                    />
                  </div>
                  <OrderItemInfo>
                    <div>{item.name}</div>
                    <div>{`${item.quantity} x ${item.price}`}</div>
                  </OrderItemInfo>
                </OrderItem>
                <Divider />
              </>
            ))}
          </OrderDetails>
          <OrderSummary>
            <Title level={4}>ORDER SUMMARY</Title>
            <OrderSummaryAmount>
              <OrderSummaryTable>
                <tbody>
                  <tr>
                    <td>Items: </td>
                    <td className='item_price'>{Total}원</td>
                  </tr>
                  <tr>
                    <td>Shipping & handling: </td>
                    <td className='item_price'>0원</td>
                  </tr>
                  <tr>
                    <td>Tax: </td>
                    <td className='item_price'>0원</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: '1.2rem' }}>Total: </td>
                    <td className='item_price' style={{ fontSize: '1.2rem' }}>
                      {Total}원
                    </td>
                  </tr>
                </tbody>
              </OrderSummaryTable>
            </OrderSummaryAmount>
          </OrderSummary>
        </OrderContainer>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} style={{ marginTop: '3rem' }}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div>{steps[current].content}</div>
      <StepsAction>
        {current < steps.length - 1 && (
          <ButtonWrapper>
            <Button size='large' type='primary' onClick={next} style={{ width: '100%' }}>
              Continue
            </Button>
          </ButtonWrapper>
        )}
        {current === steps.length - 1 && (
          <ButtonWrapper>
            <Button type='primary' size='large' style={{ width: '100%' }} onClick={paymentSuccess}>
              Complete your order
            </Button>
          </ButtonWrapper>
        )}
        {current > 0 && (
          <ButtonWrapper>
            <Button size='large' onClick={prev} style={{ width: '100%' }}>
              Back
            </Button>
          </ButtonWrapper>
        )}
      </StepsAction>
    </>
  );
};

export default PaymentPresenter;
