import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./gridCard.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='grid_container' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
        <Grid item xs={2} sm={4} md={4} >
            <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Frontend Developer</h2></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Backend Developer</h2></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item className='grid_item'><h2 style={{fontSize:18}} className="section_title">DevOps Roadmap</h2></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item className='grid_item'><h2 style={{fontSize:18}} className="section_title">Blockchain Developer</h2></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item className='grid_item'><h2 style={{fontSize:18}} className="section_title">Software Architect</h2></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <Item className='grid_item'><h2 style={{fontSize:18}} className="section_title">React Native Developer</h2></Item>
          </Grid>
      </Grid>
    </Box>
  );
}