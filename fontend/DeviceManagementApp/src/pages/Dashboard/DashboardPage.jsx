import StatCard from "../../components/StatCard";
import RecentDevicesTable from "../../components/RecentDevicesTable";

import "../../styles/Dashboard.css";

export default function DashboardPage() {
    return (
        <>
            <h2 className="mb-4">
                Dashboard
            </h2>

            <div className="row g-3">
                <div className="col-md-3 stat-card">
                    <StatCard
                        title="Desktop"
                        value="120"
                        icon="bi bi-pc-display"
                    />
                </div>
                <div className="col-md-3 stat-card">
                    <StatCard
                        title="Laptop"
                        value="15"
                        icon="bi bi-laptop"
                    />
                </div>
                <div className="col-md-3 stat-card">
                    <StatCard
                        title="Mobile"
                        value="150"
                        icon="bi bi-phone"
                    />
                </div>
                <div className="col-md-3 stat-card">
                    <StatCard
                        title="Printer"
                        value="8"
                        icon="bi bi-printer"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-8">
                    <RecentDevicesTable />
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            Theo phòng ban
                        </div>
                        <div className="card-body">
                            IT : 6 <br />
                            HR : 6 <br />
                            Purchasing: 3
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}