import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PhotoType} from "../../types/PhotoTypes";
import {RootState} from "../../app/store";

export interface WishlistState {
    wishlistPhotos: PhotoType[]
}

const initialState: WishlistState = {
    wishlistPhotos: []
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addPhotoToWishlist: (state, action: PayloadAction<PhotoType>) => {
            state.wishlistPhotos = [...state.wishlistPhotos, action.payload]
        },
        removePhotoFromWishlist: (state, action: PayloadAction<string>) => {
            state.wishlistPhotos = [...state.wishlistPhotos.filter(photo => photo.id !== action.payload)]
        },
    },
});

export const wishlistPhotos = (state: RootState) => state.wishlistPhotos;

export const {addPhotoToWishlist, removePhotoFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
