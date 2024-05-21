import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, newBooking } from '../../api_helpers/api_helpers';
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';

const Booking = () => {
    const [movie, setMovie] = useState()

    const id = useParams().id;
    console.log(id)

    const [inputs, setInputs] = useState({
        seatNumber: '',
        date: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        newBooking({ ...inputs, movie: movie._id }).then((res) => console.log(res)).catch((error) => console.log(error))
    }

    useEffect(() => {
        getMovieDetails(id).then((res) => setMovie(res.movie)).catch((error) => console.log(error))
    }, [id])
    console.log(movie)

    return (
        <div>
            {
                movie && <Fragment>
                    <Typography padding={3} fontFamily={'fantasy'} variant='h4' textAlign={'center'} >
                        Book Ticket of Movie: {movie.title}
                    </Typography>

                    <Box display={'flex'} justifyContent={'center'}  >

                        <Box display={'flex'} justifyContent={'column'} flexDirection={'column'} padding={3} width={'50%'} marginRight={'auto'} >
                            <img style={{ borderRadius: "30px" }} width={'80%'} height={'300px'} src={movie.posterUrl} alt={movie.title} />
                            <Box width={'80%'} marginTop={3} padding={2} >
                                <Typography paddingTop={2} > {movie.description} </Typography>
                                <Typography fontWeight={'bold'} marginTop={1} >Cast: {movie.actors.map((actor) => actor + " ")} </Typography>
                                <Typography fontWeight={'bold'} marginTop={1} >Release Date: {new Date(movie.releaseDate).toDateString()} </Typography>
                            </Box>
                        </Box>

                        <Box width={'50%'} paddingTop={3} >
                            <form onSubmit={handleSubmit} >
                                <Box padding={5} margin={'auto'} display={'flex'} flexDirection={'column'} >
                                    <FormLabel>Choose your Seat</FormLabel>
                                    <TextField value={inputs.seatNumber} onChange={handleChange} name='seatNumber' type='number' margin='normal' variant='standard' ></TextField>
                                    <FormLabel>Date</FormLabel>
                                    <TextField value={inputs.date} onChange={handleChange} name='date' type='date' margin='normal' variant='standard' ></TextField>
                                    <Button type='submit' sx={{ mt: 3 }} >Enjoy Movie</Button>
                                </Box>
                            </form>
                        </Box>

                    </Box>

                </Fragment>
            }
        </div>
    )
}

export default Booking