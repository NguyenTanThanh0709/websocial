import config from '~/config';
//pages
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Videos from '~/Pages/Videos';
import SignUp_SingIn from '~/Pages/SignUp_SingIn';
import Explore from '~/Pages/Explore';
import Search from '~/Pages/Search';
import SignIn from '~/Pages/auth/signin';

// layout
import {LoginLayout} from '~/Layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: SignUp_SingIn, layout: LoginLayout },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.video, component: Videos },
    { path: config.routes.explore, component: Explore},
    { path: config.routes.signIn, component: SignIn, layout: LoginLayout },
    { path: config.routes.search, component: Search},
];

const privateRoutes = [

]

export {publicRoutes,privateRoutes}
