import { useLoaderData } from "react-router-dom";
import { getDetails } from "../utils/http.utils";
import { Typography, Box, Grid, Rating } from "@mui/material";

export async function loader({ params }) {
    return getDetails(params.tvShowId).then((data) => {
        return data
    });
}

export default function Details() {
    const imgPath = import.meta.env.VITE_API_IMG_PREFIX + "w200/";
    const tvShow = useLoaderData();

    return (
        <>
            <Grid container spacing={2} sx={{
                marginTop: 2,
                marginLeft: 2
            }}>
                <Grid item>
                    <Box
                    component="img"
                    alt={tvShow.name}
                    src={imgPath + tvShow.poster_path}
                    />
                </Grid>
                <Grid item sx={{maxWidth:"100%", marginRight:2}}>
                    <Typography variant="h5" component="h5">
                        {tvShow.name}
                    </Typography>
                    <Typography variant="h7" component="h7" sx={{fontWeight: 'bold'}}>
                        Overview
                    </Typography>
                    <Typography style={{overflowWrap: 'wrap'}}>
                        {tvShow.overview}
                    </Typography>
                    <Rating
                        name="rating"
                        value={tvShow.vote_average/2}
                        readOnly
                        precision={0.25}
                    />
                </Grid>
            </Grid>
        </>
    );
}
