import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Box } from '@mui/system';
import { getAllMovies } from '../api_helpers/api_helpers';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const dummyArray = ["memory", "GOD", "RE"]

const Header = () => {

    const [value, setValue] = useState(0)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch(error => console.log(error))
    }, [])

    return (
        <AppBar position='sticky' sx={{ bgcolor: "#C60C30", borderRadius: "50px" }} >
            <Toolbar>
                <Box width={"10%"}  >
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin={'auto'}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) =>
                            <TextField sx={{ input: { color: "white" } }} variant="standard" {...params} placeholder="Search Movies" />}
                    />
                </Box>
                <Box display={'flex'}>
                    <Tabs value={value} indicatorColor='secondary' textColor='inherit' onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to='/movies' label='Movies' />
                        <Tab LinkComponent={Link} to='/admin' label='Admin' />
                        <Tab LinkComponent={Link} to='/auth' label='Auth' />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header