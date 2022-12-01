import {useEffect, useState, useRef} from "react";
import React from "react";
// import axios from "axios";

import Posts from '~/components/Posts';
import { Row,Col} from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

/* <FontAwesomeIcon icon={faHeart} /> */



function Search() {
    
    const [searchValue, setSearchValue] = useState('___');
    const [post, setpost] = useState([]);
    const inputRef = useRef();
    const handleClick = () =>{
        let value = document.querySelector("#input1").value;
        setSearchValue(value);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/posts?name_like=${searchValue}`)
            .then((res) => res.json())
            .then((res) =>{
                // console.log(res);
                setpost(res);
            });
    },[searchValue]);

    return ( 

        <Row>
            <Col lg={12}>
            <div >
                    
            <div className={cx('input')}>
                    <i  className={cx('fa-solid','fa-magnifying-glass', 'icon_search')} 
                        onClick ={()=>{
                            handleClick()
                        }}

                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                alert("Please click icon search! ^^");
                            }
                        }}
                    ></i>
                    <input
                        className={cx('search_')}
                        id="input1"
                        ref={inputRef} 
                        placeholder="Tìm kiếm bài viết của ai đó, sau đó click icon"
                        spellCheck={false}
                    />
            </div>


            </div>
                    
            </Col>
            <>

                <div className={cx(`${post.length === 0 ? 'info' : 'none'}`)}>
                    <h5>Chưa tìm thấy bài viết phù hợp cho bạn, hãy thử tìm kiếm ở thanh input trên</h5>
                    <div>
                        <i className={cx("fa-solid", "fa-binoculars")}></i>
                        <span>Chưa tìm thấy!</span>
                    </div>
                </div>

                {
                    post.map((result) =>(
                        <Posts key={result.postID} data={result}/>
                    ))
                }
            </>
                
        </Row>
    );
}

export default Search;