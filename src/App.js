import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetails } from "./components";

const App = () => (
    <HashRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:postId" exact element={<VideoDetails />} />
            </Routes>
        </Box>
    </HashRouter>
);

export default App;