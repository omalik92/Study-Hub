import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Grid }  from '@mui/material';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import "./gridCard.css";
import cardInfo from './cardInfo.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'var(--body-color)',
  ...theme.typography.body2,
  cursor:'pointer',
  borderRadius:'10px',
  height:'80px',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MyComponent(props) {
  return <div>{props.children}</div>
}

MyComponent.propTypes = {
  children:PropTypes.element.isRequired,
};

const ModalContent = ({ selectedCard, handleClose }) => {
  const { title } = cardInfo[selectedCard] || { title: 'Unknown card', content: 'Please select a valid card.' };
  const urlMap = {
    'Frontend Developer': 'https://roadmap.sh/frontend',
    'Backend Developer': 'https://roadmap.sh/backend',
    'DevOps Roadmap': 'https://roadmap.sh/devops',
    'Blockchain Developer': 'https://roadmap.sh/blockchain',
    'Software Architect': 'https://roadmap.sh/software-architect',
    'Cyber Security Developer': 'https://roadmap.sh/cyber-security',
  };
  const url = urlMap[selectedCard];
 

  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <button onClick={handleClose} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
      <i className="uil uil-times-square"></i>
        </button>
      </Box>
      {url && (
        <Box sx={{ height: '80vh', overflow: 'hidden' }}>
          <iframe src={url} style={{ width: '100%', height: '100%', border: 0 }}></iframe>
        </Box>
      )}
    </Box>
  );
};

export default function ResponsiveGrid() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className='grid_container' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('Frontend Developer')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Frontend Developer</h2>
          </Item>
        </Grid>

        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('Backend Developer')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Backend Developer</h2>
          </Item>
        </Grid>

        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('DevOps Roadmap')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">DevOps Roadmap</h2>
          </Item>
        </Grid>

        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('Blockchain Developer')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Blockchain Developer</h2>
          </Item>
        </Grid>

        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('Software Architect')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Software Architect</h2>
          </Item>
        </Grid>

        <Grid item xs={2} sm={4} md={4} onClick={() => handleOpen('Cyber Security Developer')}>
          <Item className='grid_item'>
            <h2 style={{fontSize:18}} className="section_title">Cyber Security Developer</h2>
          </Item>
        </Grid>

      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div>
        <ModalContent selectedCard={selectedCard} handleClose={handleClose} />
        </div>
      </Modal>
    </Box>
  );
}

