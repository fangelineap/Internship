import { Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../movie-card/MovieTrendCard";

interface MovieTrendListProps {
    trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
    console.log("Trending list: ", trendingList);
    return (
        <Grid container spacing={2}
        >
            {trendingList.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieTrendCard movie={movie}></MovieTrendCard>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieTrendList;
