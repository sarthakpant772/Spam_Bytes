import { Box, Container, Typography } from '@mui/material'
import mainPic from '../assets/images/narendra.png'
import React from 'react'

const HeroSection = () => {
  return (
    <Box sx={{ width: '100%', height: '600px', display: 'flex' }}>
      <Box sx={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '600px',
            position: 'absolute',
            zIndex: '-2',
          }}
          src={mainPic}
        />
        <Box
          sx={{
            width: '100%',
            height: '600px',
            backgroundColor: 'black',
            opacity: '60%',
            position: 'absolute',
            zIndex: '-1',
          }}
        />
      </Box>

      <Container
        sx={{
          position: 'relative',
          color: 'white',
          width: '50%',
          height: '100%',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '200px',
        }}
      >
        <Box>
          <Typography variant="h1">Pencil</Typography>
          <Typography variant="h6">
            A Ministry of Labour and Employment initiative
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          position: 'relative',
          color: 'white',
          width: '50%',
          height: '100%',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '200px',
        }}
      ></Container>
    </Box>
  )
}

export default HeroSection
