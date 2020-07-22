import React, {useState} from "react";
import HeaderTop from "../../components/common/header-top/header-top";
import Footer from "../../components/common/footer/footer";
import scrollToTop from "../../hooks/scroll-to-top";
import { Route, Switch } from "react-router-dom";
import Summary from "./components/summary/summary";
import "./profile-page.sass";
import ProfileSidemenu from "../../components/common/profile-sidemenu/profile-sidebar";
import ProfileSidebarSubmenu from "../../components/common/profile-sidemenu/profile-sidebar-submenu/profile-sidebar-submenu";
import ProfileSideinfo from "../../components/common/profile-sideinfo/profile-sideinfo";
import Statistics from "./components/statistics/statistics";
import Posts from "./components/posts/posts";
import BuddiesList from "./components/buddies-list/buddies-list";
import AccountRelatedSetting from "./components/account-related-settings/account-related-settings";
import PersonalMessageOptions from "./components/personal-message-options/personal-message-options";
import ForumProfile from "./components/ForumProfile";
import Preferences from "./components/Preferences";
import Notifications from "./components/Notifications";
import Navbar from "../../components/header/navbar/navbar";

const ProfilePage = () => {
  scrollToTop();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="profile__header">
        <div className="container1">
        <HeaderTop open={() => setMenuOpen(true)}/>
        <Navbar className={ menuOpen ? "header__navbar_show" : "header__navbar_hidden"}  close={() => setMenuOpen(false)} />
        </div>
      </div>
      <div className="container1 profile__container">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ProfileSidemenu className="profile__left-sidebar">
            <ProfileSidebarSubmenu />
          </ProfileSidemenu>
          <div className="profile__center-block">
            <Switch>
              <Route
                path="/profile/profile/summary"
                exact
                render={() => <Summary />}
              />
              <Route
                path="/profile/profile/statistics"
                exact
                render={() => <Statistics />}
              />
              <Route
                path="/profile/profile/posts"
                exact
                render={() => <Posts />}
              />
              <Route
                path="/profile/profile/buddies"
                exact
                render={() => <BuddiesList />}
              />
              <Route
                path="/profile/profile/account-settings"
                exact
                render={() => <AccountRelatedSetting />}
              />
              <Route
                path="/profile/profile/personal-message-options"
                exact
                render={() => <PersonalMessageOptions />}
              />
              <Route
                path="/profile/profile/forum-profile-info"
                exact
                render={() => <ForumProfile />}
              />
              <Route
                path="/profile/profile/look-layout-preferences"
                exact
                render={() => <Preferences />}
              />
              <Route
                path="/profile/profile/notification-and-email"
                exact
                render={() => <Notifications />}
              />
            </Switch>
          </div>
          <ProfileSideinfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
