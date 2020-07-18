import React from "react";
import {NavLink} from "react-router-dom";

import uploaded from "../../../../assets/images/desktop/photo/uploaded.svg";
import favorite from "../../../../assets/images/desktop/photo/favorite.svg";
import commToPhoto from "../../../../assets/images/desktop/photo/commToPhoto.svg";
import commByMe from "../../../../assets/images/desktop/photo/commByMe.svg";
import deleted from "../../../../assets/images/desktop/photo/delete.svg"
import settings from "../../../../assets/images/desktop/photo/settings.svg"
import newPhoto from "../../../../assets/images/desktop/photo/uploadedNewPhoto.svg";

import './photo-sidebar-submenu.sass'
import "../profile-sidebar-submenu/profile-sidebar-submenu.sass"

const PhotoSidebarSubmenu = () => {

  return (
    <ul className="profile-sidebar-submenu">


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/photo/uploaded`}
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
          to={`/photo/favorites`}
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
          to={`/photo/comments-to-my-photo`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img className="profile-sidebar-submenu__img" src={commToPhoto} alt="comment"/>
          <span className="profile-sidebar-submenu__text">Comments to my photo</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/photo/comments-made-by-me`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img className="profile-sidebar-submenu__img" src={commByMe} alt="comment"/>
          <span className="profile-sidebar-submenu__text">Comments made by me</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/photo/deleted-photos`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img
            className="profile-sidebar-submenu__img"
            src={deleted}
            alt="deleted"
          />
          <span className="profile-sidebar-submenu__text">Deleted photos</span>
        </NavLink>
      </li>


      <li className="profile-sidebar-submenu__item">
        <NavLink
          to={`/photo/settings`}
          className="profile-sidebar-submenu__link"
          activeClassName="profile-sidebar-submenu__link_active"
        >
          <img
            className="profile-sidebar-submenu__img"
            src={settings}
            alt="settings"
          />
          <span className="profile-sidebar-submenu__text">Settings</span>
        </NavLink>
      </li>


      <div className={'profile-sidebar-submenu__new-message-container'}>
        <img src={newPhoto} alt="new photo"/>
        <p className={'profile-sidebar-submenu__new-message-container__title'}>Upload</p>
        <p className={'profile-sidebar-submenu__new-message-container__subTitle'}>New Photo</p>
        <p className={'profile-sidebar-submenu__new-message-container__text'}>
          <span>Shipspoting </span>
          lets you communicate with millions members across the world
        </p>
        <NavLink
          to={`/photo/new-photo`}
        >
          <button className={'profile-sidebar-submenu__new-message-container__button'}>Upload Photo</button>
        </NavLink>
      </div>
    </ul>
  )
};

export default PhotoSidebarSubmenu;
