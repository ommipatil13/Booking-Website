import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRounedIcon from '@mui/icons-material/CloseRounded'
import { Link } from 'react-router-dom';


const labelStyle = { mt: 1, mb: 1 };

const AuthForm = ({ onSubmit, isAdmin }) => {

    const [isSignUp, setIsSignUp] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
        // console.log(inputs)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs)
        onSubmit({ inputs, signup: isAdmin ? false : isSignUp })

    }



    return (
        <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}  >
            <Box sx={{ ml: 'auto', }} >
                <IconButton LinkComponent={Link} to='/' > <CloseRounedIcon /> </IconButton>
            </Box>
            <Typography variant='h4' textAlign={'center'}  > {isSignUp ? "Register" : "Login"} </Typography>
            <form onSubmit={handleSubmit} >
                <Box padding={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} width={400} alignContent={'center'}
                    margin={'auto'} >

                    {
                        !isAdmin && isSignUp && <>
                            <FormLabel sx={labelStyle} >Name</FormLabel>
                            <TextField variant='standard' margin='normal' type='text' name='name'
                                value={inputs.name} onChange={handleChange} />
                        </>
                    }

                    <FormLabel sx={labelStyle} >Email</FormLabel>
                    <TextField variant='standard' margin='normal' type='email' name='email'
                        value={inputs.email} onChange={handleChange} />

                    <FormLabel sx={labelStyle} >Password</FormLabel>
                    <TextField variant='standard' margin='normal' type='password' name='password'
                        value={inputs.password} onChange={handleChange} />

                    <Button type='submit' fullWidth sx={{ mt: 2, borderRadius: 10, bgcolor: '#C60C31', }} variant='contained' >
                        {isSignUp ? "Register" : "Login"}
                    </Button>

                    {!isAdmin && <Button onClick={() => setIsSignUp(!isSignUp)} fullWidth sx={{ mt: 2, borderRadius: 10 }}  >
                        {isSignUp ? "Already Register Login Here?" : "New User Register Here?"} </Button>}
                </Box>
            </form>
        </Dialog >
    )
}

export default AuthForm