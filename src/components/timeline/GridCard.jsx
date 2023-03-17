import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
        <Grid item xs={2} sm={4} md={4} >
            <Item>Frontend Developer</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>Backend Developer</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>DevOps Roadmap</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>Blockchain Developer</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>Software Architect</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>React Native Developer</Item>
          </Grid>
      </Grid>
    </Box>
  );
}