import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Stack, Box, CircularProgress } from '@mui/material';
import fetchVideos from '../utils/fetchVideos';
import { Videos } from './';

export default function VideoDetails() {
    const location = useLocation();
    const { postId } = useParams();
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [playlistVideos, setPlaylistVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleDataFetch = async () => {
        setLoading(true);
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
        setLoading(false);
    };
    const updateSelectedVideo = () => {
        if (location.state) {
            setSelectedVideo(location.state);
        } else {
            const currentVideo = videos?.find((video) => video.postId === postId);
            setSelectedVideo(currentVideo?.submission);
        }
    }

    const playListUpdater = () => {
        const index = videos.findIndex((video) => (
            video.postId === postId
        ));
        setPlaylistVideos([...videos.slice(index + 1), ...videos.slice(0, index)]);
    };

    useEffect(() => {
        handleDataFetch();
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        updateSelectedVideo();

        playListUpdater();
    }, [postId, videos]);

    return (
        <Box minHeight='95vh'>
            {!loading ? (
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={1}>
                        <Box sx={{ width: '100%', position: 'top', top: '86px' }}>
                            <ReactPlayer
                                url={selectedVideo?.mediaUrl}
                                className="react-player"
                                controls
                            />
                            <Typography color="#fff" variant='h5' fontWeight="bold" px={2}>
                                {selectedVideo?.title}
                            </Typography>
                            <Typography color="gray" variant='h6' p={2}>
                                {selectedVideo?.description}
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{
                                    color: "gray"
                                }}
                                py={1}
                                px={2}
                            >
                            </Stack>
                        </Box>
                    </Box>
                    <Box px={2} py={{ md: 1, sx: 5 }} justifyContent="center" alignItems="center">
                        <Videos videos={playlistVideos} direction="column" />
                    </Box>
                </Stack>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60vh',
                    }}
                >
                    <CircularProgress sx={{ color: '#A020F0' }} />
                </Box>
            )}
        </Box>
    );
}
