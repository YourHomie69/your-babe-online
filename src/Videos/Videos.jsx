import { useEffect, useState } from "react";
import Video from "./Video";


const Videos = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://api.adultdatalink.com/redgifs/trending?parameter=gif')
            .then(res => res.json())
            .then(data => setVideos(data.items)); // Corrected this line
    }, []);
    // const data = useLoaderData();
    console.log(videos);

    return (
        <div>
            <h1>HLW</h1>
            <p>length: {videos.length}</p>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    videos.map((video) => <Video video={video} key={video.id}></Video>)
                }
            </div>

            {/* <img src={ } alt="" /> */}

        </div>
    );
};

export default Videos;