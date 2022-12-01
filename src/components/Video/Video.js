import Item from './Item';
import { useState,useEffect} from "react";


// import { useElementOnScreen } from "~/App";
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);



function Video() {


    // const videoRef = useRef(null);
    // const [playing, setPlaying] = useState(false);

    // const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.3
    // }
    // const isVisibile = useElementOnScreen(options, videoRef)

    // useEffect(() => {
    //     if (isVisibile) {
    //       if (!playing) {
    //         videoRef.current.play();
    //         setPlaying(true);
    //       }
    //     } else {
    //       if (playing) {
    //         videoRef.current.pause();
    //         setPlaying(false);
    //       }
    //     }
    //   }, [isVisibile]);
    const [video, setvideo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/videos`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setvideo(res);
            });
    },[]);
      
    
    return ( 
        <>
            <div className={cx('wrapper')}>


                {video.map((result) =>(
                    <Item key={result.videoid} data={result}/>
                ))}

                
            </div>

            

            
        </>
     );
}

export default Video;