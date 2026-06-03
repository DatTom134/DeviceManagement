import Sidebar from '../components/Sidebar.jsx'

export default function MainLayout({ children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 p-0">
                    <Sidebar />
                </div>
                <div className="col-10 p-3">
                    {children}
                </div>
            </div>
        </div>
    )
}