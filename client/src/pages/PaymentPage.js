import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Steps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { successMessage } from 'utils/successMessage';
import { getTotalPrice } from 'utils/getTotal';
import { onSuccessPay } from '_actions/user_actions';
import { ROUTES } from 'routes/routes';
import Message from 'components/Message';
import PaymentMethod from 'components/PaymentMethod';
import PaymentButton from 'components/PaymentButton';
import Order from 'components/Order';

const { Step } = Steps;

const PaymentPage = ({ history }) => {
  const dispatch = useDispatch();
  const cartDetail = useSelector(state => state.user.cartDetail);
  const [total, setTotal] = useState('');
  const [, setShowSuccess] = useState(false);

  const paymentSuccess = () => {
    if (cartDetail) {
      dispatch(onSuccessPay({ cartDetail: cartDetail })).then(response => {
        if (response.payload.success) {
          console.log(response.payload);
          successMessage(setShowSuccess);
          history.push(ROUTES.MY_TICKETS.MAIN);
        }
      });
    }
  };

  useEffect(() => {
    getTotalPrice(cartDetail, setTotal);
  }, []);

  const steps = [
    {
      title: 'Enter your wishes to your host',
      content: <Message />,
    },
    {
      title: 'Payment Methods',
      content: <PaymentMethod />,
    },
    {
      title: 'Order',
      content: <Order cartDetail={cartDetail} total={total} />,
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <Container>
      <Steps current={current} style={{ marginTop: '3rem' }}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div>{steps[current].content}</div>
      <div className="step_action">
        {current < steps.length - 1 && (
          <PaymentButton onClick={next} name="Continue" type="primary" />
        )}
        {current === steps.length - 1 && (
          <PaymentButton
            onClick={paymentSuccess}
            name="Complete Your Order"
            type="primary"
          />
        )}
        {current > 0 && <PaymentButton onClick={prev} name="Back" />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  & > .ant-steps {
    margin-top: 3rem;
  }

  & > .step_action {
    margin-top: 2rem;
  }
`;

export default PaymentPage;
