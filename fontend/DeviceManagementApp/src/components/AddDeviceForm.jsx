import { useState } from "react";

export default function AddDeviceForm({
    onAdd
}) {
    const [device, setDevice] = 
        useState({
            code: "",
            user: "",
            department: "",
            ip: "",
            status: ""
        });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        onAdd(device);

        setDevice({
            code: "",
            user: "",
            department: "",
            ip: "",
            status: "Online"
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="card p-3 mb-3"
        >
            <input
                className="form-control mb-2"
                placeholder="Code"
                value={device.code}
                onChange={(e) => 
                    setDevice({
                        ...device,
                        code: e.target.value
                    })
                }
            />

            <input 
                className="form-control mb-2"
                placeholder="User"
                value={device.user}
                onChange={(e) => 
                    setDevice({
                        ...device,
                        user: e.target.value
                    })
                }
            />

            <input 
                className="form-control mb-2"
                placeholder="Department"
                value={device.department}
                onChange={(e) => 
                    setDevice({
                        ...device,
                        department: e.target.value
                    })
                }
            />

            <input 
                className="form-control mb-2"
                placeholder="IP Address"
                value={device.ip}
                onChange={(e) => 
                    setDevice({
                        ...device,
                        ip: e.target.value
                    })
                }
            />

            <button
                className="btn btn-primary"
            >Add Device</button>
        </form>
    )
}