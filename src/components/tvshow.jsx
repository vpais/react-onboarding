import { useState, useEffect } from 'react';
import { getTvshows } from "../tvshows";
import { useLoaderData } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export async function loader(timeWindow) {
    const tvshows = await getTvshows(timeWindow);
    return tvshows.results;
}

export default function TvShow() {
    const tvshows = useLoaderData();
    const [timeWindow, setTimeWindow] = useState('day');

    useEffect(() => { if (typeof timeWindow === 'string' || timeWindow instanceof String) { loader(timeWindow) } }, [timeWindow])

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
                <ToggleButton value="month" aria-label="Month">
                    Month
                </ToggleButton>
                <ToggleButton value="year" aria-label="Year">
                    Year
                </ToggleButton>
            </ToggleButtonGroup>
        );
    }


    return (
        <div>
            <nav>
                <h1>Trending TV Shows</h1>
                <ToggleButtons />
                {tvshows.length ? (
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
            </nav>
        </div>
    )
}

