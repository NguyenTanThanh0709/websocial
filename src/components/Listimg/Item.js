import classNames from 'classnames/bind';
// import images from '~/assets/images';
import styles from './Listimg.module.scss';
const cx = classNames.bind(styles);

function Item({data}) {
    return ( <>
    
        <div className={cx('wrapper')}>
            <img className={cx('IMG')} src={data.url} alt='anh'/>
            <div className={cx('middle')}>
                <div className={cx('text')}>{data.des}</div>
            </div>
            <i className={cx('fa-solid','fa-photo-film','color')}></i>
        </div>
    
    </> );
}

export default Item;