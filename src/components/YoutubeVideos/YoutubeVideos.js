import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './YoutubeVideos.css'

function YouTubeVideos({ videos }) {
    const videoList = videos.map((video, i) => {
        return (
            <div key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        )
    
})

  return (
    <div>
        <Carousel>
            {videoList}
        </Carousel>
    </div>
  );
}

export default YouTubeVideos;
