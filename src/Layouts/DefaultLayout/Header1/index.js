import config from '~/config';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Header1.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);


function Header1() {
    const [heart, setHeart] = useState(false);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                 <Link to={config.routes.home} >
                    <img src={images.logo} alt="web" className={cx('logo-link')} />
                </Link>
            </div>

            

            <div className={cx('heart')}  onClick={(e) => setHeart(!heart)}>
                <div className={cx(`${heart ? 'red' : null}`)}>
                <i   className={cx('fa-regular','fa-heart')} ></i>
                </div>
            </div>
        </div>
     );
}

export default Header1;