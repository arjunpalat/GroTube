import { Stack, Box, mak } from '@mui/material';
import { VideoCard } from '.';
const Videos = ({ videos, direction }) => {
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            gap={2}>
            {videos.map((person) => (
                <Box key={person.postId}>
                    <VideoCard video={person} />
                </Box>
            ))}

        </Stack>
    )
}

export default Videos;