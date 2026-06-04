export default function DevicesTable({
    devices,
    onDelete,
    onEdit
}) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>User</th>
                    <th>Department</th>
                    <th>IP</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    devices.map(device => (
                        <tr key={device.id}>
                            <td>{device.code}</td>
                            <td>{device.user}</td>
                            <td>{device.department}</td>
                            <td>{device.ip}</td>
                            
                            <td>
                                <span
                                    className={
                                        device.status === "Online"
                                            ? "badge bg-success"
                                            : "badge bg-danger"
                                    }
                                >
                                    {device.status}
                                </span>
                            </td>

                            <td>
                                <button 
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(device)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(device.id)}
                                >Delete</button>
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}