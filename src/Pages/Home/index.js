import {useEffect, useState} from "react";
// import LazyLoad from 'react-lazyload'
import LazyLoad from 'react-lazy-load';
// import axios from "axios";

import Story from '~/components/Story';
import Posts from '~/components/Posts';
import { Row} from 'react-bootstrap';

/* <FontAwesomeIcon icon={faHeart} /> */



function Home() {
    
    const [post, setpost] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setpost(res);
            });
    },[]);
    
    // console.log(post);
  
    return ( 

        <Row>
            <>
                <Story/>
            </>
            <>
                {post.map((result) =>(
                    <LazyLoad key={result.id}
                    height={810}  threshold={0.3}  once
                     >
                        <Posts key={result.id} data={result}/>
                    </LazyLoad>
                ))}
            </>
                
        </Row>
    );
}

export default Home;