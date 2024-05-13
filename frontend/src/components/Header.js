import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Box } from '@mui/system';
import { getAllMovies } from '../api_helpers/api_helpers';

const dummyArray = ["memory", "GOD", "RE"]

const Header = () => {

    const [value, setValue] = useState(0)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch(error => console.log(error))
    }, [])

    return (
        <AppBar sx={{ bgcolor: "#C60C30" }}>
            <Toolbar>
                <Box width={"10%"}>
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin={'auto'}>
                    <Autocomplete
                        freeSolo
                        options={dummyArray.map((option) => option)}
                        renderInput={(params) =>
                            <TextField sx={{ input: { color: "white" } }} variant="standard" {...params} placeholder="Search Movies" />}
                    />
                </Box>
                <Box display={'flex'}>
                    <Tabs value={value} indicatorColor='secondary' textColor='inherit' onChange={(e, val) => setValue(val)}>
                        <Tab label='Movies' />
                        <Tab label='Admin' />
                        <Tab label='Auth' />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header