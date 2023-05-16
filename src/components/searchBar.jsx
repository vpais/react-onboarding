import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <form method='get' action="/search" style={{ marginTop: '16px' }}>
            <TextField
                name="q"
                label="Search for TV Show"
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit" edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#ff5722',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff5722',
                    },
                }}
            />
        </form>
    );
}