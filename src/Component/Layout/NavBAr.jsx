import { Drawer,AppBar, Avatar, Box, Button, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, List,ListItem,ListItemText, ListItemIcon,ListItemButton, ListItemAvatar, Divider} from "@mui/material"
import logo from '../../assets/nav/logo.svg'
import { AppRegistration, AppRegistrationRounded, Category, ChatRounded, Edit, Favorite, GroupAdd, House, Language, Login, LoginOutlined, Logout, Mail, MenuOpen, MenuSharp, Message, Notifications, PlusOne, ProductionQuantityLimitsSharp, Settings, SevereColdRounded, StoreOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Provider, useSelector } from "react-redux"
const NavBAr = () => {
    const navigate = useNavigate()
    const loged = useSelector(state=>state.login.loged)
    console.log(loged)
    const [anchorEl,setAnchorEl] = useState(null)
    const [anchorProfile,setAnchorProfile] = useState(null)

    const [drawerOpen,setDrawerOpen] = useState(false)
    const open = Boolean(anchorEl)
    const openProfile= Boolean(anchorProfile)
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleClickProfile=(e)=>{
        setAnchorProfile(e.currentTarget)
    }
    const handleClose =()=>{
        setAnchorEl(null)
    }
    const handleCloseProfile =()=>{
        setAnchorProfile(null)
    }
  return (
    <AppBar sx={{height:"80px"}}>
        <Toolbar sx={{display:'flex' , justifyContent:"space-between"}}>
            <Box> 
                 <img src={logo} alt='marketing' width={100} height={100}/>
            </Box>
            <Stack direction='row' height="100%" spacing={2} sx={{display:{xs:'none',md:'flex'}}}>
                <Typography color='white' sx={{'&:hover':{bgcolor:"primary.light"},cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>Home</Typography>
                <Typography color='white' sx={{'&:hover':{bgcolor:"primary.light"},cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>Products</Typography>
                <Typography color='white'sx={{'&:hover':{bgcolor:"primary.light"},cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>Stores</Typography>
                <Typography color='white' sx={{'&:hover':{bgcolor:"primary.light"},cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>Service Provider</Typography>
            </Stack>
            {
                loged && (
                    <Stack direction='row' sx={{display:'flex'}}>
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
                >
                    <Message />
                </IconButton>
            </Tooltip>
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
            <Avatar aria-label="open profile"
                onClick={handleClickProfile}
                id='profile-button'
               
                aria-haspopup='true'
                aria-expanded={openProfile?'true':undefined}
                aria-controls={openProfile?"profile":undefined}
                sx={{display:{xs:'none',md:'flex'},width:50,height:50,bgcolor:'white',color:'inherit','&:focus':{outline:"none",border:'none'} }}
                 >
                <Typography variant="h5" fontWeight={600} color='primary'>LD</Typography>
            </Avatar>
            
            </Stack>
                )
            }
            {
                !loged && (
                    <Stack direction='row' gap={2} sx={{display:{xs:'none',md:'flex'}}}>
                        <Stack onClick={()=>navigate('Smart_Service/login')} direction='row' alignItems='center' sx={{'&:hover':{bgcolor:"primary.light"},p:'10px',border:'solid 1px'}}>
                            
                            <LoginOutlined />
                            <Typography color='white' sx={{cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>Login</Typography>
                        </Stack>
                        <Stack direction='row' alignItems='center' sx={{'&:hover':{bgcolor:"primary.light"},p:'10px',border:'solid 1px'}}>
                              
                            <AppRegistration />
                            <Typography color='white' sx={{cursor:'pointer',height:'100%',px:'8px',display:'flex',justifyContent:'center',alignItems:'center'}}>create Account</Typography>
                        </Stack>
                </Stack>)
               
            }
            <Menu
                onClose={handleCloseProfile}
                anchorEl={anchorProfile}
                open={openProfile}
                id='profile'
                MenuListProps={{
                    "aria-labelledby":'profile-button'
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem  onClick={handleCloseProfile}><Avatar>LD</Avatar>Loukman Dareusey</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}><ListItemIcon><Settings fontSize="small"/> </ListItemIcon>setting account</MenuItem>
                    <MenuItem onClick={handleCloseProfile}><ListItemIcon><Edit fontSize="small"/></ListItemIcon>edit profile</MenuItem>
                    <MenuItem onClick={handleCloseProfile}><ListItemIcon><ChatRounded fontSize="small"/></ListItemIcon>statstics account</MenuItem>
                    <MenuItem onClick={handleCloseProfile}><ListItemIcon><Favorite fontSize="small"/></ListItemIcon>Favorite</MenuItem>
                    <MenuItem onClick={handleCloseProfile}><ListItemIcon><Logout fontSize="small"/></ListItemIcon>Logout</MenuItem>


                </Menu>
            <IconButton
            onClick={()=>setDrawerOpen(true)}
            ize="large"
            color="inherit"
            aria-label="open favorite"
            sx={{'&:focus':{outline:"none",border:'none'},display:{xs:"block",md:"none"}}}
            >
                <MenuSharp />
            
            </IconButton>
            <Drawer anchor='left'  open={drawerOpen} onClose={()=>setDrawerOpen(false)} closeAfterTransition>
                <Box sx={{display:'flex',gap:'100px',flexDirection:'column',justifyContent:'center',width:{xs:'250px',sm:500}}}>
                    <List>
                        <ListItemButton onMouseEnter={handleClickProfile} onMouseLeave={handleCloseProfile}>
                            <ListItem 
                            id='profile-button'
               
                            aria-haspopup='true'
                            aria-expanded={openProfile?'true':undefined}
                            aria-controls={openProfile?"profile":undefined}
                            >
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
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <House />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="Home"  />
                            </ListItem>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ProductionQuantityLimitsSharp />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="Products"  />
                            </ListItem>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StoreOutlined />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="Stores"  />
                            </ListItem>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItem>
                                <ListItemIcon>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SevereColdRounded />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary="Service Providers"  />
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