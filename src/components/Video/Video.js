import ReactPlayer from 'react-player';
import images from '~/assets/images';
import './App.css'
function Video() {
    ReactPlayer.removeCustomPlayers();
    const link = images.video;
    return ( 
        <>
            <div className='app'>
            <ReactPlayer
                
                url= {link}
                width="460px"
                height="360px"
                controls={true}
                playing={true}
                
            />
            </div>
        </>
     );
}

export default Video;