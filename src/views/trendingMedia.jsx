import { useState, useEffect } from 'react';
import { getTvShows } from "../utils/http.utils";
import ToggleButtons from "../components/toggleButtons";
import CircularProgress from '@mui/material/CircularProgress';
import ImagesList from '../components/imagesList';
import Typography from '@mui/material/Typography';

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
        <>
            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '-0.5px', color: '#333', marginTop: '24px', marginBottom: '16px' }}>
                Trending <span style={{ color: '#ff5722' }}>TV Shows</span>
            </Typography>
            <ToggleButtons currentValue={timeWindow} setNewValue={setTimeWindow} possibleValues={["day", "week"]} sx={{ marginBottom: '24px' }} />
            {!loading ? tvShows && tvShows.length ? (
                <ImagesList data={tvShows} />
            ) : (
                <p>
                    <h1>No TV Shows</h1>
                </p>
            ) : (
                <p>
                    <CircularProgress />
                </p>
            )}

        </>
    )
}

