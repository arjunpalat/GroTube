const API_URL = 'https://internship-service.onrender.com/videos';

const fetchVideos = async () => {
  let fetchedVideos = [];
  let i = 0;
  try {
    while (true) {
      const response = await fetch(`${API_URL}?page=${i}`);
      const data = await response.json();
      if (data.data.posts.length !== 0) {
        fetchedVideos.push(...data.data.posts);
        i++;
      } else {
        break;
      }
    }
    return fetchedVideos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchVideos;