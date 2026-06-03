import { useState, useEffect } from 'react'
import { devicesData } from '../../data/deviceData'
import DevicesTable from '../../components/DeviceTable'
import AddDeviceForm from '../../components/AddDeviceForm';

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

    const addDevice = (newDevice) => {

        const device = {
            id: Date.now(),
            ...newDevice
        };

        setDevices([
            ...devices,
            device
        ]);

        console.log("nhân viên vừa được thêm vào:", device);
    };

    useEffect(() => {

        console.log(
            "Danh sách thiết bị thay đổi"
        );

    }, [devices]);

    return (
        <>
            <h2 className="mb-4">
                Devices Management
            </h2>

            <AddDeviceForm 
                onAdd={addDevice}
            />
            
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