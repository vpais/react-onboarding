import { useState, useEffect } from 'react';
import { getTvShows } from "../tvshows";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ResponsiveAppBar from './navbar';

export default function TvShow() {
    const [tvShows, setTvShows] = useState(null);
    const [timeWindow, setTimeWindow] = useState('day');

    useEffect(
        () => { 
            getTvShows(timeWindow)
            .then((response) => {setTvShows(response.results)}) 
        }, [timeWindow])

    function ToggleButtons() {
        const handleTimeWindow = (event, newTimeWindow) => {
            setTimeWindow(newTimeWindow);
        };

        return (
            <ToggleButtonGroup
                color="primary"
                value={timeWindow}
                exclusive
                onChange={handleTimeWindow}
                aria-label="time window"
            >
                <ToggleButton value="day" aria-label="Day">
                    Day
                </ToggleButton>
                <ToggleButton value="week" aria-label="Week">
                    Week
                </ToggleButton>
            </ToggleButtonGroup>
        );
    }


    return (
        <div>
            <ResponsiveAppBar/>
            <h1>Trending TV Shows</h1>
            <ToggleButtons />
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
                    <i>No tvshows</i>
                </p>
            )}
        </div>
    )
}

