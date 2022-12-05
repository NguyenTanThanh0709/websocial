import Item from './Item';
import {useEffect, useState} from "react";
import LazyLoad from 'react-lazy-load';


import classNames from 'classnames/bind';
import styles from './Listimg.module.scss';
const cx = classNames.bind(styles);

const Loading = () => (
    
      <h1 >Loading...</h1>
    
  )

function Listimg() {

    const [img, setimg] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/images`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setimg(res);
            });
    },[]);
    
    return ( 
    <>
        <div className={cx('')} >
        {img.map((result) =>(
                    
                <LazyLoad
                key={result.id}
                height={300}  threshold={0.95}  once placeholder={<Loading />}
                >
                <Item key={result.id} data={result}/>
                </LazyLoad>
                ))}
        </div>
    </> 
    );
}

export default Listimg;