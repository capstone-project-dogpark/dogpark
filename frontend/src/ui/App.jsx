import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { FourOhFour } from './FourOhFour.jsx'
import {Navigation} from "./components/Navbar.jsx";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {SignUp} from './SignUp.jsx'


export function App() {
    return (
        <>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route  path={"/SignUp"} element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}