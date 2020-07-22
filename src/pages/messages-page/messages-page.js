import React, {useState} from "react";
import HeaderTop from "../../components/common/header-top/header-top";
import Footer from "../../components/common/footer/footer";
import scrollToTop from "../../hooks/scroll-to-top";
import { Route, Switch } from "react-router-dom";
import "./messages-page.sass";
import ProfileSidemenu from "../../components/common/profile-sidemenu/profile-sidebar";
import MessagesSidebarSubMenu from "../../components/common/profile-sidemenu/messages-sidebar-submenu/messages-sidebar-submenu";
import ProfileSideinfo from "../../components/common/profile-sideinfo/profile-sideinfo";
import Outbox from "./components/outbox/outbox";
import Prune from "./components/prune/prune";
import SearchMessages from "./components/searchMessages/searchMessages";
import Inbox from "./components/inbox/inbox";
import ManageLabels from "./components/manage-labels/manage-labels";
import NewMessage from "./components/new-message/new-message";
import Navbar from "../../components/header/navbar/navbar";

const MessagesPage = () => {
  scrollToTop();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container2">
      <div className="messages__header">
        <div className="container1">
        <HeaderTop open={() => setMenuOpen(true)}/>
        <Navbar className={ menuOpen ? "header__navbar_show" : "header__navbar_hidden"}  close={() => setMenuOpen(false)} />
        </div>
      </div>
      <div className="container1 messages__container">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ProfileSidemenu className="messages__left-sidebar">
            <MessagesSidebarSubMenu />
          </ProfileSidemenu>
          <div className="messages__center-block">
            <Switch>
              <Route path="/messages/inbox" exact render={() => <Inbox />} />
              <Route path="/messages/outbox" exact render={() => <Outbox />} />
              <Route
                path="/messages/search"
                exact
                render={() => <SearchMessages />}
              />
              <Route
                path="/messages/manage-labels"
                exact
                render={() => <ManageLabels />}
              />
              <Route path="/messages/prune" exact render={() => <Prune />} />
              <Route
                path="/messages/new-message"
                exact
                render={() => <NewMessage />}
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

export default MessagesPage;
