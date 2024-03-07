import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../layout";
import { Box, InputAdornment, InputBase, Paper, Typography } from "@mui/material";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/MovieContext";
import SearchIcon from "../../assets/icons/icon-search.svg";

function TVSeries() {
    const [search, setSearch] = useState<string>("");
    const [searchList, setSearchList] = useState<MovieDataType[]>([]);
    const { state } = useContext(MovieContext);

    const { movies } = state;

    const TVSeriesList = movies.filter((item) => item.category === "TV Series");

    const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
        setSearch(e.target.value);
        const newList = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
        .filter((movie) => movie.category === 'TV Series');
        setSearchList(newList);
    };

    return (
        <Layout>
            <Box>
                <Paper
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "default",
                        p: 1,
                        backgroundColor: "#10141f",
                        border: " none",
                    }}
                >
                    <InputBase
                        placeholder="Search TV series"
                        sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
                        value={search}
                        onChange={handleSearch}
                        startAdornment={
                            <InputAdornment position="start">
                                <img src={SearchIcon} alt="search icon" width={20} height={20} />
                            </InputAdornment>
                        }
                    />
                </Paper>
            </Box>
            <Box p={2} px={4}>
                {search === "" ? (
                    <Box width="100%">
                        <Box width="100%">
                            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                                TV Series
                            </Typography>
                            <MovieList recommendedList={search === "" ? TVSeriesList : searchList}></MovieList>
                        </Box>
                    </Box>
                ) : (
                    <Box width="100%">
                        <Typography>
                            Found {searchList.length} results for "{search}" {""}
                        </Typography>
                        <MovieList recommendedList={searchList}></MovieList>
                    </Box>
                )}
            </Box>
        </Layout>
    );
}

export default TVSeries;
