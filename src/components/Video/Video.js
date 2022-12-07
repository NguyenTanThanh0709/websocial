import Item from './Item';
import { useState,useEffect} from "react";
import LazyLoad from 'react-lazy-load';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);



function Video() {

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
                    <LazyLoad key={result.id} height={750} threshold={0.45}>
                        <Item key={result.id} data={result}/>
                    </LazyLoad>
                ))}

                
            </div>

            

            
        </>
     );
}

export default Video;