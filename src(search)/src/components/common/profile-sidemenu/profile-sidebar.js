import React, { useState } from "react";
import ProfileSidebarMenu from "./profile-sidebar-menu/profile-sidebar-menu";
// import ProfileSidebarSubmenu from "./profile-sidebar-submenu/profile-sidebar-submenu";
import PropTypes from "prop-types";
import "./profile-sidebar.sass";

const ProfileSidemenu = ({ className, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`profile-sidebar ${className}`}>
      <div
        className={`profile-sidebar__desktop ${
          isOpened && "profile-sidebar__mobile"
        }`}
      >
        <ProfileSidebarMenu />
        {children}
      </div>
      <div
        className={`profile-sidebar__closed ${
          isOpened && "profile-sidebar__opened"
        }`}
      >
        <span
          className={`profile-sidebar__not-toggled ${
            isOpened && "profile-sidebar__toggled"
          }`}
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
    </div>
  );
};

ProfileSidemenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default ProfileSidemenu;
