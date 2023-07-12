import axios from 'axios';
import { useEffect, useState } from 'react';
import YoutubeVideos from '../components/YoutubeVideos/YoutubeVideos';

const YoutubeVideosPage = () => {
    const [videos, setVideos] = useState([]);

    const API = 'AIzaSyAjLkcof_Sc7l2MLB8RZetmC0oYn0BjLCM'
    const channelID = 'UCKEjOKvmj1C43yJqjZjbzOQ';
    const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&key=${API}`

    useEffect(() => {
        fetchVideos();
    }, [])

    const fetchVideos = () => {
        axios.get(youtubeURL)
        .then(response => {
            const data = response.data.items.map((item, i) => {
                if(item.id.videoId) {
                    return item;
                }
            }).filter(Undefined => Undefined !== undefined)
            setVideos(data)
        })
        .catch(error => console.log('Error fetching videos:', error))
    }
 
    return (
        <div>
            <h2 className='text-center mt-5 mb-4'>Latest uploads</h2>
            <ul className='youtube-videos'>
                <YoutubeVideos videos={videos} />
            </ul>
        </div>
    )
}

export default YoutubeVideosPage;