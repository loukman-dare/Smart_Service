import { Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Rating, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { Favorite, LocationCity, Work } from '@mui/icons-material';
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
const doctors =[{
    "id": 1,
    'pathImg':'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    "first_name": "Angelica",
    "last_name": "Trude",
    "email": "atrude0@yale.edu",
    'specialization':"dentist",
     'mainAdress' : 'jableh,Lattakia',
     'subAdress' : 'ghazalat street',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'

  }, {
    "id": 2,
    'pathImg':'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG9jdG9yfGVufDB8fDB8fHww',
    "first_name": "Savina",
    "last_name": "Kingsnorth",
    "email": "skingsnorth1@dell.com",
    "gender": "Female",
    "ip_address": "39.102.217.163",
    'specialization':"Urologist",
    'mainAdress' : 'jableh,Lattakia',
     'subAdress' : 'farweh street',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'
  }, {
    "id": 3,
    "first_name": "Christin",
    'pathImg':'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RG9jdG9yfGVufDB8fDB8fHww',
    "last_name": "Finneran",
    "email": "cfinneran2@netscape.com",
    'specialization':"dentist",
      'mainAdress' : 'Damascus,syria',
     'subAdress' : 'mazzeh 86',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'
  }, {
    "id": 4,
    'pathImg':'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    "first_name": "Tarra",
    "last_name": "Bettenay",
    "email": "tbettenay3@berkeley.edu",
    "gender": "Female",
    "ip_address": "105.24.85.0",
    'specialization':"Internal",
    'mainAdress' : 'Aleppo,syria',
     'subAdress' : 'forqan',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'

  }, {
    "id": 5,
    "first_name": "Karissa",
    "last_name": "Brumble",
    'pathImg':'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    "email": "kbrumble4@drupal.org",
    "gender": "Female",
    "ip_address": "201.222.233.48",
    'specialization':"Hearty",
      'mainAdress' : 'jableh,Lattakia',
     'subAdress' : 'Hmaemem',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'

  }, {
    "id": 6,
    "first_name": "Cathryn",
    "last_name": "Cicchitello",
    "email": "ccicchitello5@mozilla.com",
    "gender": "Female",
    "ip_address": "184.30.200.178",
    'pathImg':'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    'specialization':"Bony",
      'mainAdress' : 'syria,Homs',
     'subAdress' : 'abo ghazaleh street',
     'workDays' : "from sunday to friday",
     'workHours' : 'from 8 am to 3 pm'
  }]

const Doctors = () => {
  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Typography variant='h3' color='primary.light' sx={{ my: '30px', textAlign: 'center' }}>Best Doctors</Typography>
      <Slider {...settings}>
        {/* Map through the doctors data */}
        {doctors.map((doctor, index) => (
          <Card key={index} sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'space-between' }}>
            {/* Doctor's information */}
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: 'primary.light' }} aria-label="doctor" src={doctor.pathImg} />}
              title={`${doctor.first_name} ${doctor.last_name}`}
              subheader={doctor.specialization}
            />
            {/* Doctor's image */}
            <CardMedia
              component="img"
              height="194"
              image={doctor.pathImg}
              alt={doctor.specialization}
            />
            {/* Doctor's details */}
            <CardContent>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <LocationCity />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={doctor.mainAdress} secondary={doctor.subAdress} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <Work />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={doctor.workDays} secondary={doctor.workHours} />
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
  );
}

export default Doctors;
