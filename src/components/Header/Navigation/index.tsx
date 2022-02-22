import {NavLink} from "react-router-dom";
import {NavigationItem, NavigationItemIcon} from "../NavigationItem";
import './index.scss';

export const Navigation = () => {
    return (
        <ul className={'Navigation'}>
            <li className={'Navigation__list'}>
                <NavLink to="/"
                         className={({isActive}) => isActive ? "Navigation__item--active" : ""}><NavigationItem
                    iconType={NavigationItemIcon.Listing}/></NavLink>
                <NavLink to="/wishlist"
                         className={({isActive}) => isActive ? "Navigation__item--active" : ""}><NavigationItem
                    iconType={NavigationItemIcon.Wishlist}/></NavLink>
            </li>
        </ul>
    )
}