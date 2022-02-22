import {ListingIcon} from "../../ListingIcon";
import {WishlistIcon} from "../../WishlistIcon";
import './index.scss';

export enum NavigationItemIcon {
    Wishlist = 'Wishlist',
    Listing = 'Listing'
}

interface Props {
    iconType: NavigationItemIcon
    active?: boolean
}

export const NavigationItem = ({iconType, active}: Props) => {
    return (
        <div className={`NavigationItem ${active ? 'NavigationItem--active' : ''}`}>
            {iconType === NavigationItemIcon.Listing && <ListingIcon/>}
            {iconType === NavigationItemIcon.Wishlist && <WishlistIcon/>}
        </div>
    )
}