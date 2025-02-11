import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const Video = ({ video }) => {
    console.log(video);

    return (
        <div className='w-96'>
            <ReactPlayer
                url={video.urls.hd}
                controls={true} // Add controls
                playing={false} // Ensure it doesn't auto-play
                width="100%" // Set width
                height="100%" // Set height
            />
        </div>
    );
};

Video.propTypes = {
    video: PropTypes.object.isRequired,
};

export default Video;