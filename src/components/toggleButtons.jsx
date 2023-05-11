import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons({currentTimeWindow, setNewTimeWindow}) {

    return (
        <ToggleButtonGroup
            color="primary"
            value={currentTimeWindow}
            exclusive
            onChange={(e) => {setNewTimeWindow(e.target.value)}}
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