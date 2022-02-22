import {useEffect, useState} from "react";
import {apiClient} from "../../utils/apiClient";
import {PhotoType} from "../../types/PhotoTypes";
import {Listing} from "../../components/Listing";

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

    if (loading || !photos) return <div>Loading...</div>
    if (error) return <div>Error</div>
    return (
        <Listing photos={photos} />
    )
}