import { Drawer,AppBar, Avatar, Box, Button, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, List,ListItem,ListItemText, ListItemIcon,ListItemButton, ListItemAvatar, Divider} from "@mui/material"
import logo from '../../assets/nav/logo.svg'
import { AppRegistrationRounded, Category, Favorite, GroupAdd, Language, Login, Mail, MenuOpen, Notifications } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const NavBAr = () => {
    const [anchorEl,setAnchorEl] = useState(null)
    const [drawerOpen,setDrawerOpen] = useState(false)
    const navigate = useNavigate()
    const open = Boolean(anchorEl)
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose =()=>{
        setAnchorEl(null)
    }
  return (
    <AppBar>
        <Toolbar sx={{display:'flex' , justifyContent:"space-between"}}>
            <Box width={200} height={100} > 
                 <img src={logo} alt='marketing' width={200} height={100}/>
            </Box>
           
            <Stack direction='row' spacing={1} sx={{display:{xs:'none',md:'flex'}}}>
            <Tooltip title='Notifications'  arrow enterDelay={300} leaveDelay={200}>
                    <IconButton 
                    size="large"
                    color="inherit"
                    aria-label="open notifications"
                    sx={{'&:focus':{outline:"none",border:'none'}}}
                    >
                        <Notifications />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Favorite'  arrow enterDelay={300} leaveDelay={200}>

                    <IconButton 
                    size="large"
                    color="inherit"
                    aria-label="open favorite"
                    sx={{'&:focus':{outline:"none",border:'none'}}}
                    >
                        <Favorite />
                    </IconButton>
                </Tooltip>
                
                <Tooltip title='Categories'  arrow enterDelay={300} leaveDelay={200}>

                    <IconButton 
                    size="large"
                    color="inherit"
                    aria-label="open favorite"
                    sx={{'&:focus':{outline:"none",border:'none'}}}
                    >
                        <Category />
                    </IconButton>
                </Tooltip>
                <Menu
                onClose={handleClose}
                anchorEl={anchorEl}
                open={open}
                id='language-name'
                sx={{'&:focus':{outline:"none",border:'none'}}}
                MenuListProps={{
                    "aria-labelledby":'category-button'
                }}
                >
                    <MenuItem onClick={handleClose}>Ar</MenuItem>
                    <MenuItem onClick={handleClose}>En</MenuItem>

                </Menu>
               
                <Tooltip title='Log in'  arrow enterDelay={300} leaveDelay={200}>
                
                <IconButton
                size="large"
                color="inherit"
                aria-label="open favorite"
                sx={{'&:focus':{outline:"none",border:'none'}}}
                onClick={()=>navigate("signup")}
                >
                    <Login />
                </IconButton>
            </Tooltip>
            <Tooltip title='create Account'  arrow enterDelay={300} leaveDelay={200}>

                <IconButton
                ize="large"
                color="inherit"
                aria-label="open favorite"
                sx={{'&:focus':{outline:"none",border:'none'}}}
                >
                    <GroupAdd />
                </IconButton>
            </Tooltip>
            <Avatar sx={{width:50,height:50}}>LD</Avatar>
            <Tooltip title='Language'  arrow enterDelay={300} leaveDelay={200}>

                <IconButton 
                size="large"
                color="inherit"
                aria-label="open language"
                onClick={handleClick}
                id='language-button'
                sx={{'&:focus':{outline:"none",border:'none'}}}
                aria-haspopup='true'
                aria-expanded={open?'true':undefined}
                aria-controls={open?"language-name":undefined}
                >
                <Language />
            </IconButton>
            </Tooltip>
            </Stack>
            <IconButton
            onClick={()=>setDrawerOpen(true)}
            ize="large"
            color="inherit"
            aria-label="open favorite"
            sx={{'&:focus':{outline:"none",border:'none'},display:{xs:"block",md:"none"}}}
            >
                <MenuOpen />
            
            </IconButton>
            <Drawer anchor='left'  open={drawerOpen} onClose={()=>setDrawerOpen(false)} closeAfterTransition>
                <Box sx={{display:'flex',gap:'100px',flexDirection:'column',justifyContent:'center',width:{xs:'250px',sm:500}}}>
                    <List>
                        <ListItemButton>
                            <ListItem >
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            LD
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="your profile"  />
                            </ListItem>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Login />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="Log in"  />
                            </ListItem>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <GroupAdd />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="create account" />
                            </ListItem>
                        </ListItemButton>
                    </List>
                </Box>

            </Drawer>

        </Toolbar>

    </AppBar>
  )
}

export default NavBAr