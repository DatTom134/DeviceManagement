const devices = [
    {
        code: "KHV011",
        user: "Huỳnh Tấn Đạt",
        ip: "192.168.110.151",
        status: "Online"
    },
    {
        code: "KHV012",
        user: "Dương Thiện Hoàng",
        ip: "192.168.110.152",
        status: "Offline"
    },
    {
        code: "KHV013",
        user: "Lê Văn Lợi",
        ip: "192.168.110.30",
        status: "Online"
    }
];

export default function RecentDevicesTable() {
    return (
        <div className="card shadow-sm">
            <div className="card-header">
                Thiết bị mới nhất
            </div>

            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Máy</th>
                            <th>Người dùng</th>
                            <th>IP</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            devices.map(device => (
                                <tr key={device.code}>
                                    <td>{device.code}</td>
                                    <td>{device.user}</td>
                                    <td>{device.ip}</td>
                                    <td>{device.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}