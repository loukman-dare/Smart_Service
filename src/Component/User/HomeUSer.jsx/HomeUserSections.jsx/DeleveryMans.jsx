import { Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Rating, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { Favorite, LocationCity, Money, Work } from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your settings for the Slider
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const deleMans =[{
      'pathImg':'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVsZXZlcnklMjBtYW58ZW58MHx8MHx8fDA%3D',
      "name": "ALi odaimah",
      "city" : 'jableh',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
    }, {
      'pathImg':'https://images.unsplash.com/photo-1541290431335-1f4c2152e899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fERlbGV2ZXJ5JTIwbWFufGVufDB8fDB8fHww',
      "name": "ALi odaimah",
      "city" : 'jableh',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
    }, {
      'pathImg':'https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fERlbGV2ZXJ5JTIwbWFufGVufDB8fDB8fHww',
      "name": "ALi odaimah",
      "city" : 'jableh',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
    }, {
      'pathImg':'https://images.unsplash.com/photo-1545938820-9d09f398ce70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fERlbGV2ZXJ5JTIwbWFufGVufDB8fDB8fHww',
      "name": "ALi odaimah",
      "city" : 'jableh',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
  
    }, {
      'pathImg':'https://images.unsplash.com/photo-1592827095305-68f21edefb82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fERlbGV2ZXJ5JTIwbWFufGVufDB8fDB8fHww',
      "name": "ALi odaimah",
      "city" : 'hmaemem',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
  
    }, {
      'pathImg':'https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERlbGV2ZXJ5JTIwbWFufGVufDB8fDB8fHww',
      "name": "ALi odaimah",
      "city" : 'jableh',
      'workDays' : "from sunday to friday",
      'workHours' : 'from 8 am to 3 pm',
      'money' : '2000 s.p for each 1 kelo meter'
    }]

const DeliveryMans = () => {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: '100px' }}>
      <Typography variant='h3' color='primary.light' sx={{ my: '30px', textAlign: 'center' }}>Delivery Mans</Typography>
      <Slider {...settings}>
        {/* Map through the delivery personnel data */}
        {deleMans.map((man, index) => (
          <Card key={index} sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'space-between' }}>
            {/* Delivery personnel's information */}
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: 'primary.light' }} aria-label="delivery-man" src={man.pathImg} />}
              title={man.name}
              subheader={man.city}
            />
            {/* Delivery personnel's image */}
            <CardMedia
              component="img"
              height="194"
              image={man.pathImg}
              alt={man.name}
            />
            {/* Delivery personnel's details */}
            <CardContent>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <LocationCity />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={man.city} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <Work />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={man.workDays} secondary={man.workHours} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <Money />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={man.money} />
                </ListItem>
              </List>
            </CardContent>
            {/* Card actions */}
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <Rating precision={0.5} size="large" />
            </CardActions>
          </Card>
        ))}
      </Slider>
    </Box>
  )
}

export default DeliveryMans;
