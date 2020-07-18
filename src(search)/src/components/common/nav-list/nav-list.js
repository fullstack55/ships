import React, {useState} from "react";
import './nav-list.sass';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


const NavList  = ({label, redirects}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <div className={'nav-list'}>
            <span onClick={toggle} className={'nav-list__label'}>{label}</span>
            {
                isOpen ?
                <div className={'nav-list__links-container'}>
                    {redirects.map((redirect , index) =>
                        <NavLink
                            key={index}
                            to={redirect.to}
                            className="nav-list__links-container__link"
                            activeClassName="nav-list__links-container__link_active"
                            onClick={toggle}
                        >
                            {redirect.label}
                        </NavLink>
                    )}
                </div> : null
            }

        </div>
    )
};
NavList.propTypes = {
    label: PropTypes.string,
    redirects: PropTypes.array,
}
export default NavList
