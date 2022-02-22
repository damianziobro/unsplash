import {ImageCard} from "../../components/ImageCard";
import {PhotoType} from "../../types/PhotoTypes";
import './index.scss';

interface Props {
    photos: PhotoType[]
}

export const Listing = ({photos}: Props) => {
    return (
        <div className={'Listing'}>
            {photos.map((photo) => (
                <ImageCard
                    key={photo.id}
                    src={photo.urls.regular}
                    id={photo.id}
                    isLiked={true}
                    onWishlistIconClick={() => console.log('Wishlist button clicked')}
                />
            ))}
        </div>
    )
}