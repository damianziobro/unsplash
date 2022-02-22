import {Link} from "react-router-dom";
import './index.scss';
import {WishlistIcon} from "../WishlistIcon";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addPhotoToWishlist, removePhotoFromWishlist, wishlistPhotos} from "../../features/wishlist/wishlistSlice";
import {PhotoType} from "../../types/PhotoTypes";

interface Props {
    photo: PhotoType
}

export const ImageCard = ({photo}: Props) => {
    const dispatch = useAppDispatch();

    const wishlistStore = useAppSelector(wishlistPhotos);
    const isAddedToWishlist = wishlistStore.wishlistPhotos.find((wishlistPhoto: PhotoType) => wishlistPhoto.id === photo.id);

    const handleAddToWishlistToggle = () => {
        if (isAddedToWishlist) {
            dispatch(removePhotoFromWishlist(photo.id))
        } else {
            dispatch(addPhotoToWishlist(photo))
        }
    }

    return (
        <div className={'ImageCard'}>
            <Link to={`/details/${photo.id}`} >
                <img src={photo.urls.regular} className={'ImageCard__image'}/>
            </Link>
            <button
                className={`ImageCard__wishlistButton ${isAddedToWishlist ? 'ImageCard__wishlistButton--liked' : ''}`}
                onClick={handleAddToWishlistToggle}>
                <WishlistIcon className={'ImageCard__wishlistIcon'}/>
            </button>
        </div>

    )
}