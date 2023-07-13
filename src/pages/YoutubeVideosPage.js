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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const fetchVideos = () => {
    //     axios.get(youtubeURL)
    //     .then(response => {
    //         const data = response.data.items.map((item, i) => {
    //             if(item.id.videoId) {
    //                 return item;
    //             }
    //         }).filter(Undefined => Undefined !== undefined)
    //         setVideos(data)
    //     })
    //     .catch(error => console.log('Error fetching videos:', error))
    // }
    const fetchVideos = () => {
        axios.get(youtubeURL)
        .then(response => {
            const data = response.data.items
                .map((item, i) => {
                    if (item.id.videoId) {
                        return item;
                    }
                    return null; // Return a placeholder value for items without videoId
                })
                .filter(item => item !== null); // Filter out the null values
            setVideos(data);
        })
        .catch(error => console.log('Error fetching videos:', error));
    }
    
    return (
        <div>
            <h2 className='text-center mt-5 mb-4'>Latest uploads</h2>
            <div className='youtube-videos'>
                <YoutubeVideos videos={videos} />
            </div>
        </div>
    )
}

export default YoutubeVideosPage;