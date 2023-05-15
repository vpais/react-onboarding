import ImagesList from "../components/imagesList"
import { getTvShows } from "../utils/http.utils";
import { useLoaderData } from "react-router-dom";
import { CircularProgress } from '@mui/material';

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return getTvShows(q)
        .then((data) => {
            return data.results;
        })
}

export default function TvShows() {
    const tvShows = useLoaderData();
    return (
        <>
            {tvShows ? (
                tvShows.length?(
                    <ImagesList data={tvShows} />
                ) : (
                    <>No tv shows found</>
                )
            ) : (
                <CircularProgress />
            )}
        </>
    )
}
