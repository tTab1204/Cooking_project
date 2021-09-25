import React, { useEffect, useState } from 'react';
import PaymentPresenter from './PaymentPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { onSuccessPay } from '_actions/user_actions';
import { message } from 'antd';

const PaymentContainer = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const cartDetail = useSelector(state => state.user.cartDetail);

  // Custom Hook을 이용해 Total 계산하는걸 했으면 좋을듯
  const [Total, setTotal] = useState('');

  const calculateTotal = cartDetail => {
    let total = 0;
    cartDetail &&
      cartDetail.map(item => {
        total += parseInt(item.price, 10) * item.quantity;
      });
    setTotal(total);
  };

  const successMessage = () => {
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });

    setTimeout(() => {
      message.success({
        content: '결제가 완료되었습니다!',
        key,
        duration: 2,
      });
    });
  };

  const paymentSuccess = () => {
    if (cartDetail) {
      dispatch(onSuccessPay({ cartDetail: cartDetail })).then(response => {
        if (response.payload.success) {
          console.log(response.payload);
          successMessage();
          history.push(`/users/${user?.name}`);
        }
      });
    }
  };

  useEffect(() => {
    calculateTotal(cartDetail);
  }, []);

  return (
    <PaymentPresenter
      cartDetail={cartDetail}
      Total={Total}
      paymentSuccess={paymentSuccess}
    />
  );
};

export default PaymentContainer;
