import React from 'react';
import { Fade, Box, Typography, Button, Zoom } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Home = () => {
  return (
    <Fade in={true} timeout={2000}>
      <Box 
        className='home' 
        sx={{ 
          textAlign: 'center', 
          mt: 0, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          backgroundImage: 'linear-gradient(135deg, #b4bfff 0%, #21d4fd 100%)',
          px: { xs: 2, sm: 3, md: 6, lg: 8 },
        }}>
        <Zoom in={true} timeout={1500}>
          <Typography className='home-title' variant="h2" sx={{ 
                                                              fontWeight: 'bold', 
                                                              fontSize: { xs: '1.75rem', sm: '2.75rem', md: '3.75rem', lg: '4.25rem', xl: '4.75rem' },
                                                              color: 'var(--home-h2-color)'
                                                              }}>
            Bem-vindo ao meu Portfólio!
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2000}>
          <Typography className='home-subtitle' variant="h6" sx={{ 
                                                                mt: 2, 
                                                                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem' },
                                                                color: 'var(--home-h6-color)'
                                                                }}>
            Este é o meu laboratório, onde as ideias ganham vida.
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2500}>
          <Button variant="contained" sx={{ 
                                          mt: 4, 
                                          backgroundColor: 'var(--home-button-color)', 
                                          color: '#fff',
                                          px: { xs: 1, sm: 2, md: 3, lg: 4 },
                                          '&:hover': {
                                            backgroundColor: 'var(--home-button-hover-color)',
                                            '& .home-button-icon': {
                                              animation: 'rotateButton 2s forwards'
                                            }
                                          },
                                          '& .home-button-icon': {
                                            animation: 'rotateBack 2s forwards'
                                          }
                                          }} onClick={() => window.open('https://drive.google.com/file/d/12e3l1kPVVyJGVncxYg4z9xddf70HEC6d/view?usp=drive_link', '_blank')}>
            <Typography className='home-button-text' variant='subtitle2'
              sx= {{ 
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.2rem' } 
                  }}>
              Currículo
            </Typography>
            <OpenInNewOutlinedIcon className='home-button-icon' 
              sx={{ 
                    fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' },
                    transition: 'transform 2s ease, color 2s ease'
                  }}/>
          </Button>
        </Zoom>
      </Box>
    </Fade>
  );
};

export default Home;