import './adminCreateUser.css'
import AdminNavbar from '../../components/adminNavbar'
import {useState,useEffect} from "react"
import axios from 'axios'
function AdminCreateUser(){
    const [display, setDisplay] = useState(false)
    const [Firstname,setFirstName]=useState()
    const [Lastname,setLastName]=useState()
    const [Email,setEmail]=useState()
    const [Password,setPassword]=useState()
    const [submit,setSubmit]=useState(false)
    const [message, setMessage] = useState()
    console.log(Firstname,Lastname,Email,Password,submit)
    useEffect(()=>{
        if(submit){
            axios.post('http://localhost:8000/api/users/createUser',
              {
                  firstname : Firstname,
                  lastname: Lastname,
                  email: Email,
                  password: Password
              }
            )
            .then(function(response){
                setMessage(response.data)
                setSubmit(false)
            })
            .catch(function(error){
              console.log(error)
            })
        }
    },[submit])
    return(
        <div className="admin-create-users-panel-wrapper">
            <div className="admin-users-panel-navbar">
                <AdminNavbar />
            </div>
            <div className="admin-users-panel-detail">
                <div className="admin-users-panel-detail-wrapper">
                    <div className="input-details-1">
                        <input type="text" name="fName" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <input type="text" name="lName" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
                        <input type="email" name="emailId" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="password" name="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="input-details-2">
                        <label htmlFor="TRUE_ADMIN">Is Admin?</label>
                        <input type="checkbox" name="TRUE_ADMIN" id="TRUE_ADMIN" />
                    </div>
                    <div className="input-details-3">
                        <label htmlFor="TRUE_STAFF">Is Hospital Staff?</label>
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
                    <div className="create-user-message-display">
                        {message ? <span>{message}</span> : null}
                    </div>
                    <div className="input-details-4">
                        <button onClick={()=>{setSubmit(true)}}>CREATE USER</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default AdminCreateUser