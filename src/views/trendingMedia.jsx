import { useState, useEffect } from 'react';
import { getTvShows } from "../utils/http.utils";
import ToggleButtons from "../components/toggleButtons";
import ResponsiveAppBar from '../components/navbar';
import CircularProgress from '@mui/material/CircularProgress';

export default function TrendingMedia() {
    const [tvShows, setTvShows] = useState(null);
    const [timeWindow, setTimeWindow] = useState('day');

    useEffect(
        () => { 
            getTvShows(timeWindow)
            .then((data) => {setTvShows(data.results)}) 
        }, [timeWindow])

    return (
        <div>
            <ResponsiveAppBar/>
            <h1>Trending TV Shows</h1>
            <ToggleButtons currentTimeWindow={timeWindow} setNewTimeWindow={setTimeWindow}/>
            {tvShows && tvShows.length ? (
                <ol>
                    {tvShows.map((tvShow) => (
                        <li key={tvShow.id}>
                            <h2>{tvShow.name}</h2>
                        </li>
                    ))}
                </ol>
            ) : (
                <p>
                    <CircularProgress />
                </p>
            )}
        </div>
    )
}

