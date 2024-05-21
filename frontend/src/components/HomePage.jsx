import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api_helpers/api_helpers'

const HomePage = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((error) => console.log(error))
    }, [])
    console.log(movies)

    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}  >

            <Box margin={'auto'} width={"80%"} height={"40vh"} padding={2} >
                <img style={{ borderRadius: "20px" }} width={"100%"} height={"100%"} src="https://www.tallengestore.com/cdn/shop/products/LordOfTheRings-FellowshipOfTheRing-HollywoodMoviePoster_ab38af96-9cf9-4611-b4d9-c45474e257f0.jpg?v=1630764631" alt="lordoftherings" />
            </Box>

            <Box padding={5} margin={'auto'}>
                <Typography variant='h4' textAlign={'center'}  > Latest Release </Typography>
            </Box>

            <Box display={'flex'} margin={'auto'} width={'80%'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                {movies && movies.slice(0, 4).map((movie, index) => <MovieItem id={movie._id}
                    title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate}
                    key={index} />)}
            </Box>

            <Box display={'flex'} padding={5} margin={'auto'}>
                <Button LinkComponent={Link} to='/movies' sx={{
                    margin: 'auto', color: 'white', border: '4px solid #900C3F',
                    paddingX: '25px', paddingY: '10px', borderRadius: '40px', ":hover": { bgcolor: '#900C3F' }
                }}>
                    Load More Films
                </Button>
            </Box>

        </Box >
    )
}

export default HomePage