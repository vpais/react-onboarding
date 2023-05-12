import { useState, useEffect } from 'react';
import { getTvShows } from "../utils/http.utils";
import ToggleButtons from "../components/toggleButtons";
import ResponsiveAppBar from '../components/responsiveAppBar';
import CircularProgress from '@mui/material/CircularProgress';
import ImagesList from '../components/imagesList';

export default function TrendingMedia() {
    const [tvShows, setTvShows] = useState(null);
    const [timeWindow, setTimeWindow] = useState('day');
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            setLoading(true);
            getTvShows(timeWindow)
                .then((data) => { 
                    setTvShows(data.results); 
                    setLoading(false); 
                })
        }, [timeWindow])

    return (
        <div>
            <ResponsiveAppBar />
            <h1>Trending TV Shows</h1>
            <ToggleButtons currentValue={timeWindow} setNewValue={setTimeWindow} possibleValues={["day", "week"]}/>
            {!loading ? tvShows && tvShows.length ? (
                <ImagesList data={tvShows}/>
            ) : (
                <p>
                    <h1>No TV Shows</h1>
                </p>
            ) : (
                <p>
                    <CircularProgress />
                </p>
            )}

        </div>
    )
}

