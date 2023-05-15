import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        let params = new URLSearchParams({ q: searchTerm }).toString();
        setSearchParams(params);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
            <TextField
                label="Search"
                placeholder="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleInputChange}
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