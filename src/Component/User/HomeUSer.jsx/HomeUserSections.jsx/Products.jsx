import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import { Card, Rating, CardActions, CardContent, CardMedia, CardHeader, Avatar, IconButton } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const products = [
  {
    label: 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).',
    imgPath:
      'https://images.unsplash.com/photo-1664363535302-6f71e41a176a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    broductName:'Iphone14',
    storeName:'Tech NO',
    storeOwner:'Ali Sharbini',
    categoryName:'Elcetrical'
  },
  {
    label: 'When you’re buying a new laptop, you’ll want to get one with a latest-generation GPU. When considering GPUs, aim for discrete, powerful options such as Intel or NVIDIA dedicated graphics cards. When looking at a spec table, look for Intel® Iris® Xe or NVIDIA® RTX™ graphic cards. Make sure your graphic card can support ray tracing (e.g. choose NVIDIA® RTX™ over NVIDIA® GTX™).',
    imgPath:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhYnRvcHxlbnwwfHwwfHx8MA%3D%3D',
      broductName:'Laptop Asus',
      storeName:'sham',
      categoryName:'Elcetrical',
      storeOwner:'laith Omran',


  },
  {
    label: 'A completely Syrian-made cotton sweater suitable for going out',
    imgPath:
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww',
      broductName:'Tshirt',
      storeName:'EXte',
      categoryName:'clothes',
      storeOwner:'haya hammada',

  },
  {
    label: 'Vietnamese shoes from the Nike brand, available in all colors and all sizes',
    imgPath:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      broductName:'Shoes',
      storeName:'KHJ',
      categoryName:'clothes',
      storeOwner:'leo jack',
  },
];

function Products() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', my: '100px' }}>
      <Typography variant='h3' color='primary.light' sx={{ my: '30px', textAlign: 'center' }}>Best Products</Typography>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Card key={index} sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
              {/* Card headers */}
              <CardHeader
                title={product.broductName}
                subheader={product.categoryName}
              />
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: 'primary.light' }}>{product.storeName.slice(0, 1)}</Avatar>}
                title={product.storeName}
                subheader={product.storeOwner}
              />
            </Box>
            {/* Product image */}
            <CardMedia
              component="img"
              height="194"
              image={product.imgPath}
              alt={product.label}
            />
            <CardContent>
              {/* Product description */}
              <Typography variant="body2" color="text.secondary" sx={{ height: '150px' }}>
                {product.label}
              </Typography>
            </CardContent>
            {/* Card actions */}
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Favorite button */}
              <IconButton aria-label="add to favorites" sx={{ '&:focus': { outline: 'none' } }}>
                <Favorite />
              </IconButton>
              {/* Product rating */}
              <Rating precision={0.5} size="large" />
            </CardActions>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default Products;

