import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import RoleList from './pages/roles/RoleList';
import CreateRole from './pages/roles/CreateRole';

const App = () => {
  return (
    (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/role-list" element={<RoleList/>} />
        <Route path="/create-role" element={<CreateRole/>} />
      </Routes>
    </BrowserRouter>
  )
  )
}


export default App
