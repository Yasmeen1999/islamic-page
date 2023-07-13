import './YoutubeVideos.css'

function YouTubeVideos({ videos }) {
    const videoList = videos.map((video) => {
        return (
            <div key={video.id.videoId}>
                <iframe
                    height="200"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.title}
                    allowFullScreen
                    
                ></iframe>
            </div>
        )
    
})

  return (
    <>
        {videoList}
    </>
  );
}

export default YouTubeVideos;
