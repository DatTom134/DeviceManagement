import { Link } from 'react-router-dom'
import '../styles/Sidebar.css'

export default function Sidebar() {
    return (
        <div className="bg-dark text-white vh-100 p-0">
            <div className="bg-dark text-white vh-100 p-2">
                <h3>IT Asset</h3>
                <ul className="nav flex-column">
                    <li className="nav-item w-100 sidebar-item">
                        <Link to="/" className="nav-link text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item w-100 sidebar-item">
                        <Link to="/devices" className="nav-link text-white">
                            Devices
                        </Link>
                    </li>
                    <li className="nav-item w-100 sidebar-item">
                        <Link to="/users" className="nav-link text-white">
                            Users
                        </Link>
                    </li>
                    <li className="nav-item w-100 sidebar-item">
                        <Link to="/departments" className="nav-link text-white">
                            Departments
                        </Link>
                    </li>
                    <li className="nav-item w-100 sidebar-item">
                        <Link to="/ip-addresses" className="nav-link text-white">
                            IP Address
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

