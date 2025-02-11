import { useEffect, useState } from "react";
import Video from "./Video";

const Videos = () => {

    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.adultdatalink.com/redgifs/trending?parameter=gif')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log('API response:', data); // Log the API response
                if (data && data.items) {
                    setVideos(data.items);
                } else {
                    setError('Invalid API response');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching videos:', error); // Log any errors
                setError(error.message);
                setLoading(false);
            });
    }, []);
    console.log('Videos state:', videos); // Log the videos state

    return (
        <div>
            <h1>HLW</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <p>length: {videos.length}</p>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    videos.map((video) => <Video video={video} key={video.id}></Video>)
                }
            </div>
        </div>
    );
};

export default Videos;