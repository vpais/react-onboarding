import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons({ currentValue, setNewValue, possibleValues }) {

    return (
        <ToggleButtonGroup
            color="primary"
            value={currentValue}
            exclusive
            onChange={(e) => { setNewValue(e.target.value) }}
            aria-label="time window"
        >
            {possibleValues.map((value) => (
                <ToggleButton key={value} value={value} aria-label={value}>
                    {value}
                </ToggleButton>)
            )}
        </ToggleButtonGroup>
    );
}