import './adminEditUser.css'
import AdminNavbar from '../../components/adminNavbar'
import {useState} from "react"

function AdminEditUser(){
    const [display, setDisplay] = useState(false)
    return(
        <div className="admin-edit-users-panel-wrapper">
            <div className="admin-edit-users-panel-navbar">
                <AdminNavbar />
            </div>
            <div className="admin-edit-users-panel-detail">
                <div className="admin-edit-users-panel-detail-wrapper">
                    <div className="edit-input-details-1">
                        <input type="text" name="fName" placeholder="First Name" value={"ABCD"} readOnly/>
                        <input type="text" name="lName" placeholder="Last Name" value={"ABCD"} readOnly/>
                        <input type="email" name="emailId" placeholder="E-mail" value={"ABCD"} readOnly/>
                        {/* <input type="password" name="password" placeholder="Password" value={"ABCD"}/> */}
                    </div>
                    <div className="edit-input-details-2">
                        <label htmlFor="TRUE_ADMIN">Make Admin</label>
                        <input type="checkbox" name="TRUE_ADMIN" id="TRUE_ADMIN" />
                    </div>
                    <div className="edit-input-details-3">
                        <label htmlFor="TRUE_STAFF">Make Hospital Staff</label>
                        <input type="checkbox" name="TRUE_STAFF" id="TRUE_STAFF" onChange={()=>setDisplay(!display)}/>
                        {display ? 
                            <div><label htmlFor="hospitals">Choose a Hospital:</label>

                            <select name="hospitals" id="hospitals">
                                <option value="ZYDUS">ZYDUS</option>
                                <option value="SAL">SAL</option>
                                <option value="APPOLO">APPOLO</option>
                                <option value="SAVIOUR">SAVIOUR</option>
                            </select></div>: 
                        null}
                    </div>
                    <div className="edit-input-details-4">
                        <button className='edit-input-edit-btn'>EDIT USER</button>
                        <button className='edit-input-delete-btn'>DELETE USER</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default AdminEditUser