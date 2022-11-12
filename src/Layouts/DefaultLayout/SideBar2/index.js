import classNames from 'classnames/bind';
import styles from './sidebar2.module.scss';
const cx = classNames.bind(styles);

function SideBar2() {
    return ( 
        <h2 className={cx('ok')}>SideBar2</h2>
     );
}

export default SideBar2;