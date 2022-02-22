import {ListingIcon} from "../../ListingIcon";
import {WishlistIcon} from "../../WishlistIcon";
import './index.scss';

export enum NavigationItemIcon {
    Wishlist = 'Wishlist',
    Listing = 'Listing'
}

interface Props {
    iconType: NavigationItemIcon
}

export const NavigationItem = ({iconType}: Props) => {
    return (
        <div className={'NavigationItem'}>
            {iconType === NavigationItemIcon.Listing && <ListingIcon/>}
            {iconType === NavigationItemIcon.Wishlist && <WishlistIcon/>}
        </div>
    )
}