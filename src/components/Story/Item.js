
import classNames from 'classnames/bind';
import styles from './Story.module.scss';
const cx = classNames.bind(styles);

function Item() {
    return ( 
        <div className={cx('item')}>
            <div className={cx('image')}>
                <img src='https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg'  alt='src'/>
            </div>
            <span className={cx('info')}>Nguyen Tan Thanh</span>
        </div>
     );
}

export default Item;