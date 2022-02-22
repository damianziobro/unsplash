import {Listing} from "../../components/Listing";
import {useAppSelector} from "../../app/hooks";
import {wishlistPhotos} from "../../features/wishlist/wishlistSlice";

export const Wishlist = () => {
    const wishlistStore = useAppSelector(wishlistPhotos).wishlistPhotos;

    return (
        <Listing photos={wishlistStore} />
    )
}