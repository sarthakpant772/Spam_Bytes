import { Box, Button, Container, Typography } from '@mui/material'
import mainPic from '../assets/images/narendra.png'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import Navbar from '../components/Navbar'
import DonateButton from './DonateButton'
import { useSelector } from 'react-redux'
import { selectFoundChild } from '../features/foundchild/FoundChildSlice'
import { width } from '@mui/system'

const HeroSection = () => {
  const foundChildData = useSelector(selectFoundChild)
  const hotspot = new Map()

  foundChildData.filter((child) => {
    if (child.isVerified) {
      if (!hotspot.get(child.district)) {
        hotspot.set(child.district, 1)
      } else {
        let number = hotspot.get(child.district)
        hotspot.set(child.district, number + 1)
      }
    }
  })
  const hotspotFinal = new Map([...hotspot].sort((a, b) => b[1] - a[1]))
  let size = hotspot.size
  let i = 0
  return (
    <Box
      sx={{
        width: { xs: '100%' },
        height: { sm: '100vh', xs: '100vh' },
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { lg: '100vh', xs: '100vh' },
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            height: { lg: '100%', xs: '100vh' },
            position: 'absolute',
            zIndex: '-2',
          }}
          src={mainPic}
        />
        <Box
          sx={{
            width: '100%',
            height: { lg: '100%', xs: '100vh' },
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
          width: { sm: '50%', xs: '100%' },
          height: { sm: '100%', xs: '100vh' },
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          marginLeft: { sm: '200px', xs: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            justifyContent: 'space-evenly',
            // alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h1">Pencil</Typography>
            <Typography variant="h6">
              (Platform for Effective Enforcement for No Child Labour)
            </Typography>
            <Typography variant="h6">
              A Ministry of Labour and Employment initiative
            </Typography>
          </Box>
          {/* <DonateButton /> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '40%',
              justifyContent: 'space-evenly',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ marging: '10px' }}>
                <DonateButton />
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{ margin: '10px', width: '200px' }}
              >
                Report a Child!
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ margin: '10px', width: '200px' }}
              >
                complaint status
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* <Container
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
      ></Container> */}
    </Box>
  )
}

export default HeroSection