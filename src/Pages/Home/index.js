import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';


function Home() {
    return ( 
        <h2>
            <FontAwesomeIcon icon={faHome} />
            {/* <i class="fa-solid fa-user"></i> */}
            Home pageeeeeeeeeeeeeee
        </h2> 
    );
}

export default Home;