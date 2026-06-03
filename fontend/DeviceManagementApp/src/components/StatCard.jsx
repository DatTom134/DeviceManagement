export default function StatCard({
    title,
    value,
    icon
}) {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="text-muted">{title}</h6>
                        <h3>{value}</h3>
                    </div>
                    <div>
                        <i className={`${icon} fs-1`}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}