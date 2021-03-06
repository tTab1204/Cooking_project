import React, { lazy, Suspense } from 'react';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import RegisterPage from 'pages/RegisterPage/RegisterPage.js';
import NavBar from 'components/NavBar/NavBar';
import HostPage from 'pages/HostPage';
import BecomeAHostContainer from 'pages/BecomeAHostPage/BecomeAHostContainer';
import EventDetailPage from 'pages/EventDetailPage';
import ListYourKitchenContainer from 'pages/ListYourKitchenPage/ListYourKitchenContainer';
import UploadKitchenPage from 'pages/UploadKitchenPage';
import UploadEventPresenter from 'pages/UploadEventPage';
import UploadHostPage from 'pages/UploadHostPage';
import KitchenPage from 'pages/KitchenPage';
import EventPage from 'pages/EventPage';
import MyTicketPage from 'pages/MyTicketPage';
import HostDetailContainer from 'pages/HostDetailPage/HostDetailContainer';
import KitchenDetailPage from 'pages/KitchenDetailPage';
import PaymentPage from 'pages/PaymentPage';
import Footer from 'components/Footer/Footer';
import Auth from 'hoc/auth';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { ROUTES } from 'routes/routes';
import { Container, Wrapper } from 'styles/GlobayStyle';

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <NavBar />
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Auth(LandingPage, null)} />
        <Container>
          <Wrapper>
            <Route
              exact
              path={ROUTES.LOGIN}
              component={Auth(LoginPage, false)}
            />
            <Route
              exact
              path={ROUTES.REGISTER}
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path={ROUTES.HOST.MAIN}
              component={Auth(HostPage, true)}
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
              component={Auth(KitchenPage, null)}
            />
            <Route
              exact
              path={ROUTES.KITCHENS.DETAIL}
              component={Auth(KitchenDetailPage, null)}
            />
            <Route
              exact
              path={ROUTES.EVENTS.MAIN}
              component={Auth(EventPage, null)}
            />
            <Route
              path={ROUTES.MY_TICKETS.MAIN}
              component={Auth(MyTicketPage, true)}
            />
            <Route
              exact
              path={ROUTES.EVENTS.DETAIL}
              component={Auth(EventDetailPage, null)}
            />
            <Route
              exact
              path={ROUTES.UPLOAD_KITCHEN}
              component={Auth(UploadKitchenPage, true, true)}
            />
            <Route
              exact
              path={ROUTES.UPLOAD_HOST}
              component={Auth(UploadHostPage, true, true)}
            />
            <Route
              exact
              path={ROUTES.UPLOAD_EVENT}
              component={Auth(UploadEventPresenter, true, true)}
            />
            <Route
              exact
              path={ROUTES.PAYMENT}
              component={Auth(PaymentPage, true)}
            />
          </Wrapper>
        </Container>
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
