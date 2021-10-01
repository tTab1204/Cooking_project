import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from 'utils/routes';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showCartItems } from '_actions/user_actions';
import TicketHeader from 'components/TicketHeader';
import { getTotalPrice } from 'utils/getTotal';
import TicketList from 'components/TicketList';
import Loading from 'components/Loading';

function MyTicketPresenter({ history }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const cart = user?.cart;

  const [Total, setTotal] = useState('');
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    let cartItems = [];

    if (cart) {
      if (cart.length > 0) {
        cart.forEach(item => {
          cartItems.push(item.id);
        });
        dispatch(showCartItems(cartItems, cart)).then(response => {
          getTotalPrice(response.payload, setTotal);
          setLoading(false);
        });
      } else setLoading(false);
    }
  }, [user]);

  const goShippingPage = () => history.push(ROUTES.PAYMENT);

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <TicketHeader />
          <TicketList total={Total} />

          <ButtonContainer>
            <Button type="primary" size="large" onClick={goShippingPage}>
              Check Out
            </Button>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    width: 70%;
    margin-top: 2rem;

    @media screen and (max-width: 540px) {
      width: 100%;
    }
  }
`;

export default MyTicketPresenter;
