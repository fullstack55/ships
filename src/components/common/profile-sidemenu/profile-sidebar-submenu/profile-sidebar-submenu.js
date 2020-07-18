import { NavLink } from "react-router-dom";
import summaryIcon from "../../../../assets/images/desktop/profile/summaryIcon.png";
import statisticsIcon from "../../../../assets/images/desktop/profile/statisticsIcon.png";
import postsIcon from "../../../../assets/images/desktop/profile/postsIcon.png";
import buddiesIcon from "../../../../assets/images/desktop/profile/buddiesIcon.png";
import modifyIcon from "../../../../assets/images/desktop/profile/modifyIcon.png";
import React, {useState} from "react";
import "./profile-sidebar-submenu.sass"

const ProfileSidebarSubmenu = () => {
    const [isOpened,setIsOpened] = useState(false);
    const toggle = () => {
        setIsOpened(!isOpened);
    };

    return (
    <ul className="profile-sidebar-submenu">
        <li className="profile-sidebar-submenu__item">
            <NavLink
                to={`/profile/profile/summary`}
                className="profile-sidebar-submenu__link"
                activeClassName="profile-sidebar-submenu__link_active"
            >
                <img
                    className="profile-sidebar-submenu__img"
                    src={summaryIcon}
                    alt=""
                />
                <span className="profile-sidebar-submenu__text">Summary</span>
            </NavLink>
        </li>
        <li className="profile-sidebar-submenu__item">
            <NavLink
                to={`/profile/profile/statistics`}
                className="profile-sidebar-submenu__link"
                activeClassName="profile-sidebar-submenu__link_active"
            >
                <img
                    className="profile-sidebar-submenu__img"
                    src={statisticsIcon}
                    alt=""
                />
                <span className="profile-sidebar-submenu__text">My statistics</span>
            </NavLink>
        </li>
        <li className="profile-sidebar-submenu__item">
            <NavLink
                to={`/profile/profile/posts`}
                className="profile-sidebar-submenu__link"
                activeClassName="profile-sidebar-submenu__link_active"
            >
                <img className="profile-sidebar-submenu__img" src={postsIcon} alt=""/>
                <span className="profile-sidebar-submenu__text">My posts</span>
            </NavLink>
        </li>
        <li className="profile-sidebar-submenu__item">
            <NavLink
                to={`/profile/profile/buddies`}
                className="profile-sidebar-submenu__link"
                activeClassName="profile-sidebar-submenu__link_active"
            >
                <img
                    className="profile-sidebar-submenu__img"
                    src={buddiesIcon}
                    alt=""
                />
                <span className="profile-sidebar-submenu__text">Buddies list</span>
            </NavLink>
        </li>
        <li className="profile-sidebar-submenu__item">
            <div
                onClick={toggle}
                className={'profile-sidebar-submenu__link ' + (isOpened ? 'profile-sidebar-submenu__link_active' : '')}>
                <img className="profile-sidebar-submenu__img" src={modifyIcon} alt=""/>
                <span className="profile-sidebar-submenu__text">Modify Profile</span>
                {isOpened ?
                    <span className={'profile-sidebar-submenu__arrow-blue'} /> :
                    <span className={'profile-sidebar-submenu__arrow'} />}

            </div>
            {isOpened &&
            <ul>
                <NavLink
                    to={`/profile/profile/account-settings`}
                    className="profile-sidebar-submenu__sub-link"
                    activeClassName="profile-sidebar-submenu__sub-link_active"
                >
                    <span className="profile-sidebar-submenu__sub-text">Account Related Settings</span>
                </NavLink>
                <NavLink
                    to={`/profile/profile/forum-profile-info`}
                    className="profile-sidebar-submenu__sub-link"
                    activeClassName="profile-sidebar-submenu__sub-link_active"
                >
                    <span className="profile-sidebar-submenu__sub-text">Forum Profile Info</span>
                </NavLink>
                <NavLink
                    to={`/profile/profile/look-layout-preferences`}
                    className="profile-sidebar-submenu__sub-link"
                    activeClassName="profile-sidebar-submenu__sub-link_active"
                >
                    <span className="profile-sidebar-submenu__sub-text">Look and Layout Preferences</span>
                </NavLink>
                <NavLink
                    to={`/profile/profile/notification-and-email`}
                    className="profile-sidebar-submenu__sub-link"
                    activeClassName="profile-sidebar-submenu__sub-link_active"
                >
                    <span className="profile-sidebar-submenu__sub-text">Notification and Email</span>
                </NavLink>
                <NavLink
                    to={`/profile/profile/personal-message-options`}
                    className="profile-sidebar-submenu__sub-link"
                    activeClassName="profile-sidebar-submenu__sub-link_active"
                >
                    <span className="profile-sidebar-submenu__sub-text">Personal Message Option</span>
                </NavLink>
            </ul>
            }
        </li>
    </ul>
)};

export default ProfileSidebarSubmenu;
