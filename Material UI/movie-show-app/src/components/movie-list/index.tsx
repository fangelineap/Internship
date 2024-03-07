import { Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieCard from '../movie-card/MovieCard'

interface MovieListProps {
    recommendedList: MovieDataType[]
}

const MovieList = ({ recommendedList }: MovieListProps) => {
    console.log('Recommended list: ', recommendedList)
  return (
    <Grid container spacing={1}>
        {recommendedList.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                    <MovieCard movie={movie}></MovieCard>
                </Paper>
            </Grid>
        ))}
    </Grid>
  )
}

export default MovieList