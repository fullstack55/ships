import React, {useState} from "react";
import HeaderTop from "../../components/common/header-top/header-top";
import Footer from "../../components/common/footer/footer";
import scrollToTop from "../../hooks/scroll-to-top";
import { Route, Switch } from "react-router-dom";
import "./video-page.sass";
import ProfileSidemenu from "../../components/common/profile-sidemenu/profile-sidebar";
import ProfileSideinfo from "../../components/common/profile-sideinfo/profile-sideinfo";
import VideoSidebarSubmenu from "../../components/common/profile-sidemenu/video-sidebar-submenu/video-sidebar-submenu";
import MyComments from "../photo-page/components/my-comments/my-comments";
import CommentsToMe from "../photo-page/components/commets-to-me/comments-to-me";
import Favorite from "../photo-page/components/favorite/Favorite";
import Deleted from "../photo-page/components/deleted/Deleted";
import Uploaded from "../photo-page/components/uploaded/Uploaded";
import UploadNewVideo from "./components/upload-new-video/upload-new-video";
import Navbar from "../../components/header/navbar/navbar";

const VideoPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  scrollToTop();
  const favoriteHeaders = [
    "",
    "Video name",
    "IMO",
    "Uploaded by",
    "Bookmarked",
  ];
  const commentsToMeDummyData = {
    headers: ["Video name", "Comment", "Comment made by", "Comment added"],
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
  const myCommentsDummyData = {
    headers: [
      "Video name",
      "Video by",
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
  const deletedDummyData = {
    headers: [
      "Video",
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

  return (
    <div>
      <div className="video__header">
        <div className="container1">
        <HeaderTop open={() => setMenuOpen(true)}/>
        <Navbar className={ menuOpen ? "header__navbar_show" : "header__navbar_hidden"}  close={() => setMenuOpen(false)} />
        </div>
      </div>
      <div className="container1 video__container">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ProfileSidemenu className="video__left-sidebar">
            <VideoSidebarSubmenu />
          </ProfileSidemenu>
          <div className="video__center-block">
            <Switch>
              <Route
                path="/video/uploaded"
                exact
                render={() => <Uploaded media={"videos"} />}
              />
              <Route
                path="/video/favorites"
                exact
                render={() => (
                  <Favorite title={"videos"} tableHeader={favoriteHeaders} />
                )}
              />
              <Route
                path="/video/comments-to-my-videos"
                exact
                render={() => (
                  <CommentsToMe tableParameters={commentsToMeDummyData} />
                )}
              />
              <Route
                path="/video/comments-made-by-me"
                exact
                render={() => (
                  <MyComments tableParameters={myCommentsDummyData} />
                )}
              />
              <Route
                path="/video/deleted-videos"
                exact
                render={() => (
                  <Deleted
                    title={"videos"}
                    tableParameters={deletedDummyData}
                  />
                )}
              />
              <Route
                path="/video/new-video"
                exact
                render={() => <UploadNewVideo />}
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

export default VideoPage;
