import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const Video = ({ video }) => {
    console.log('Video component received:', video); // Log the video prop

    if (!video || !video.urls) {
        console.log('Video or video URLs are not available');
    } else if (!video.urls.hd) {
        console.log('HD video URL is not available');
    }

    return (
        <div className='w-96'>
            {video.urls && video.urls.hd ? (
                <ReactPlayer
                    url={video.urls.hd}
                    controls={true}
                    playing={false}
                    width="100%"
                    height="100%"
                />
            ) : (
                <p>Video URL is not available</p>
            )}
        </div>
    );
};

Video.propTypes = {
    video: PropTypes.object.isRequired,
};

export default Video;