import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import RoleList from './pages/roles/RoleList';
import CustomerList from './pages/customers/CustomerList';
import EditRole from './pages/roles/EditRole';
import EditCustomer from './pages/customers/EditCustomer';
import AddCustomer from './pages/customers/CreateCustomer';
import AddRole from './pages/roles/CreateRole';

const App = () => {
  return (
    (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >


        <Route path="/role" element={<RoleList/>} />
        <Route path="/role/add" element={<AddRole/>} />
        <Route path="/role/edit/:id" element={<EditRole/>} />


        <Route path="/customer" element={<CustomerList/>} />
        <Route path="/customer/add" element={<AddCustomer/>} />
        <Route path="/customer/edit/:id" element={<EditCustomer/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
  )
}


export default App
