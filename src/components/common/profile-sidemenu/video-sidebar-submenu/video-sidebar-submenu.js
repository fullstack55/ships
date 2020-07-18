import React from "react";
import { NavLink } from "react-router-dom";

import uploaded from "../../../../assets/images/desktop/photo/uploadedVideo.svg";
import favorite from "../../../../assets/images/desktop/photo/favorite.svg";
import commToVideo from "../../../../assets/images/desktop/photo/commToPhoto.svg";
import commByMe from "../../../../assets/images/desktop/photo/commByMe.svg";
import deleted from "../../../../assets/images/desktop/photo/delete.svg"
import newVideo from "../../../../assets/images/desktop/photo/uploadedNewVideo.svg";

import './video-sidebar-submenu.sass'
import "../profile-sidebar-submenu/profile-sidebar-submenu.sass"

const VideoSidebarSubmenu = () => {

  return (
    <ul className="profile-sidebar-submenu">


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/video/uploaded`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img
            className="profile-sidebar-submenu__img"
            src={uploaded}
            alt="uploaded"
          />
          <span className="profile-sidebar-submenu__text">Uploaded</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/video/favorites`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img
            className="profile-sidebar-submenu__img"
            src={favorite}
            alt="favorite"
          />
          <span className="profile-sidebar-submenu__text">Favorites</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/video/comments-to-my-videos`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img className="profile-sidebar-submenu__img" src={commToVideo} alt="comment"/>
          <span className="profile-sidebar-submenu__text">Comments to my videos</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/video/comments-made-by-me`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img className="profile-sidebar-submenu__img" src={commByMe} alt="comment"/>
          <span className="profile-sidebar-submenu__text">Comments made by me</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/video/deleted-videos`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img
            className="profile-sidebar-submenu__img"
            src={deleted}
            alt="deleted"
          />
          <span className="profile-sidebar-submenu__text">Deleted videos</span>
        </NavLink>
      </li>


      <div className={'profile-sidebar-submenu__new-message-container'}>
        <img src={newVideo} alt="new video"/>
        <p className={'profile-sidebar-submenu__new-message-container__title'}>Upload</p>
        <p className={'profile-sidebar-submenu__new-message-container__subTitle'}>New Video</p>
        <p className={'profile-sidebar-submenu__new-message-container__text'}>
          <span>Shipspoting </span>
          lets you communicate with millions members across the world
        </p>
        <NavLink
          to={`/video/new-video`}
        >
          <button className={'profile-sidebar-submenu__new-message-container__button'}>Upload Video</button>
        </NavLink>
      </div>
    </ul>
  )};

export default VideoSidebarSubmenu;
