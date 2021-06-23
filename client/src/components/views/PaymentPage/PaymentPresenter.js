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

const { Step } = Steps;
const { TextArea } = Input;
const { Title } = Typography;

const PaymentPresenter = () => {
  const steps = [
    {
      title: '희망사항 입력',
      content: (
        <FormContainer>
          <Title level={4}>희망사항 입력</Title>
          <Form colon={false}>
            <Form.Item>
              <TextArea placeholder='호스트에게 원하는 말을 적어주세요!' style={{ minHeight: '200px' }} />
            </Form.Item>
          </Form>
        </FormContainer>
      ),
    },
    {
      title: '결제 방법 선택',
      content: (
        <FormContainer>
          <Title level={4} style={{ marginBottom: '2rem' }}>
            결제 방법 선택
          </Title>
          <Radio.Group defaultValue={1}>
            <RadioWrapper>
              <Radio value={1} style={{ marginBottom: '1rem' }}>
                <CreditCardOutlined style={{ marginRight: '3px' }} />
                신용 카드
              </Radio>
              <Radio value={2} disabled style={{ marginBottom: '1rem' }}>
                카카오 페이로 결제하기
              </Radio>
              <Radio value={3} disabled style={{ marginBottom: '1rem' }}>
                네이버 페이로 결제하기
              </Radio>
            </RadioWrapper>
          </Radio.Group>
        </FormContainer>
      ),
    },
    {
      title: '주문하기',
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
            <OrderItem>
              <div>
                <img alt='test_item' />
              </div>
              <OrderItemInfo>
                <div>Paka's Party</div>
                <div>4 x 20000원</div>
              </OrderItemInfo>
            </OrderItem>
            <Divider />
            <OrderItem>
              <div>
                <img alt='test_item' />
              </div>
              <OrderItemInfo>
                <div>Paka's Party</div>
                <div>4 x 20000원</div>
              </OrderItemInfo>
            </OrderItem>
            <Divider />
          </OrderDetails>
          <OrderSummary>
            <Title level={4}>ORDER SUMMARY</Title>
            <OrderSummaryAmount>
              <OrderSummaryTable>
                <tbody>
                  <tr>
                    <td>Items: </td>
                    <td style={{ textAlign: 'right' }}>40000원</td>
                  </tr>
                  <tr>
                    <td>Items: </td>
                    <td style={{ textAlign: 'right' }}>40000원</td>
                  </tr>
                  <tr>
                    <td>Items: </td>
                    <td style={{ textAlign: 'right' }}>40000원</td>
                  </tr>
                  <tr>
                    <td>Total: </td>
                    <td style={{ textAlign: 'right' }}>40000원</td>
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
              계속하기
            </Button>
          </ButtonWrapper>
        )}
        {current === steps.length - 1 && (
          <ButtonWrapper>
            <Button type='primary' size='large' style={{ width: '100%' }}>
              주문 완료하기
            </Button>
          </ButtonWrapper>
        )}
        {current > 0 && (
          <ButtonWrapper>
            <Button size='large' onClick={prev} style={{ width: '100%' }}>
              이전으로
            </Button>
          </ButtonWrapper>
        )}
      </StepsAction>
    </>
  );
};

export default PaymentPresenter;
