import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
    return (
        <Card sx={{
            width: 250, height: 300, borderRadius: 5, margin: 1, ":hover": {
                boxShadow: "10px 10px 20px #ccc",
            }
        }}>

            <img height={'150'} width='100%' src={posterUrl} alt={title} />


            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(releaseDate).toDateString()}
                </Typography>
            </CardContent>

            <CardActions>
                <Button sx={{
                    paddingX: "40px", margin: 'auto', border: '2px solid green',
                    borderRadius: '20px', ":hover": { bgcolor: 'green', color: 'white', }
                }} size="small" LinkComponent={Link} to={`/booking/${id}`} >Book</Button>
            </CardActions>

        </Card >
    )
}

export default MovieItem