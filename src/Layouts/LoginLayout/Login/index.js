import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);


function Login() {
    return ( 
        <h2 className={cx('ok')}>Login</h2>
     );
}

export default Login;