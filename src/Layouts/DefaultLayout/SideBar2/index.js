import MiniProfile from '~/components/MiniProfile';
import Main from '~/components/Main';
import {useEffect, useState} from "react";


import classNames from 'classnames/bind';
import styles from './sidebar2.module.scss';
const cx = classNames.bind(styles);

function SideBar2() {

    const [userMain, setuserMain] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/users?userId=1`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setuserMain(res);
            });
    },[]);


    const [user, setuser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/users?_limit=5`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setuser(res);
            });
    },[]);
    
    return ( 
        <div className={cx('wrapper')}>
                <div className={cx('wrapper_profile')}>
                    {
                        userMain.map((result) =>(
                            <Main key={result.userId} data={result}  />
                        ))
                    }
                </div >

                <div className={cx('wrapper_suggestions')}>
                    <span>Suggestions for you</span>
                    <span  className={cx('color')}>See all</span>
                </div>

                <div>
                    {
                        user.map((result) =>(
                            <MiniProfile key={result.userId} data={result}  />
                        ))
                    }
                </div>

                <div className={cx('wrapper_info')}>
                    <div className={cx('wrapper_info__contacts')}>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/instagram' className={cx('contacts')}> <span>Facebook</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/' className={cx('contacts')}> <span>Youtube</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://zalo.me/pc' className={cx('contacts')}> <span>zalo</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/' className={cx('contacts')}> <span>Linkedin</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1' className={cx('contacts')}> <span>TikTok</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://developers.facebook.com/docs/instagram' className={cx('contacts')}> <span>API</span></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://about.instagram.com/about-us/careers' className={cx('contacts')}> <span>Jobs</span></a>
                    </div>
                    <span>© 2022 INSTAGRAM FROM META</span>
                </div>
        </div>
     );
}

export default SideBar2;