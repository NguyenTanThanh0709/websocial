import config from '~/config';
//pages
import Home from '~/Pages/Home';
import Profiles from '~/Pages/Profiles';
import Videos from '~/Pages/Videos';
import SignUp_SingIn from '~/Pages/SignUp_SingIn';
import Explore from '~/Pages/Explore';
import Search from '~/Pages/Search';


// layout
import {LoginLayout} from '~/Layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: SignUp_SingIn, layout: LoginLayout },
    { path: config.routes.profile, component: Profiles },
    { path: config.routes.video, component: Videos },
    { path: config.routes.explore, component: Explore},
    { path: config.routes.search, component: Search},
];

const privateRoutes = [

]

export {publicRoutes,privateRoutes}
