import { useState, useEffect } from 'react';
import { Paper, Box, Stack, Typography, CircularProgress } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { Construction } from '@mui/icons-material';
import { SideBar, Videos } from '.';
import fetchVideos from '../utils/fetchVideos';



export default function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDataFetch = async () => {
    setLoading(true);
    const fetchedVideos = await fetchVideos();
    setVideos(fetchedVideos);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      handleDataFetch();
    }
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '50vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        {selectedCategory === 'All' && (
          <>
            <Typography
              variant='h4'
              fontWeight='bold'
              mb={2}
              sx={{
                color: 'white',
              }}
            >
              {selectedCategory} <span style={{ color: '#A020F0' }}>Videos</span>
            </Typography>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress sx={{ color: '#A020F0' }} />
              </Box>
            ) : (
              <Videos videos={videos} />
            )}
          </>
        )}
        {selectedCategory === 'Top' && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              flexDirection: 'column',
            }}
          >
            <Construction sx={{ fontSize: 96, color: '#A020F0' }} />
            <Typography variant='h4' mt={1} textAlign='center' color="white">
              Maintenance in Progress
            </Typography>
            <Typography variant='body1' mt={2} textAlign='center' color="white">
              We'll be back shortly!
            </Typography>
          </Box>
        )}
        {selectedCategory === 'Coming Soon!' && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '50vh'
            }}
          >
            <PublicIcon sx={{ fontSize: 96, color: '#A020F0' }} />
            <Typography variant='h4' mt={1} textAlign='center' color="white">
              Coming Soon!
            </Typography>
            <Typography variant='body1' mt={2} textAlign='center' color="white">
              Trick or Treat? Stay tuned for updates!
            </Typography>
          </Box>
        )}
        {selectedCategory === 'Info' && (
          <Paper
            sx={{
              backgroundColor: 'lightgreen',
              padding: '10px',
              borderRadius: '10px',
              marginTop: '10px',
              height: '50vh',
              textAlign: 'center'
            }}
            elevation={1}
          >
            <Typography variant='h4' color='black' fontWeight="bold">
              GroTube App
            </Typography>
            <Typography variant='h5' mt={2} color='black'>
              Created using React
            </Typography>
            <Typography variant='h6' mt={2} color='black' fontWeight="light">
              It was a great learning experience trying to build this one, debugging and handling the errors, and tinkering with values and console.logs to make it work!
              Kindly suggest your valuable analysis on the code implementation, bugs and overall performance.
            </Typography>
            <Typography variant="h6" mt={6} color='black' fontWeight='light'>
              by Arjun Palathinkara
            </Typography>
          </Paper>
        )}
      </Box>
    </Stack>
  );
}
