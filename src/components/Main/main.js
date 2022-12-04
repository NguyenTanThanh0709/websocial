import Button from '~/components/Button';
import config from '~/config';
// import { signOut  } from "next-auth/react";


import classNames from 'classnames/bind';
import styles from './Main.module.scss';
const cx = classNames.bind(styles);



function Main({data}) {
    function handleClick(){
        localStorage.removeItem('user-info');
    }
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.avatar} alt='avt'/>
            <div className={cx('body')}>
                <span className={cx('h2')}>{data.username}</span>
                <span className={cx('h3')}>Welcom to my profile</span>
            </div>

            <Button onClick={handleClick} to={config.routes.login}  style={{padding: "0 0 0 37px"}}>
                Log out
            </Button>
        </div>
     );
}

export default Main;