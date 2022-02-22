import {Listing} from "../../components/Listing";
import {useAppSelector} from "../../app/hooks";
import {wishlistPhotos} from "../../features/wishlist/wishlistSlice";
import {FetchingStatus} from "../../components/FetchingStatus";

export const Wishlist = () => {
    const wishlistStore = useAppSelector(wishlistPhotos).wishlistPhotos;

    if (wishlistStore.length <= 0) {
        return <FetchingStatus status={'Your wishlist is empty'}/>
    }

    return (
        <Listing photos={wishlistStore} />
    )
}