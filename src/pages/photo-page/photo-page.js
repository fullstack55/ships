import React, {useState} from "react";
import HeaderTop from "../../components/common/header-top/header-top";
import Footer from "../../components/common/footer/footer";
import scrollToTop from "../../hooks/scroll-to-top";
import { Route, Switch } from "react-router-dom";
import "./photo-page.sass";
import ProfileSidemenu from "../../components/common/profile-sidemenu/profile-sidebar";
import ProfileSideinfo from "../../components/common/profile-sideinfo/profile-sideinfo";
import PhotoSidebarSubmenu from "../../components/common/profile-sidemenu/photo-sidebar-submenu/photo-sidebar-submenu";

import UploadNewPhoto from "./components/upload-new-photo/upload-new-photo";
import Settings from "./components/settings/settings";
import Deleted from "./components/deleted/Deleted";
import MyComments from "./components/my-comments/my-comments";
import CommentsToMe from "./components/commets-to-me/comments-to-me";
import Favorite from "./components/favorite/Favorite";
import Uploaded from "./components/uploaded/Uploaded";
import Navbar from "../../components/header/navbar/navbar";

const PhotoPage = () => {
  scrollToTop();
  const favoriteHeaders = [
    "",
    "Photo name",
    "IMO",
    "photographer",
    "Bookmarked",
  ];
  const commentsToMeDummyData = {
    headers: ["Photo name", "Comment", "Comment made by", "Comment added"],
    body: [
      {
        name: "test name",
        by: "Vlyself Angorlana son frobittes asddw wdggsdasdwd awwdsdadd ",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        date: "Feb 20, 2020",
      },
      {
        name: "wildness",
        by: "Danylo Dobrovolskiy",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        date: "Feb 20, 2020",
      },
      {
        name: "Car photo",
        by: "Tom Rodriguez",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        date: "Feb 20, 2020",
      },
    ],
  };

  const deletedDummyData = {
    headers: [
      "Photo",
      "Deleted by",
      "reason",
      "personal message",
      "deleted date",
    ],
    body: [
      {
        photo: {
          url: "photo",
          id: "fg2452311",
          view: "",
        },
        deletedBy: "Vlyself",
        reason: "it is a simple comment",
        message: "-",
        deletedDate: "Feb 20, 2020",
      },
      {
        photo: {
          url: "photo",
          id: "fg2452311",
          view: "",
        },
        deletedBy: "Vlyself",
        reason: "it is a simple comment",
        message: "-",
        deletedDate: "Feb 20, 2020",
      },
      {
        photo: {
          url: "photo",
          id: "fg2452311",
          view: "",
        },
        deletedBy: "Vlyself",
        reason: "it is a simple comment",
        message: "-",
        deletedDate: "Feb 20, 2020",
      },
    ],
  };

  const myCommentsDummyData = {
    headers: [
      "Photo name",
      "Photo by",
      "My comment",
      "New replies",
      "Comment added",
    ],
    body: [
      {
        name: "test name",
        by: "Vlyself Angorlana son frobittes asddw wdggsdasdwd awwdsdadd ",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        replies: 3,
        date: "Feb 20, 2020",
      },
      {
        name: "wildness",
        by: "Danylo Dobrovolskiy",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        replies: 8,
        date: "Feb 20, 2020",
      },
      {
        name: "Car photo",
        by: "Tom Rodriguez",
        comment:
          "interesting comment text here interesting " +
          "comment text here interesting comment text here interesting comment text here",
        replies: 0,
        date: "Feb 20, 2020",
      },
    ],
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="photo__header">
        <div className="container1">
        <HeaderTop open={() => setMenuOpen(true)}/>
        <Navbar className={ menuOpen ? "header__navbar_show" : "header__navbar_hidden"}  close={() => setMenuOpen(false)} />
        </div>
      </div>
      <div className="container1 photo__container">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ProfileSidemenu className="photo__left-sidebar">
            <PhotoSidebarSubmenu />
          </ProfileSidemenu>
          <div className="photo__center-block">
            <Switch>
              <Route
                path="/photo/uploaded"
                exact
                render={() => <Uploaded media={"photos"} />}
              />
              <Route
                path="/photo/favorites"
                exact
                render={() => (
                  <Favorite title={"photos"} tableHeader={favoriteHeaders} />
                )}
              />
              <Route
                path="/photo/comments-to-my-photo"
                exact
                render={() => (
                  <CommentsToMe tableParameters={commentsToMeDummyData} />
                )}
              />
              <Route
                path="/photo/comments-made-by-me"
                exact
                render={() => (
                  <MyComments tableParameters={myCommentsDummyData} />
                )}
              />
              <Route
                path="/photo/deleted-photos"
                exact
                render={() => (
                  <Deleted
                    title={"photos"}
                    tableParameters={deletedDummyData}
                  />
                )}
              />
              <Route path="/photo/settings" exact render={() => <Settings />} />
              <Route
                path="/photo/new-photo"
                exact
                render={() => <UploadNewPhoto />}
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

export default PhotoPage;
