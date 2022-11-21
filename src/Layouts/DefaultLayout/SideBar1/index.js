import Button from '~/components/Button';
import Modals from '~/components/Modals';



import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './sidebar1.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);




function SideBar1() {

    const currentUser = true;

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
                    {/* <Button to={config.routes.search} text>
                    <i  className={cx('fa-solid','fa-magnifying-glass')} ></i>
                        
                        <span>
                        Search
                        </span>

                    </Button> */}
                    <Button>
                    <Modals></Modals>
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
                    <Button to={config.routes.home } text disabled>
                <i  className={cx('fa-brands','fa-facebook-messenger')} ></i>
                        
                        <span>
                        Messages
                        </span>

                    </Button>
                </li>

                <li>
                
                    <Button to={config.routes.home} text disabled>
                        <i  className={cx('fa-regular','fa-heart')} ></i>
                        <span>
                        Notification
                        </span>
                    </Button>
                </li>

                <li>
                
                    <Button to={config.routes.home} text disabled>
                        <i  className={cx('fa-regular','fa-square-plus')} ></i>
                        <span>
                        Create
                        </span>
                    </Button>
                </li>

                <li>
                
                    <Button to={config.routes.profile} text>
                        {currentUser ? 
                        (
                            <img className={cx('current_user_avt')} src='https://taimienphi.vn/tmp/cf/aut/ZFmt-I4Z1-cKnU-y1yu-Wg13-M5VG-I9Bw-22ha-5yD8-RfPY-k7jf-8J4u-edAU-X3SQ-ADuI-LoQ6-rxjA-1YEy-cZra-QTBy-kFR7-uqxu-Zku3-kMQr-fiW7-J1Li-byJw-FH8W-AQXZ-yKsx-tnMj-hhg7-hinh-anh-dai-dien-dep-dung-cho-facebook-instagram-zalo-1.jpg' alt='avt'/>
                        ) 
                        : 
                        (<i  className={cx('fa-solid','fa-user')}></i>)
                        }
                        <span >
                        Profile
                        </span>
                    </Button>
                </li>
            </ul>

        </div>
     );
}

export default SideBar1;