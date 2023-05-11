import { useState, useEffect } from 'react';
import { getTvshows } from "../tvshows";
import { useLoaderData } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TvShow() {
    const [tvshows, setTvshows] = useState(null);
    const [timeWindow, setTimeWindow] = useState('day');

    useEffect(
        () => { 
            getTvshows(timeWindow)
            .then((response) => {setTvshows(response.results)}) 
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
            <h1>Trending TV Shows</h1>
            <ToggleButtons />
            {tvshows && tvshows.length ? (
                <ol>
                    {tvshows.map((tvshow) => (
                        <li key={tvshow.id}>
                            <h2>{tvshow.name}</h2>
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

