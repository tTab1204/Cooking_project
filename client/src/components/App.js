import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import HostPage from "./views/HostPage/HostPage";
import BecomeAHostPage from "./views/HostPage/BecomeAHostPage";
import HostDetailPage from "./views/HostDetailPage/HostDetailPage";
import Footer from "./views/Footer/Footer";
import { Layout, Button } from "antd";
// import { Magenta } from "@ant-design/colors";
const { Header, Content } = Layout;

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<Button type="primary" size="small" loading></Button>}>
      <NavBar />

      <Content>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
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
          </Switch>
        </div>
      </Content>
      <Footer />
    </Suspense>
  );
}

export default App;
