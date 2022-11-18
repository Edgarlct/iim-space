import {Route, Routes} from "react-router-dom";
import App from "./App";
import DallE from "./views/DallE/DallE";
import SpaceInvader from "./views/SpaceInvader/SpaceInvader";
import Dev from "./views/Dev/Dev";
import Lockscreen from "./views/Lockscreen/Lockscreen";
import TransitionScreenWelcome from "./views/TransitionScreen/TransitionScreenWelcome";
import TransitionScreenLoading from "./views/TransitionScreen/TransitionScreenLoading";
import TransitionScreenSpaceInvader from "./views/TransitionScreen/TransitionScreenSpaceInvader";
import TransitionScreenCongratulation from "./views/TransitionScreen/TransitionScreenCongratulation";
import TransitionScreen3D from "./views/TransitionScreen/TransitionScreen3D";
import TransitionScreenCDEB from "./views/TransitionScreen/TransitionScreenCDEB";
import Landing from "./views/Landing/Home/Langing";
import TransitionScreenUnlock from "./views/TransitionScreen/TransitionScreenUnlock";
import LandingDetail from "./views/Landing/Detail/LandingDetail";

export default function AvailableRoutes() {

    return <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Lockscreen/>}/>
            <Route path="welcome" element={<TransitionScreenWelcome/>}/>
            <Route path="loading" element={<TransitionScreenLoading/>}/>
            <Route path="transition">
                <Route path="space/invader" element={<TransitionScreenSpaceInvader/>}/>
                <Route path="congratulation" element={<TransitionScreenCongratulation/>}/>
                <Route path="3D" element={<TransitionScreen3D/>}/>
                <Route path="cdeb" element={<TransitionScreenCDEB/>}/>
                <Route path={"unlock"} element={<TransitionScreenUnlock/>}/>
            </Route>
            <Route path="enigma">
                <Route path="cdi" element={<Dev/>}/>
                <Route path="space/invader" element={<SpaceInvader/>}/>
            </Route>
            <Route path="landing">
                <Route path="choose" element={<Landing/>}/>
                <Route path="detail/:axe" element={<LandingDetail/>}/>
            </Route>
            <Route path="dalle" element={<DallE/>}/>
            <Route path="*" element={<Lockscreen/>}/>
        </Route>
    </Routes>
}
