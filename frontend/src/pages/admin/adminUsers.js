import './adminUsers.css'
import {Link} from "react-router-dom"
import AdminNavbar from '../../components/adminNavbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

function AdminUsers() {
  const [dataBase,setData]=useState()
  const [change,setChange]=useState(false)

  useEffect(()=>{
    axios.get('http://localhost:8000/api/users/')
    .then( function(response){
      setData(response.data)
      console.log("-----")
    })
    .catch(function(error){
      console.log(error)
    })
  },[change])
  return (
    <div className="admin-users-wrapper">
      <div className="admin-users-navbar">
        <AdminNavbar />
      </div>
      {
        dataBase ? 
        <div className="admin-users-details">
        <div className="admin-users-upper">
            <div className="admin-upper-1">
                <h1>USERS ({dataBase.length})</h1>
            </div>
            <div className="admin-upper-2">
                <input type="text" name="Username" id="" placeholder="Search" />              
            </div>
            <div className="admin-upper-3">
                <div className="admin-upper-3-btn">
                  <Link className="link" to="/admin/User/createUser">Add User</Link>
                </div>              
            </div>
            <div className="admin-upper-4">
                <button onClick={()=>{setChange(!change)}}>Refresh</button>             
            </div>
        </div>
        <div className="admin-users-detail-wrapper">
          <table className="table-fill">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">FIRST NAME</th>
                <th className="text-center">LAST NAME</th>
                <th className="text-center">E-MAIL ID</th>
                <th className="text-center">CREATED</th>
                <th className="text-center">ROLE</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {dataBase.map((data, i) =>
                <tr key={i}>
                <td className="text-center data-id">{data._id}</td>
                <td className="text-center">{data.firstname}</td>
                <td className="text-center">{data.lastname}</td>
                <td className="text-center">{data.email}</td>
                <td className="text-center">{data.createdAt}</td>
                <td className="text-center">Admin</td>
                <td className="text-center-special">
                  <div className="text-center-special-btn">
                    <Link className="link" to="/admin/User/editUser">EDIT</Link>
                  </div>
                  
                </td>
              </tr>
              )}
              
            </tbody>
            
          </table>
        </div>
      </div>
      : <div className='admin-user-loading'><h1>LOADING...</h1></div>
      }
    </div>
  );
}
export default AdminUsers;