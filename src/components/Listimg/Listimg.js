import Item from './Item';
import {useEffect, useState} from "react";

import classNames from 'classnames/bind';
import styles from './Listimg.module.scss';
const cx = classNames.bind(styles);

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
                    <Item key={result.id} data={result}/>
                ))}
        </div>
    </> 
    );
}

export default Listimg;