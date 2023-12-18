import { Box, Stack, TextField,Typography,Checkbox, Button, Avatar, Link } from '@mui/material'
import React, { useRef, useState } from 'react'
import logo from '../../../../assets/nav/logo.svg'
import { Person, Send,Upload } from '@mui/icons-material'
import MapHome from '../../HomeUSer.jsx/HomeUserSections.jsx/MapHome'
const SignUpUser = () => {
  const [personHovered,setPersonHovered] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <Stack sx={{width:'50%',my:"200px",mx:'auto'}}>
        <Stack >
          <Typography variant='h5' color='primary' textAlign='center' mb='50px'>Register as a User</Typography>
        </Stack>
        <form>
          <Stack rowGap={3} >
            <Stack direction='column-reverse' alignItems='center'>
              <input type='file' 
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange} />
              <Avatar sx={{ width: 100, height: 100 ,cursor:'pointer'}} onClick={handleAvatarClick} src={(selectedImage  && !personHovered)?selectedImage:""}  onMouseEnter={() => setPersonHovered(true)}
                onMouseLeave={() => setPersonHovered(false)} >
                {/* {personHovered ? (
                  <Upload sx={{ width: 96, height: 96 }}/>
               ) : (
                selectedImage ? null : <Person sx={{ width: 96, height: 96 }}/>
                )} */}
              {(personHovered) ? (
                <Upload sx={{ width: 96, height: 96 }} />
              ) : (
                <Person sx={{ width: 96, height: 96 }} />
              )}
              </Avatar>
              <Typography variant='body1'  >please choose your profile picture</Typography>
            </Stack>
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <TextField label='First Name' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
              <TextField label='Last Name' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <TextField label='your password' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
              <TextField label='reinput your password' type='password' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack >
              <TextField label='your Email Address' required size='small'  sx={{width:'100%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems="center">
               <Stack direction='row' alignItems='center'>
                <Checkbox/>
                <Typography variant='body2'>I accept the conditions and terminate</Typography>              
              </Stack>
               <Stack direction='row' alignItems='center'>
                <Typography variant="body2">Already have an Account?</Typography><Link sx={{cursor:'pointer'}}>Log_in</Link>
              </Stack>
            </Stack>
            <MapHome />
           
            <Button sx={{width:'50%',m:"auto"}} variant="contained" endIcon={<Send />} >start</Button>
            
          </Stack>
        </form>
    </Stack>
  )
}

export default SignUpUser