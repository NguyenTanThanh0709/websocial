import classNames from 'classnames/bind';
import styles from './sidebar1.module.scss';
const cx = classNames.bind(styles);

function SideBar1() {
    return ( 
        <h2 className={cx('ok')} >SideBar1</h2>
     );
}

export default SideBar1;