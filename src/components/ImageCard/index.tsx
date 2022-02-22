import {Link} from "react-router-dom";
import './index.scss';
import {WishlistIcon} from "../WishlistIcon";
import {SyntheticEvent} from "react";

interface Props {
    src: string
    id: string
    isLiked: boolean
    onWishlistIconClick: (e: SyntheticEvent) => void
}

export const ImageCard = ({id, src, isLiked, onWishlistIconClick}: Props) => {
    return (
        <Link to={`/details/${id}`} className={'ImageCard'}>
            <img src={src} className={'ImageCard__image'}/>
            <button className={`ImageCard__wishlistButton ${isLiked ? 'ImageCard__wishlistButton--liked' : ''}`}
                    onClick={onWishlistIconClick}>
                <WishlistIcon className={'ImageCard__wishlistIcon'}/>
            </button>
        </Link>
    )
}