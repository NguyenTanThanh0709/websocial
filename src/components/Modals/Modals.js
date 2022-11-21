import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import classNames from 'classnames/bind';
import styles from './Modals.module.scss';

import { Link } from 'react-router-dom';
import config from '~/config';

import App from './App';

const cx = classNames.bind(styles);



function Modals() {


    const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
    return ( 
        <>

        {values.map((v, idx) => (
                <div key={idx} className= {cx('me-2','mb-2', 'modal')} onClick={() => handleShow(v)}>
                    <i  className={cx('fa-solid','fa-magnifying-glass')} ></i>
                            <span>
                                Search
                            </span>
                </div>
            ))}
            <Modal className={cx('modals_show')} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
               <div className={cx('wrapper')}>
                    <div className={cx('modal_header')}>
                        <h2>Search</h2>
                        <form onSubmit={e => { e.preventDefault(); }}>
                            {/* <input placeholder='Search something' name='value_search' /> */}
                            <App></App>
                            <Link to = {config.routes.search} onClick={() => setShow(false)}>
                                
                                <button type='button' >
                                    <i  className={cx('fa-solid','fa-magnifying-glass')} ></i>
                                </button>
                            </Link>
                        </form>
                    </div>
                    <div className={cx('modal_body')}>
                        <span >Recent</span>
                        <span className={cx('clear')}>Clear all</span>
                    </div>
               </div>
            </Modal>

            
            
            </>
     );
}

export default Modals;