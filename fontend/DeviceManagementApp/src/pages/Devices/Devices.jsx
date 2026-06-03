import { useState } from 'react'
import { devicesData } from '../../data/deviceData'
import DevicesTable from '../../components/DeviceTable'

export default function Devices() {
    const [devices, setDevices] = useState(devicesData);

    const [search, setSearch] = useState("");

    const deleteDevice = (id) => {
        const updated = 
            devices.filter(
                device => device.id !== id
            );
        setDevices(updated);
    }

    const filteredDevices = 
        devices.filter(device => 
            device.code
                .toLowerCase()
                .includes(search.toLowerCase())
        );



    return (
        <>
            <h2 className="mb-4">
                Devices Management
            </h2>
            
            <div className="mb-3">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search device..."
                    value={search}
                    onChange={(e) => 
                        setSearch(e.target.value)
                    }
                />
            </div>

            <DevicesTable
                devices={filteredDevices}
                onDelete={deleteDevice}
            />
        </>
    )
}