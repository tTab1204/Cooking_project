import React, { Suspense } from 'react';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import RegisterPage from 'pages/RegisterPage/RegisterPage.js';
import NavBar from 'components/NavBar/NavBar';
import HostContainer from 'pages/HostPage/HostContainer';
import BecomeAHostContainer from 'pages/BecomeAHostPage/BecomeAHostContainer';
import EventDetailContainer from 'pages/EventDetailPage/EventDetailContainer';
import ListYourKitchenContainer from 'pages/ListYourKitchenPage/ListYourKitchenContainer';
import UploadKitchenContainer from 'pages/UploadKitchenPage/UploadKitchenContainer';
import UploadEventContainer from 'pages/UploadEventPage/UploadEventContainer';
import UploadHostPage from 'pages/UploadHostPage';
import KitchenContainer from 'pages/KitchenPage/KitchenContainer';
import EventContainer from 'pages/EventPage/EventContainer';
import UserProfileContainer from 'pages/UserProfilePage/UserProfileContainer';
import MyTicketContainer from 'pages/MyTicketPage/MyTicketContainer';
import HostDetailContainer from 'pages/HostDetailPage/HostDetailContainer';
import KitchenDetailContainer from 'pages/KitchenDetailPage/KitchenDetailContainer';
import PaymentContainer from 'pages/PaymentPage/PaymentContainer';
import Footer from 'components/Footer/Footer';
import Auth from 'components/auth/auth';
import { Route, Switch } from 'react-router-dom';
import { BackTop, Button } from 'antd';
import { ROUTES } from 'utils/routes';
import { AffixStyle, MainBox } from 'styles/GlobayStyle';

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <NavBar />
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Auth(LandingPage, null)} />
        <MainBox>
          <Route exact path={ROUTES.LOGIN} component={Auth(LoginPage, false)} />
          <Route
            exact
            path={ROUTES.REGISTER}
            component={Auth(RegisterPage, false)}
          />
          <Route
            exact
            path={ROUTES.HOST.MAIN}
            component={Auth(HostContainer, true)}
          />
          <Route
            exact
            path={ROUTES.BECOME_A_HOST}
            component={Auth(BecomeAHostContainer, true)}
          />
          <Route
            path={ROUTES.HOST.DETAIL}
            component={Auth(HostDetailContainer, null)}
          />
          <Route
            exact
            path={ROUTES.LIST_YOUR_KITCHEN}
            component={Auth(ListYourKitchenContainer, null)}
          />
          <Route
            exact
            path={ROUTES.KITCHENS.MAIN}
            component={Auth(KitchenContainer, null)}
          />
          <Route
            exact
            path={ROUTES.KITCHENS.DETAIL}
            component={Auth(KitchenDetailContainer, null)}
          />
          <Route
            exact
            path={ROUTES.EVENTS.MAIN}
            component={Auth(EventContainer, null)}
          />
          <Route
            exact
            path={ROUTES.USER_PROFILE}
            component={Auth(UserProfileContainer, null)}
          />
          <Route
            exact
            path={ROUTES.MY_TICKETS}
            component={Auth(MyTicketContainer, true)}
          />
          <Route
            exact
            path={ROUTES.EVENTS.DETAIL}
            component={Auth(EventDetailContainer, null)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_KITCHEN}
            component={Auth(UploadKitchenContainer, true)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_HOST}
            component={Auth(UploadHostPage, true)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_EVENT}
            component={Auth(UploadEventContainer, true)}
          />
          <Route
            exact
            path={ROUTES.PAYMENT}
            component={Auth(PaymentContainer, true)}
          />
        </MainBox>
      </Switch>
      <BackTop>
        <div style={AffixStyle}>UP</div>
      </BackTop>
      <Footer />
    </Suspense>
  );
}

export default App;