import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, Rating, CardActions, CardContent, CardMedia, CardHeader, Avatar, IconButton } from '@mui/material';
import Slider from 'react-slick';
import { Favorite } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const settings = {
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

const stores = [
  {
    label: 'An international brand for manufacturing clothing with the most luxurious and latest modern designs',
    imgPath:
      'https://images.unsplash.com/photo-1646825461394-ebd1800141d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3JlcyUyMGF0JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D',
    storeName:'Dior',
    StoreOwner:'loukman Drywsy'
  },
  {
    label: 'Formal mens clothing suits you to be the most distinguished',
    imgPath:
      'https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      storeName:'D-G Mans',
      StoreOwner:'Modar Dwery'
  },
  {
    label: 'High-quality womens clothing is designed for you to appear wonderfully among your friends and to be the most beautiful and sexy',
    imgPath:
      'https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      storeName:'AH group',
      StoreOwner:'Ali ahmed'
  },
  {
    label: 'The first store in Syria that sells flowers of all kinds, local and imported, at competitive prices',
    imgPath:
      'https://images.unsplash.com/photo-1510226621137-6285ff880db6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      storeName:'Maya',
      StoreOwner:'Maya ali'
  },
];

function Stores() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Typography variant='h3' color='primary.light' sx={{ my: '30px', textAlign: 'center' }}>Best Stores</Typography>
      <Slider {...settings}>
        {/* Mapping through store data */}
        {stores.map((store, index) => (
          <Card key={index} sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.light' }} aria-label="store">
                  {store.storeName.slice(0, 1)}
                </Avatar>
              }
              title={store.storeName}
              subheader={store.StoreOwner}
            />
            <CardMedia
              component="img"
              height="194"
              image={store.imgPath}
              alt={store.label}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" sx={{ height: '100px' }}>
                {store.label}
              </Typography>
            </CardContent>
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

export default Stores;
