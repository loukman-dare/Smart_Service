import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import entryImage from '../../../../assets/HomeUser/Entry/illustrations.svg';

const Entry = () => {
  return (
    <Grid container sx={{ width: '90%', my: '100px' }}>
      {/* Left side content */}
      <Grid item md={6} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {/* Timeline section */}
          <Timeline position='alternate'>
            {/* First timeline item */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ width: '100%' }}>Log in to your account</TimelineContent>
            </TimelineItem>
            {/* Second timeline item */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Buy any product you want from home</TimelineContent>
            </TimelineItem>
            {/* Third timeline item */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Book appointments with doctors, laboratories, or...</TimelineContent>
            </TimelineItem>
            {/* Fourth timeline item */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Display your products to reach the largest number of customers</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Grid>

      {/* Right side content */}
      <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box>
          {/* Image section */}
          <img src={entryImage} alt="Illustration" width='100%' />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Entry;
