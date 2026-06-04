import { useState, useEffect } from 'react'
import { devicesData } from '../../data/deviceData'
import DevicesTable from '../../components/DeviceTable'
import AddDeviceForm from '../../components/AddDeviceForm';
import EditDevicemodal from '../../components/EditDeviceModal';

export default function Devices() {
    const [devices, setDevices] = useState(devicesData);

    const [search, setSearch] = useState("");

    const [selectedDevice, setSelectedDevice] = useState(null);

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

    const editDevice = (device) => {
        setSelectedDevice(device);
    };

    const updateDevice = (updatedDevice) => {

        const updatedList = 
            devices.map(device => 
                device.id === updatedDevice.id
                    ? updatedDevice
                    : device
            );

        setDevices(updatedList);
    };

    useEffect(() => {
        
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
                onEdit={editDevice}
            />

            <EditDevicemodal 
                selectedDevice={selectedDevice}
                onUpdate={updateDevice}
            />
        </>
    )
}