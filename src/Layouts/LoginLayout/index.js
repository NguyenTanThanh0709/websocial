import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);



function LoginLayout({ children }) {
    return ( 
        <Container >
            <Row>
                <Col>
                    <div className={cx('content')}>
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
     );
}


export default LoginLayout;