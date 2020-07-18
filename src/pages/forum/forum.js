/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Title from "../../components/common/title/title";
import BasicButton from "../../components/common/BasicButton";
import CreateTicket from "../support-page/create-ticket/create-ticket";
import NewPostImage from "../../assets/images/desktop/forum/new-post-icon.png";
import OldPostImage from "../../assets/images/desktop/forum/old-post-icon.png";
import { Link } from "react-router-dom";
import "./forum.sass";

// eslint-disable-next-line react/prop-types
const ForumTitle = ({ boldText, regularText, addon }) => (
  <Title
    boldText={boldText}
    regularText={regularText}
    addon={addon}
    style={{
      textAlign: "left",
      color: "#0f2153",
      fontSize: "30px",
      marginBottom: "30px",
    }}
  />
);

// eslint-disable-next-line react/prop-types
const Post = ({ isNew }) => (
  <div className="forum-post">
    <div className="forum-post-title">
      <div className="forum-post-title-image">
        <img src={isNew ? NewPostImage : OldPostImage} />
      </div>
      <div className="forum-post-title-text">
        <Link to="/forum/forums/shipping-news">
          Shipping News and information
        </Link>
        <div>
          The place to discuss everything that is newsworthy within the shipping
          industry including reported ship sales. Share your ship information
          here.
        </div>
      </div>
      <BasicButton
        text="+"
        color="primary"
        outline={true}
        className="forum-post-title-loadmore_btn"
      />
    </div>
    <div className="forum-post-stats">
      <div>37017 Posts</div>
      <div>7343 Topics</div>
    </div>
    <div className="forum-post-meta">
      <div>
        Last post by <a>Stephen Chester</a>
      </div>
      <div>
        in <a>Re: Updates on vessels a...</a>
      </div>
      <div>on Yesterday at 12:45:13 am</div>
    </div>
  </div>
);

const RecentPost = () => (
  <div className="forum-recent-post">
    <div>
      <p>Re: Ships names in CAPITALS or Title Case? &nbsp;&nbsp;</p>
      <span>by<a>canberra97</a>&nbsp;(Site related news, functions and modules)</span>
    </div>
    <span className="forum-recent-post-date">
      <strong>Today</strong>&nbsp;<span>at 08:17:23 am</span>
    </span>
  </div>
);

const Forum = () => {
  return (
    <>
      <Title boldText="SHIPSPOTTING" regularText="FORUM" />
      <div className="container1 forum-container">
        <CreateTicket
          label="Please Login to use Shipspotting forum"
          cta="Login"
          className="forum-container-login"
        />
      </div>
      <div className="container1 forum forum_container">
        <ForumTitle boldText="SHIPSPOTTING" regularText="NEWS" />
        <a className="forum-link">
          Join shipspotting trips in the Antwerp Rotterdam Amsterdam region
        </a>
        <div className="page-title-tips">
          <ForumTitle
            boldText="SHIPSPOTTERS"
            regularText="ALL OVER THE WORLD"
            addon={
              <span className="forum-posts-tip">
                <span>
                  <img src={NewPostImage} />
                  <span>New Posts</span>
                </span>
                <span>
                  <img src={OldPostImage} />
                  <span>No New Posts</span>
                </span>
              </span>
            }
          />
        </div>
        <div className="forum-posts">
          {[
            { isNew: true },
            { isNew: true },
            { isNew: false },
            { isNew: false },
            { isNew: false },
          ].map((item, index) => (
            <Post key={index} isNew={item.isNew} />
          ))}
        </div>
        <a className="forum-link">Mark all messages as read</a>
        <ForumTitle boldText="RECENT" regularText="POSTS" />
        <div className="forum-recent-posts">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <RecentPost key={index} />
          ))}
        </div>
        <ForumTitle boldText="FORUM" regularText="STATS" />
        <div className="forum-stats">
          <div>
            <span>
              51,925 Posts in 9,910 Topics by 107,164 Members. Latest Member:
            </span>
            &nbsp;
            <a>hamham</a>
          </div>
          <div>
            <span>Latest Post: </span>
            &nbsp;
            <a>"Re: Ships' names in 'CAP..."</a>
            &nbsp;
            <span>(</span>
            &nbsp;
            <strong>Today</strong>
            &nbsp;
            <span>at 08:17:23 am )</span>
          </div>
        </div>
        <div className="forum-links">
          <a className="forum-link">View the most recent posts on the forum</a>
          <a className="forum-link">More Stats</a>
        </div>
        <ForumTitle boldText="USERS" regularText="ONLINE" />
        <div className="forum-users">
          <div className="forum-users-top">
            <div>
              <a>54 Guests,</a>
              &nbsp;
              <a>14 Users</a>
              &nbsp;
              <a>(0 Buddies)</a>
            </div>
            <div className="forum-users-top-title">
              Users active in past 15 minutes:
            </div>
            <div className="forum-users-top-active">
              {Array(30)
                .fill(1)
                .map((item, index) => (
                  <a key={index}>Ingvar,</a>
                ))}
            </div>
          </div>
          <div className="forum-users-bottom">
            <div>
              <span>Most Online Today: </span>
              <strong>106</strong>
            </div>
            <div>
              <span>
                Most Online Ever: <strong>1 354</strong> (July 28, 2019,
                05:20:07 pm)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
