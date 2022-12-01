import { useState, useRef,useEffect} from "react";

import classNames from 'classnames/bind';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);



function Item({data}) {
    const[show,setShow]=useState(false);
    const[showSAVE,setShowSAVE]=useState(false);
    return ( 
        <div className={cx('content')}>
                <div className={cx('info')}>
                    <img className={cx('current_user_avt')} src={data.avatar} alt='avt'/>
                    <span>{data.name}</span>
                </div>

                <div className={cx('Description')}>
                {data.description}
                </div>
                
                <div className={cx('body_video')}>
                    <div>
                    <video className={cx('video')} src = {data.src}
                        autoPlay loop 
                    ></video>
                    <ul className={cx('ICON')}>
                        <li>
                                <button href="/#" onClick={(e) => setShow(!show)}>
                                    {
                                        show ? <i className={cx('fa-regular','fa-heart', 'red')}></i> : <i className={cx('fa-regular','fa-heart')}></i>
                                    }
                                </button>

                        </li>

                        <li>
                        <button href="/#" onClick={(e) => setShowSAVE(!showSAVE)}>
                                    {
                                        showSAVE ? <i className={cx('fa-regular', 'fa-bookmark', 'save')}></i>: <i className={cx('fa-regular', 'fa-bookmark')}></i>
                                    }
                                </button>
                        </li>
                    </ul>
                   
                    </div>
                    
                </div>
                    

                </div>
     );
}

export default Item;