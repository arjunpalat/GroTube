import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function VideoCard({ video: { postId, creator: { name }, submission } }) {

    return (
        <Card sx={{
            width: { xs: '320px', sm: '358px', md: '320px' },
            boxShadow: 'none', borderRadius: 0
        }}>
            <Link to={`/video/${postId}`} state={submission}>
                <CardMedia
                    image={submission?.thumbnail}
                    alt={submission?.title}
                    sx={{
                        width: { xs: '100%', sm: '358px', md: '320px' },
                        height: 180
                    }}
                />
            </Link>
            <CardContent sx={{
                backgroundColor: '#1e1e1e',
                height: '106px'
            }}>
                <Link to={`/video/${postId}`} state={submission}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                        {submission?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Typography variant='subtitle2' fontWeight='bold' color='pink' sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountCircleIcon sx={{ fontSize: 20, marginRight: 1, color: 'orange' }} />
                    <span style={{ color: 'pink', textTransform: 'capitalize', marginTop: '1px' }}>{name}</span>
                </Typography>
            </CardContent>
        </Card>
    );
};