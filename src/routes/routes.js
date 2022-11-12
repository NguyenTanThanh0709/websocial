import Home from '~/Pages/Home';
import Profiles from '~/Pages/Profiles';
import Videos from '~/Pages/Videos';
import SignUp_SingIn from '~/Pages/SignUp_SingIn';
import Explore from '~/Pages/Explore';
import Search from '~/Pages/Search';

import {LoginLayout} from '~/Layouts';

const publicRoutes = [
    {path:'/login', component:SignUp_SingIn, layout: LoginLayout},
    {path:'/', component:Home},
    {path:'/profiles', component:Profiles},
    {path:'/videos', component:Videos},
    {path:'/explore', component:Explore},
    {path:'/search', component:Search},
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}
