import SideBar1 from './SideBar1'
import SideBar2 from './SideBar2'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);


function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>

            <SideBar1 />

            <div className={cx('main-content')}>
                {
                    children
                }
            </div>
            
            <SideBar2/>
        </div>
     );
}

export default DefaultLayout;