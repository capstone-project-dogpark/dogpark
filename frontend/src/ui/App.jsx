import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour.jsx'
import {Navigation} from "./components/Navbar.jsx";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {SignUp} from './SignUp.jsx'
import {WelcomePage} from "./WelcomePage.jsx";
import {Login} from "./Login.jsx";
import {MyFriendsPage} from "./MyFriendsPage.jsx";
import {ProfileViewPage} from "./ProfileViewPage.jsx";
import 'mapbox-gl/dist/mapbox-gl.css'
import {DogParks} from './DogParks.jsx';
import {CommunityPage} from "./CommunityPage.jsx";
import {FeedView} from "./components/FeedView";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHeart,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import {Provider} from "react-redux";
library.add(faHeart, faPlusCircle);



export function App({store}) {
    return (
        <>
            <Provider store={store}>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={"/SignUp"} element={<SignUp />} />
                    <Route path={"/Login"} element={<Login />} />
                    <Route path='MyFriendsPage' element={<MyFriendsPage />} />
                    <Route path={'ProfileViewPage'} element={<ProfileViewPage />} />
                    <Route  path={"/WelcomePage"} element={<WelcomePage />} />
                    <Route  path={"/DogParks"} element={<DogParks />} />
                    <Route  path={"/CommunityPage"} element={<CommunityPage />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}

