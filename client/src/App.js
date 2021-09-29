import React, { Suspense } from 'react';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import RegisterPage from 'pages/RegisterPage/RegisterPage.js';
import NavBar from 'components/NavBar/NavBar';
import HostContainer from 'pages/HostPage/HostContainer';
import BecomeAHostContainer from 'pages/BecomeAHostPage/BecomeAHostContainer';
import EventDetailPage from 'pages/EventDetailPage';
import ListYourKitchenContainer from 'pages/ListYourKitchenPage/ListYourKitchenContainer';
import UploadKitchenPage from 'pages/UploadKitchenPage';
import UploadEventPresenter from 'pages/UploadEventPage';
import UploadHostPage from 'pages/UploadHostPage';
import KitchenContainer from 'pages/KitchenPage/KitchenContainer';
import EventPage from 'pages/EventPage';
import UserProfileContainer from 'pages/UserProfilePage/UserProfileContainer';
import MyTicketContainer from 'pages/MyTicketPage/MyTicketContainer';
import HostDetailContainer from 'pages/HostDetailPage/HostDetailContainer';
import KitchenDetailContainer from 'pages/KitchenDetailPage/KitchenDetailContainer';
import PaymentContainer from 'pages/PaymentPage/PaymentContainer';
import Footer from 'components/Footer/Footer';
import Auth from 'components/auth/auth';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { ROUTES } from 'utils/routes';
import { MainBox } from 'styles/GlobayStyle';

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
            component={Auth(EventPage, null)}
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
            component={Auth(EventDetailPage, null)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_KITCHEN}
            component={Auth(UploadKitchenPage, true)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_HOST}
            component={Auth(UploadHostPage, true)}
          />
          <Route
            exact
            path={ROUTES.UPLOAD_EVENT}
            component={Auth(UploadEventPresenter, true)}
          />
          <Route
            exact
            path={ROUTES.PAYMENT}
            component={Auth(PaymentContainer, true)}
          />
        </MainBox>
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
