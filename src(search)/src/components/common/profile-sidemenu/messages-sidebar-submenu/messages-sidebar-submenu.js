import { NavLink } from "react-router-dom";
import inbox from "../../../../assets/images/desktop/messages/InboxIcon.svg";
import outbox from "../../../../assets/images/desktop/messages/OutboxIcon.svg";
import search from "../../../../assets/images/desktop/messages/SearchMessagesIcon.svg";
import labels from "../../../../assets/images/desktop/messages/ManageLabelsIcon.svg";
import prune from "../../../../assets/images/desktop/messages/PruneMessageIcon.svg";
import newMessage from "../../../../assets/images/desktop/messages/NewMessegeIcon.svg"
import React, {useState} from "react";
import './messages-sidebar-submenu.sass'
import "../profile-sidebar-submenu/profile-sidebar-submenu.sass"

const MessagesSidebarSubMenu = () => {
    const [isOpened,setIsOpened] = useState(false);
    const toggle = () => {
        setIsOpened(!isOpened);
    };

    return (
        <ul className="profile-sidebar-submenu">
            <li className="profile-sidebar-submenu__item">
                <NavLink
                    to={`/messages/inbox`}
                    className="profile-sidebar-submenu__link"
                    activeClassName="profile-sidebar-submenu__link_active"
                >
                    <img
                        className="profile-sidebar-submenu__img"
                        src={inbox}
                        alt="inbox"
                    />
                    <span className="profile-sidebar-submenu__text">Inbox</span>
                </NavLink>
            </li>
            <li className="profile-sidebar-submenu__item">
                <NavLink
                    to={`/messages/outbox`}
                    className="profile-sidebar-submenu__link"
                    activeClassName="profile-sidebar-submenu__link_active"
                >
                    <img
                        className="profile-sidebar-submenu__img"
                        src={outbox}
                        alt="outbox"
                    />
                    <span className="profile-sidebar-submenu__text">OutBox</span>
                </NavLink>
            </li>
            <li className="profile-sidebar-submenu__item">
                <NavLink
                    to={`/messages/search`}
                    className="profile-sidebar-submenu__link"
                    activeClassName="profile-sidebar-submenu__link_active"
                >
                    <img className="profile-sidebar-submenu__img" src={search} alt="search"/>
                    <span className="profile-sidebar-submenu__text">Search Messages</span>
                </NavLink>
            </li>
            <li className="profile-sidebar-submenu__item">
                <div
                    onClick={toggle}
                    className={'profile-sidebar-submenu__link ' + (isOpened ? 'profile-sidebar-submenu__link_active' : '')}>
                    <img className="profile-sidebar-submenu__img" src={labels} alt="labels"/>
                    <span className="profile-sidebar-submenu__text">Manage Labels</span>
                    {isOpened ?
                        <span className={'profile-sidebar-submenu__arrow-blue'} /> :
                        <span className={'profile-sidebar-submenu__arrow'} />}

                </div>
                {isOpened &&
                <ul>
                    <NavLink
                        to={`/messages/manage-labels`}
                        className="profile-sidebar-submenu__sub-link"
                        activeClassName="profile-sidebar-submenu__sub-link_active"
                    >
                        <span className="profile-sidebar-submenu__sub-text">test</span>
                    </NavLink>
                    <NavLink
                        to={`/messages/manage-labels`}
                        className="profile-sidebar-submenu__sub-link"
                        activeClassName="profile-sidebar-submenu__sub-link_active"
                    >
                        <span className="profile-sidebar-submenu__sub-text">design test 1</span>
                    </NavLink>
                    <NavLink
                        to={`/messages/manage-labels`}
                        className="profile-sidebar-submenu__sub-link"
                        activeClassName="profile-sidebar-submenu__sub-link_active"
                    >
                        <span className="profile-sidebar-submenu__sub-text">another text</span>
                    </NavLink>
                </ul>
                }
            </li>
            <li className="profile-sidebar-submenu__item">
                <NavLink
                    to={`/messages/prune`}
                    className="profile-sidebar-submenu__link"
                    activeClassName="profile-sidebar-submenu__link_active"
                >
                    <img
                        className="profile-sidebar-submenu__img"
                        src={prune}
                        alt="prune"
                    />
                    <span className="profile-sidebar-submenu__text">Prune Message</span>
                </NavLink>
            </li>
            <div className={'profile-sidebar-submenu__new-message-container'}>
                <img src={newMessage} alt="new message"/>
                <p className={'profile-sidebar-submenu__new-message-container__title'}>Create</p>
                <p className={'profile-sidebar-submenu__new-message-container__subTitle'}>New Message</p>
                <p className={'profile-sidebar-submenu__new-message-container__text'}>
                    <span>Shipspoting </span>
                    lets you communicate with millions members across the world
                </p>
                <NavLink
                    to={`/messages/new-message`}
                >
                    <button className={'profile-sidebar-submenu__new-message-container__button'}>New Message</button>
                </NavLink>
            </div>
        </ul>
    )};

export default MessagesSidebarSubMenu;
