import './index.scss';
import {useEffect, useState} from "react";
import {PhotoType} from "../../types/PhotoTypes";
import {apiClient} from "../../utils/apiClient";
import {FetchingStatus} from "../FetchingStatus";
import {useParams} from "react-router-dom";
import {WishlistIcon} from "../WishlistIcon";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addPhotoToWishlist, removePhotoFromWishlist, wishlistPhotos} from "../../features/wishlist/wishlistSlice";
import {CloseIcon} from "../CloseIcon";

export const Modal = () => {
    const {imageId} = useParams();
    const dispatch = useAppDispatch();

    const [photo, setPhoto] = useState<any>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const wishlistStore = useAppSelector(wishlistPhotos);

    useEffect(() => {
        setLoading(true);
        setError(false);
        apiClient(`/photos/${imageId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: any) => {
                setPhoto(data);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading || !photo) return <FetchingStatus status={'Loading...'}/>
    if (error) return <FetchingStatus status={'Something went wrong...'}/>

    const isAddedToWishlist = wishlistStore.wishlistPhotos.find((wishlistPhoto: PhotoType) => wishlistPhoto.id === photo.id);

    const handleAddToWishlistToggle = () => {
        if (isAddedToWishlist) {
            dispatch(removePhotoFromWishlist(photo.id))
        } else {
            dispatch(addPhotoToWishlist(photo))
        }
    }

    return (
        <div className={'Modal'}>
            <div className={'Modal__inner'}>
                <button className={'Modal__close-button'}><CloseIcon/></button>
                <div className={'Modal__first-column'}>
                    <img src={photo.urls.regular} className={'Modal__image'}/>
                </div>
                <div className={'Modal__second-column'}>
                    <button onClick={handleAddToWishlistToggle} className={'Modal__add-to-wishlist-button'}>
                        <WishlistIcon/>
                        {isAddedToWishlist ? 'Unlike' : 'Like'}
                    </button>
                    <h2>{photo.description}</h2>
                    <span>{`${photo.user.first_name} ${photo.user.last_name}`}</span>
                    <div className={'Modal__technical-info'}>
                        <span className={'Modal__technical-info-label'}>Camera make</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.make}</span>
                        <span className={'Modal__technical-info-label'}>Camera model</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.model}</span>
                        <span className={'Modal__technical-info-label'}>Focal length</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.focal_length}</span>
                        <span className={'Modal__technical-info-label'}>Aperture</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.aperture}</span>
                        <span className={'Modal__technical-info-label'}>Shutter speed</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.focal_length}</span>
                        <span className={'Modal__technical-info-label'}>ISO</span>
                        <span className={'Modal__technical-info-description'}>{photo.exif.iso}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}