import './styles/adminNavbar.css'
import {Link} from "react-router-dom"

function adminNavbar(){
    return(
        <div className="admin-navbar">
            <div className="admin-navbar-logo">
                <h1>EMERGENCY RESPONSE SYSTEM</h1>
            </div>
            <div className="admin-navbar-wrapper">
                <div className="navbar-buttons"><Link to="/admin/dashboard">DASHBOARD</Link></div>
                <div className="navbar-buttons"><Link to="/admin/users">USERS</Link></div>
                <div className="navbar-buttons"><Link to="/admin/hospitals">HOSPITALS</Link></div>
                <div className="navbar-buttons"><Link to="/admin/feedback">FEEDBACK</Link></div>
            </div>
        </div>
        
    )
}
export default adminNavbar