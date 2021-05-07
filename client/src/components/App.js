import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import HostPage from "./views/HostPage/HostPage";
import BecomeAHostPage from "./views/HostPage/BecomeAHostPage";
import HostDetailPage from "./views/HostDetailPage/HostDetailPage";
import ListYourKitchenPage from "./views/KitchenPage/ListYourKitchenPage";
import Footer from "./views/Footer/Footer";
import { Layout, Button } from "antd";
import UploadKitchenPage from "./admin/UploadKitchenPage";
import UploadHostPage from "./admin/UploadHostPage";
import KitchenPage from "./views/KitchenPage/KitchenPage";
import KitchenDetailPage from "./views/KitchenDetailPage/KitchenDetailPage";
import EventPage from "./views/EventPage/EventPage";
import UploadEventPage from "./views/UploadEventPage/UploadEventPage";

const { Content } = Layout;

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <NavBar />

      <Content>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          {/* <Switch> 는 첫번째로 매칭되는 path 를 가진 컴포넌트를 렌더링 시킨다. 
          이것이 exact path 와 다른 점은 첫번째 매칭만 본다는 것이다. */}
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route exact path="/hosts" component={Auth(HostPage, true)} />
            <Route
              exact
              path="/become-a-host"
              component={Auth(BecomeAHostPage, true)}
            />
            <Route
              exact
              path="/hosts/:hostsId"
              component={Auth(HostDetailPage, null)}
            />

            <Route
              exact
              path="/list-your-kitchen"
              component={Auth(ListYourKitchenPage, null)}
            />
            <Route exact path="/kitchens" component={Auth(KitchenPage, null)} />
            <Route
              exact
              path="/kitchens/:kitchensId"
              component={Auth(KitchenDetailPage, null)}
            />
            <Route exact path="/events" component={Auth(EventPage, null)} />
            <Route
              exact
              path="/upload-kitchen"
              component={Auth(UploadKitchenPage, true)}
            />
            <Route
              exact
              path="/upload-host"
              component={Auth(UploadHostPage, true)}
            />
            <Route
              exact
              path="/upload-event"
              component={Auth(UploadEventPage, true)}
            />
          </Switch>
        </div>
      </Content>
      <Footer />
    </Suspense>
  );
}

export default App;
