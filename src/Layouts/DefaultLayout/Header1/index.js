import config from '~/config';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Header1.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function Header1() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                 <Link to={config.routes.home} >
                    <img src={images.logo} alt="web" className={cx('logo-link')} />
                </Link>
            </div>

            <div className={cx('input')}>
                <div>
                    <i  className={cx('fa-solid','fa-magnifying-glass', 'icon_search')} ></i>
                    <input className={cx('input_search')} placeholder='search something'></input>
                </div>
            </div>

            <div className={cx('heart')}>
                <i  className={cx('fa-regular','fa-heart')}></i>
            </div>
        </div>
     );
}

export default Header1;