import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { ROUTES } from 'routes/routes';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showCartItems } from '_actions/user_actions';
import TicketTabs from 'components/TicketTabs';
import { getTotalPrice } from 'utils/getTotal';
import Loading from 'components/Loading';
import { useRecoilValue } from 'recoil';
import { ticketTabState } from 'atoms/atoms';

function MyTicketPage({ history, match }) {
  const dispatch = useDispatch();
  const url = match.url;

  const user = useSelector(state => state.user.userData);
  const cart = user?.cart;

  const [total, setTotal] = useState('');
  const [loading, setLoading] = useState(true);
  const tab = useRecoilValue(ticketTabState);

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
          <TicketTabs total={total} url={url} history={history} />
          <ButtonContainer>
            <Button
              disabled={tab === ROUTES.MY_TICKETS.USED_EXPIRED}
              type="primary"
              size="large"
              onClick={goShippingPage}
            >
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

export default MyTicketPage;
