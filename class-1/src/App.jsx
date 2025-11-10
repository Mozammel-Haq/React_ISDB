import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import RoleList from './pages/roles/RoleList';
import CreateRole from './pages/roles/CreateRole';
import CustomerList from './pages/customers/CustomerList';
import CreateCustomer from './pages/customers/CreateCustomer';
import EditRole from './pages/roles/EditRole';
import EditCustomer from './pages/customers/EditCustomer';

const App = () => {
  return (
    (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >


        <Route path="/role" element={<RoleList/>} />
        <Route path="/role/create" element={<CreateRole/>} />
        <Route path="/role/edit/:id" element={<EditRole/>} />


        <Route path="/customer" element={<CustomerList/>} />
        <Route path="/customer/create" element={<CreateCustomer/>} />
        <Route path="/customer/edit:id" element={<EditCustomer/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
  )
}


export default App
