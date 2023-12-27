import { CheckBox, Person, Send, Upload } from '@mui/icons-material';
import { Avatar, Button, Link, Stack, TextField, Typography } from '@mui/material'
import  { useRef, useState } from 'react'

const SignupStore = () => {
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
        <Stack>
          <Typography variant='h5' color='primary' textAlign='center' mb='50px'>Register as a Store</Typography>
        </Stack>
        <form>
          <Stack rowGap={3} >
            <Stack direction='column-reverse' alignItems='center'>
              <input type='file' 
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange} />
              <Avatar variant="rounded" sx={{ width: 150, height: 150 ,cursor:'pointer'}} onClick={handleAvatarClick} src={(selectedImage  && !personHovered)?selectedImage:""}  onMouseEnter={() => setPersonHovered(true)}
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
              <Typography variant='body1'  >please choose your store picture</Typography>
            </Stack>
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <TextField label='Store Name' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
              <TextField label='Owner Store Name' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <TextField label='your password' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
              <TextField label='reinput your password' type='password' required size='small'  sx={{width:'45%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack >
              <TextField label='your Email Address' required size='small'  sx={{width:'100%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack >
              <TextField label='please input adescription for this store' rows={4} multiline required size='small'  sx={{width:'100%','&:hover':{outline:"none",border:'none'}}}/>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems="center">
               <Stack direction='row' alignItems='center'>
                <CheckBox/>
                <Typography variant='body2'>I accept the conditions and terminate</Typography>              
              </Stack>
               <Stack direction='row' alignItems='center'>
                <Typography variant="body2">Already have an Account?</Typography><Link sx={{cursor:'pointer'}}>Log_in</Link>
              </Stack>
            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems="center">
                <Link sx={{cursor:'pointer'}}>Register as a Store</Link>
                <Link sx={{cursor:'pointer'}}>Register as a Service Provider</Link>
            </Stack>
            <Button sx={{width:'50%',m:"auto"}} variant="contained" endIcon={<Send />} >start</Button>
            
          </Stack>
        </form>
    </Stack>
  )
}

export default SignupStore