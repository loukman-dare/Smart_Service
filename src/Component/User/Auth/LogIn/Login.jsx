import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Stack, TextField, Typography,Button, InputLabel, Input, InputAdornment, IconButton,FormControl } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
  return (
    <Stack direction='column' sx={{width:'50%',my:"200px",mx:'auto'}}>
        <Typography variant='h5' color='primary' textAlign='center' mb='50px'>LogIn to your account</Typography>
        <form>
            <Stack rowGap={5}>
                <TextField type='email' label="input your Email" required size='small'  sx={{width:'95%','&:hover':{outline:"none",border:'none'}}} />
                    <TextField
                     sx={{width:'95%','&:hover':{outline:"none",border:'none'}}}
                        id="standard-adornment-password"
                        label="password"
                        type={showPassword ? 'text' : 'password'}
                        size='small'
                        InputProps={{
                            endAdornment: <InputAdornment position="start"><IconButton onClick={()=>setShowPassword(show=>!show)} sx={{'&:focus':{outline:"none"}}}>{showPassword?<VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>,
                          }}
                        />
                <Button sx={{width:'50%',m:"auto"}} variant="contained" >Login</Button>
                
            </Stack>
        </form>
    </Stack>
  )
}

export default Login