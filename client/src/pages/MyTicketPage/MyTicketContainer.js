import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import MyTicketPresenter from './MyTicketPresenter';
import Loading from 'components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { showCartItems, removeCartItem } from '_actions/user_actions';
import { color } from 'styles/Theme';

const IconText = ({ icon, text }) => (
  <TextContainer>
    <span>{React.createElement(icon)}</span>
    {text}
  </TextContainer>
);

const TextContainer = styled.div`
  cursor: default;

  & > span {
    padding-right: 5px;
  }
`;

function MyTicketContainer({ history }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const cart = useSelector(state => state.user.cartDetail);

  const [Total, setTotal] = useState('');
  const [loading, setLoading] = useState(true);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [ShowTotal, setShowTotal] = useState(false);

  const calculateTotal = cartDetail => {
    let total = 0;

    cartDetail.map(item => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    setTotal(total);
    setShowTotal(true);
  };

  useLayoutEffect(() => {
    let cartItems = [];

    if (user && user.cart) {
      if (user.cart.length > 0) {
        user.cart.forEach(item => {
          cartItems.push(item.id);
        });
        dispatch(showCartItems(cartItems, user.cart)).then(response => {
          calculateTotal(response.payload);
          setLoading(false);
        });
      } else setLoading(false); // 뭔가 setLoading(false)가 남발되는 느낌.. 수정 필요할듯
    }
  }, [user]);

  const removeItem = eventId => {
    setRemoveLoading(true);
    dispatch(removeCartItem(eventId)).then(response => {
      if (response.payload.eventInfo.length === 0) {
        setShowTotal(false);
      }
      setRemoveLoading(false);
    });
  };

  const goShippingPage = () => {
    history.push('/payment');
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <MyTicketPresenter
          IconText={IconText}
          user={user}
          cart={cart}
          Total={Total}
          removeItem={removeItem}
          removeLoading={removeLoading}
          goShippingPage={goShippingPage}
          ShowTotal={ShowTotal}
        />
      )}
    </>
  );
}

export default MyTicketContainer;
