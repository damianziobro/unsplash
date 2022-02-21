import {Link} from "react-router-dom";
import {NavigationItem, NavigationItemIcon} from "../NavigationItem";
import './index.scss';

export const Navigation = () => {
    return (
        <ul className={'Navigation'}>
            <li>
                <Link to="/"><NavigationItem iconType={NavigationItemIcon.Listing} active/></Link>
                <Link to="/wishlist"><NavigationItem iconType={NavigationItemIcon.Wishlist}/></Link>
            </li>
        </ul>
    )
}