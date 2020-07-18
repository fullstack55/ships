import React from "react";
import avatar from "../../../assets/images/desktop/summary/avatar.png";
import Link from "../login-link/link";
import Button from "../button/button";
import CardItem from "../card-item/card-item";
import inboxIcon from "../../../assets/images/desktop/summary/inboxIcon.png";
import commentsIcon from "../../../assets/images/desktop/summary/commentsIcon.png";
import notificationIcon from "../../../assets/images/desktop/summary/notificationIcon.png";
import "./profile-sideinfo.sass";

const ProfileSideinfo = () => (
  <div className="profile-sideinfo">
    <div className="profile-sideinfo__avatar">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="profile-sideinfo__name">José Ricardo Rodriguez Montero</div>
    <div className="profile-sideinfo__status">Online</div>
    <Link className="profile-sideinfo__link" to="/">
      Show my last posts
    </Link>
    <Link to="/">Show my general statistics </Link>
    <Button className="profile-sideinfo__button" variant="secondary">
      Edit Forum Profile Info
    </Button>
    <div>
      <div className="profile-sideinfo__cards-header">
        <span className="profile-sideinfo__cards-title">Reminders</span>
        <div className="profile-sideinfo__cards-img">
          <img src={notificationIcon} alt="notification" />
        </div>
      </div>
      <div className="profile-sideinfo__cards">
        <CardItem
          label={"February 20, 2020"}
          value={"Inbox (2)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 19, 2020"}
          value={"Comments (5)"}
          alt={"inbox"}
          imgSrc={commentsIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
        <CardItem
          label={"February 18, 2020"}
          value={"Inbox (1)"}
          alt={"inbox"}
          imgSrc={inboxIcon}
          classes={{
            rootCls: "profile-sideinfo__card",
            imgCls: "profile-sideinfo__card-img",
            topTextCls: "profile-sideinfo__card-text",
            labelCls: "profile-sideinfo__card-label",
          }}
        />
      </div>
    </div>
  </div>
);

export default ProfileSideinfo;
