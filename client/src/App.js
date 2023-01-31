import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { Login } from './pages/login';
import { Cadastre } from './pages/cadastre';
import { CheckList } from './pages/checkList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route  path="/cadastre" element={<Cadastre />} />
        <Route  path="/checkList" element={<CheckList />} />
      </Routes>
    </Router>
  );
}

export default App;
