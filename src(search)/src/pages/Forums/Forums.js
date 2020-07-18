import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import TabLinks from "../../components/common/tab-links/tab-links";
// import Tabs from "../../components/common/tabs/tabs";
import Forum from "../forum/forum";
import MemberList from "../MemberList";
import ForumHelp from "../ForumHelp";
import ForumSearch from "../ForumSearch";
import OneTopic from "../OneTopic";
import OneCategroy from "../OneCategory";
import UserSummary from "../UserSummary";

const Forums = () => {
  return (
    <div>
      <Header info={false} />
      <TabLinks
        links={[
          { label: "Forum", to: "/forum/forums" },
          { label: "Members", to: "/forum/memberlist" },
          { label: "Help", to: "/forum/help" },
          { label: "Forum Search", to: "/forum/search" },
        ]}
      />
      <div className={"photos-wrapper__content mt-5"}>
        <Switch>
          <Route path="/forum/forums" exact render={() => <Forum />} />
          <Route path="/forum/memberlist" exact render={() => <MemberList />} />
          <Route path="/forum/help" exact render={() => <ForumHelp />} />
          <Route path="/forum/search" exact render={() => <ForumSearch />} />
          <Route
            path="/forum/forums/onetopic"
            exact
            render={() => <OneTopic />}
          />
          <Route
            path="/forum/forums/shipping-news"
            exact
            render={() => <OneCategroy />}
          />
          <Route
            path="/forum/forums/usersummary"
            exact
            render={() => <UserSummary />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Forums;
