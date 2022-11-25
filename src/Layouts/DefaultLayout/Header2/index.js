import Button from '~/components/Button';
import config from '~/config';
import styles from './Header2.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


function Header2() {
    const currentUser = true;
    return ( 
        <ul className={cx('wrapper')}>
            <li>

            <Button to={config.routes.home} text>
                        <i  className={cx('fa-solid','fa-house')}></i>
                        

                    </Button>
            </li>

            <li>
                    <Button to={config.routes.explore} text>
                        <i  className={cx('fa-solid','fa-image')}></i>
                        
                
                    </Button>
            </li>

            <li>
                <Button to={config.routes.video} text>
                <i  className={cx('fa-brands','fa-youtube')} ></i>
                </Button>
            </li>

            <li>
                    <Button to={config.routes.home } text disabled>
                <i  className={cx('fa-brands','fa-facebook-messenger')} ></i>
                    
                    </Button>
            </li>

            <li>
                    <Button to={config.routes.home} text disabled>
                        <i  className={cx('fa-regular','fa-heart')} ></i>
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
                        
                    </Button>
            </li>
        </ul>
     );
}

export default Header2;