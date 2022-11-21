import Item from './Item';
import { useRef} from 'react'
import images from '~/assets/images';
import { Col} from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Story.module.scss';
const cx = classNames.bind(styles);



function Story() {

  const carousel = useRef(null);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  
  const handleRightClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    
  };




  return ( 
    <>
      <Col xs={12} md={12} lg={12} className={cx('wrapper')}>
          <div className={cx('container')}>
              <div className={cx('carousel')} ref={carousel}>

                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item> 
                
              </div>
              <div className={cx('buttons')}>
                <button onClick={handleLeftClick}>
                  <img src={images.left} alt='left'/>
                </button>
                <button onClick={handleRightClick}>
                  <img src={images.right} alt = 'right'/>
                </button>
              </div>
          </div>
      </Col>
    </> 
   );
}

export default Story;