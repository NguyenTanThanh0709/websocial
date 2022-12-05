import Button from '~/components/Button';
// import config from '~/config';
// import { signOut  } from "next-auth/react";


import classNames from 'classnames/bind';
import styles from './MiniProfile.module.scss';
const cx = classNames.bind(styles);



function MiniProfile({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.avatar} alt='avt'/>
            <div className={cx('body')}>
                <span className={cx('h2')}>{data.username}</span>
                <span className={cx('h3')}>{data.trietLy}</span>
            </div>

            <Button  style={{padding: "0 0 0 37px"}}>
                See
            </Button>
        </div>
     );
}

export default MiniProfile;