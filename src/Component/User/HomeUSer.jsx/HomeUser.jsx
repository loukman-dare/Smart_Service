import { Box } from '@mui/material'
import Entry from './HomeUserSections.jsx/Entry'
import Stores from './HomeUserSections.jsx/Stores'
import Products from './HomeUserSections.jsx/Products'
import Doctors from './HomeUserSections.jsx/Doctors'
import DeleveryMans from './HomeUserSections.jsx/DeleveryMans'
import MapHome from './HomeUserSections.jsx/MapHome'
import LeafletMap from './HomeUserSections.jsx/LeafletMap'
const HomeUser = () => {
  return (
    <Box>
      <Entry />
      <Stores />
      <Products />
      <Doctors />
      <DeleveryMans />
      {/* <MapHome /> */}
      <LeafletMap />
    </Box>
  )
}

export default HomeUser