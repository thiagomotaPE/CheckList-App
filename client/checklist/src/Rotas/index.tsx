import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import { Checklist } from '../pages/Checklist';
import { Login } from '../pages/Login';
import { SingIn } from '../pages/SingIn';

export function Rotas(){
    return(
        <>
        <Router>
            <Routes>
                <Route  path="/checkList" element={<Checklist />} />
                <Route path="/" element={<Login />} />
                <Route path="/singIn" element={<SingIn />} />
            </Routes>
        </Router>
        </>
    )
}