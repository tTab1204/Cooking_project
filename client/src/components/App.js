import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
import styled from 'styled-components';
import LandingPage from './pages/LandingPage/LandingPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import NavBar from './pages/NavBar/NavBar';
import HostContainer from './pages/HostPage/HostContainer';
import BecomeAHostContainer from './pages/BecomeAHostPage/BecomeAHostContainer';
import ListYourKitchenContainer from './pages/ListYourKitchenPage/ListYourKitchenContainer';
import Footer from './pages/Footer/Footer';
import { Button } from 'antd';
import UploadKitchenContainer from './pages/UploadKitchenPage/UploadKitchenContainer';
import UploadHostContainer from './pages/UploadHostPage/UploadHostContainer';
import KitchenContainer from './pages/KitchenPage/KitchenContainer';
import EventContainer from './pages/EventPage/EventContainer';
import UploadEventContainer from './pages/UploadEventPage/UploadEventContainer';
import EventDetailContainer from './pages/EventDetailPage/EventDetailContainer';
import UserProfileContainer from './pages/UserProfilePage/UserProfileContainer';
import MyTicketContainer from './pages/MyTicketPage/MyTicketContainer';
import { BackTop } from 'antd';
import HostDetailContainer from './pages/HostDetailPage/HostDetailContainer';
import KitchenDetailContainer from './pages/KitchenDetailPage/KitchenDetailContainer';
import PaymentContainer from './pages/PaymentPage/PaymentContainer';

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <NavBar />
      {/* <Switch> 는 첫번째로 매칭되는 path 를 가진 컴포넌트를 렌더링 시킨다. 
          이것이 exact path 와 다른 점은 첫번째 매칭만 본다는 것이다. */}
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <MainBox>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/hosts" component={Auth(HostContainer, true)} />
          <Route
            exact
            path="/become-a-host"
            component={Auth(BecomeAHostContainer, true)}
          />
          <Route
            path="/hosts/:hostsId"
            component={Auth(HostDetailContainer, null)}
          />
          <Route
            exact
            path="/list-your-kitchen"
            component={Auth(ListYourKitchenContainer, null)}
          />
          <Route
            exact
            path="/kitchens"
            component={Auth(KitchenContainer, null)}
          />
          <Route
            exact
            path="/kitchens/:kitchensId"
            component={Auth(KitchenDetailContainer, null)}
          />
          <Route exact path="/events" component={Auth(EventContainer, null)} />
          <Route
            exact
            path="/users/:userName"
            component={Auth(UserProfileContainer, null)}
          />
          <Route
            exact
            path="/my-tickets"
            component={Auth(MyTicketContainer, true)}
          />
          <Route
            exact
            path="/events/:eventId"
            component={Auth(EventDetailContainer, null)}
          />
          <Route
            exact
            path="/upload-kitchen"
            component={Auth(UploadKitchenContainer, true)}
          />
          <Route
            exact
            path="/upload-host"
            component={Auth(UploadHostContainer, true)}
          />
          <Route
            exact
            path="/upload-event"
            component={Auth(UploadEventContainer, true)}
          />
          <Route
            exact
            path="/payment"
            component={Auth(PaymentContainer, true)}
          />
        </MainBox>
      </Switch>
      <BackTop>
        <div style={affixStyle}>UP</div>
      </BackTop>
      <Footer />
    </Suspense>
  );
}

const affixStyle = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const MainBox = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-left: 46px;
  padding-right: 46px;
  margin: 0px auto 180px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export default App;
