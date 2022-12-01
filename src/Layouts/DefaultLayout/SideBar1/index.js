import Button from '~/components/Button';



import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './sidebar1.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);




function SideBar1() {


    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content_logo')}>
                <Link to={config.routes.home} >
                    <img src={images.logo} alt="Tiktok" className={cx('logo-link')} />
                </Link>
            </div>

            <ul>
                <li >
                    
                    <Button to={config.routes.home} text>
                        <i  className={cx('fa-solid','fa-house')}></i>
                        <span>
                        Home
                        </span>

                    </Button>
                </li>

                <li>
                    <Button to={config.routes.explore} text>
                        <i  className={cx('fa-solid','fa-image')}></i>
                        
                        <span>
                        Explore
                        </span>

                    </Button>
                </li>

                <li>
                    <Button to = {config.routes.search} text>
                            <i  className={cx('fa-solid','fa-magnifying-glass')} ></i>
                            <span>
                                Search
                            </span>
                    </Button>
                </li>

                <li>
                    <Button to={config.routes.video} text>
                <i  className={cx('fa-brands','fa-youtube')} ></i>
                        
                        <span>
                        Video
                        </span>

                    </Button>
                </li>

              

                

              

                <li>
                
                    <Button to={config.routes.upload} text>
                    <i  className={cx('fa-solid','fa-upload')}></i>
                        <span >
                        Upload New
                        </span>
                    </Button>
                </li>
            </ul>

        </div>
     );
}

export default SideBar1;