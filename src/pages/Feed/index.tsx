import {useEffect, useState} from "react";
import {apiClient} from "../../utils/apiClient";
import {PhotoType} from "../../types/PhotoTypes";
import {Listing} from "../../components/Listing";
import {FetchingStatus} from "../../components/FetchingStatus";

export const Feed = () => {
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        apiClient(`/photos`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: PhotoType[]) => {
                setPhotos(data);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading || !photos) return <FetchingStatus status={'Loading...'}/>
    if (error) return <FetchingStatus status={'Something went wrong...'}/>

    return (
        <Listing photos={photos}/>
    )
}