import { useState} from "react";
import { Col,Card, Carousel} from 'react-bootstrap';
// import $ from 'jquery';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
const cx = classNames.bind(styles);
/* <FontAwesomeIcon icon={faHeart} /> */

function Posts({ data } ) {
    const[show,setShow]=useState(false);
    // const[showcmt,setShowcmt]=useState(false);
    const[showSAVE,setShowSAVE]=useState(false);
    // const [post,setpost] = useState({});
    // var cmtnew = "";
    // const handle = event => {
    //     let id = event.target.dataset.user;
    //     let cmt = document.getElementById(id).value;
    //     let url = `http://localhost:3001/posts?id=${id}`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((res) =>{
    //             // console.log(res);
    //             setpost(res);
    //         });
    //         cmtnew = post[0]['comments']
    //         // console.log(cmtnew)
    //         cmtnew.push(cmt)
            
    //   }
    //   post[0]['comments'] = cmtnew
    //   console.log(post[0]);
    
      
    return ( 

        <Col xs={12} md={12} lg={12} >

                <Card className={cx('content_card')} >

                    <div className={cx('content_img_avt')}>
                        <img className={cx('img_Avatar')} alt='avt' src={data.avatar}/>
                        <span className={cx('content_img_avt__name')}>
                            <span className={cx('ok')}>{data.name}</span>
                            <span className={cx('ok1')}>{data.title}</span>
                        </span>
                    </div>
                    
                    <Carousel>
                        {
                            data.images.map((result, index) => (
                                <Carousel.Item key={index}>
                                    <img 
                                    className={cx('d-block', 'w-100', 'img_carosel' )}
                                    src={result}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                    <Card.Body>
                        <div className={cx('body_icon')}>
                            <div className={cx('icon_1')}>
                                <button href="/#" onClick={(e) => setShow(!show)}>
                                    {
                                        show ? <i className={cx('fa-regular','fa-heart', 'red')}></i> : <i className={cx('fa-regular','fa-heart')}></i>
                                    }
                                </button>
                                <button href="/#" onClick={(e) => e.preventDefault()}>
                                    <i className= {cx('fa-regular','fa-comment')}></i>
                                </button>
                                <button href="/#" onClick={(e) => e.preventDefault()}>
                                    <i className={cx('fa-solid','fa-share-from-square')}></i>
                                </button>
                            </div>

                            <div className={cx('icon_2')}>
                                <button href="/#" onClick={(e) => setShowSAVE(!showSAVE)}>
                                    {
                                        showSAVE ? <i className={cx('fa-regular', 'fa-bookmark', 'save')}></i>: <i className={cx('fa-regular', 'fa-bookmark')}></i>
                                    }
                                </button>
                            </div>
                        </div>

                        <span className={cx('count_like')}>
                            {data.like} likes
                        </span>

                        <div className={cx('body__title')}>
                            <span>
                                {data.title1}
                            </span>
                            <span>
                                {data.description}
                            </span>
                        </div>

                        <div className={cx('body__comments')}>
                        
                        {
                            data.comments.map((result, index) => (
                                <div key={index}>
                                    <strong>Some one</strong>
                                    <span>{result}</span>
                                </div>
                            ))
                        }
                            
                        </div>

                        <div className={cx('content_post')}>
                            <div className={cx('content_post__item')}>
                                <a className={cx('icon')} href="/#" onClick={(e) => e.preventDefault()}>
                                    <i className={cx('fa-regular','fa-face-laugh-wink')}></i>
                                </a>
                                <input id={data.id} placeholder='Add a comment...'></input>
                                
                                <span data-user={data.id}  >
                                    
                                    Post
                                </span>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            
            </Col>

    );
}

export default Posts;