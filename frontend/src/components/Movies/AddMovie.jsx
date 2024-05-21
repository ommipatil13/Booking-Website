import React, { useState } from 'react';
import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material';
import { addMovie } from '../../api_helpers/api_helpers';

const AddMovie = () => {

    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        posterUrl: '',
        releaseDate: '',
        // actor: '',
        featured: false
    })

    const [actors, setActors] = useState([])
    const [actor, setActor] = useState('')

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs, actors)
        addMovie({ ...inputs, actors }).then((res) => console.log(res)).catch((error) => console.log(error))

    }

    return (
        <div >
            <form onSubmit={handleSubmit}  >
                <Box width={'50%'} padding={8} margin='auto' display={'flex'} flexDirection={'column'}
                    boxShadow={"5px 5px 10px 5px #ccc"} borderRadius={6} marginTop={4} marginBottom={4} bgcolor={'#222'} >
                    <Typography textAlign={'center'} variant='h4' fontFamily={'verdana'} color={'black'} >
                        Create Movie
                    </Typography>

                    <FormLabel sx={{ mt: 6 }} >Title</FormLabel>
                    <TextField value={inputs.title} onChange={handleChange} name='title' variant='standard' margin='normal' ></TextField>

                    <FormLabel>Description</FormLabel>
                    <TextField value={inputs.description} onChange={handleChange} name='description' variant='standard' margin='normal' ></TextField>

                    <FormLabel>Poster Url</FormLabel>
                    <TextField value={inputs.posterUrl} onChange={handleChange} name='posterUrl' variant='standard' margin='normal' ></TextField>

                    <FormLabel>Release Date</FormLabel>
                    <TextField type='date' value={inputs.releaseDate} onChange={handleChange} name='releaseDate' variant='standard' margin='normal' ></TextField>

                    <FormLabel>Actor</FormLabel>
                    <Box display={'flex'} >
                        <TextField value={actor} onChange={(e) => setActor(e.target.value)} name='actor' variant='standard' margin='normal' ></TextField>
                        <Button onClick={() => {
                            setActors([...actors, actor])
                            setActor('')
                        }} >
                            Add</Button>
                    </Box>

                    <FormLabel>Featured</FormLabel>
                    <Checkbox name='featured' checked={inputs.featured}
                        onClick={(e) => setInputs((prevState) => ({ ...prevState, featured: e.target.checked }))} sx={{ mr: 'auto' }} />

                    <Button type='submit' variant='contained' sx={{ marginTop: 5, borderRadius: 6 }}  >Add New Movie</Button>

                </Box>
            </form>
        </div >
    )
}

export default AddMovie