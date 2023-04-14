import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/adminDashboard"
import AdminUsers from './pages/admin/adminUsers'
import AdminCreateUser from './pages/admin/adminCreateUser'
import AdminEditUser from './pages/admin/adminEditUser'
import NoPage from './pages/noPage/noPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/admin" >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />}/>
          <Route path="User">
            <Route path="createUser" element={<AdminCreateUser/>} />
            <Route path="editUser" element={<AdminEditUser/>} />
          </Route>
          <Route path="hospitals" element={<NoPage />} />
          <Route path="feedback" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
