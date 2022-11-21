import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar1 from './SideBar1'
import SideBar2 from './SideBar2'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);


function DefaultLayout({children}) {
    return ( 
        <Container fluid className={cx('wrapper')} >
            <Row>

    
                <Col xs={12} md={3} lg={3}>
                    <SideBar1 />
                </Col>

                <Col xs={12} md={9} lg={6}>
                    <div className={cx('main-content')}>
                        {
                            children
                        }
                    </div>
                </Col>

                <Col className={cx('d-none', 'd-lg-block')} lg={3}>
                    <SideBar2/>
                </Col>
            </Row>
        </Container>
     );
}

export default DefaultLayout;