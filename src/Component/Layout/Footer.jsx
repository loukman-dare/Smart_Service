import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import logo from '../../assets/nav/logo.svg'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
const Footer = () => {
  return (
    <Stack direction='column' bgcolor='primary.dark' p='50px' gap={6}>
        <Stack direction='row' display='flex' justifyContent='space-between' alignItems='center'>
            <Stack direction='column' width='50%' >
                <Typography color='white' variant='h5'>Smart server</Typography>
                <Typography color='white' variant='body2'>
                The smart server is an electronic website that brings together markets and customers and also provides other services such as booking appointments from home (doctors, laboratories.....) without any intermediaries.
                </Typography>
            </Stack>
            <Stack direction='column'>
                <Link underline='hover' color='white'>Stores</Link>
                <Link underline='hover' color='white'>Doctors</Link>
                <Link underline='hover' color='white'>Products</Link>
                <Link underline='hover' color='white'>Doctors</Link>
                <Link underline='hover' color='white'>Deleviries</Link>
            </Stack>
            <Stack direction='column'>
                <Link underline='hover' color='white'>Login</Link>
                <Link underline='hover' color='white'>Download Application</Link>
                <Link underline='hover' color='white'>Products</Link>
                <Link underline='hover' color='white'>Contsct Us</Link>
            </Stack>
        </Stack>
        <Divider color="white"/>
        <Stack direction='row' display='flex' justifyContent='space-between' alignItems='center'>
            <Stack direction='column' gap={1}>
                <img src={logo} width='100px' />
                <Typography color='white' variant='="body2'>All rights reserved</Typography>
                <Typography color='white' variant='="body2'>www.smartserver.com</Typography>

            </Stack>
            <Stack color="white">
                <Typography>Design&Coding BY MML Team</Typography>
                <IconButton  color='inherit'>
                    <WhatsApp />
                </IconButton>
            </Stack>
            <Stack color="white">
                <Typography>Follow us on :</Typography>
                <Stack direction='row'>
                    <IconButton color="inherit">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit">
                        <Instagram />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Footer