import { useEffect, useState } from 'react'

export default function EditDeviceModal({
  selectedDevice,
  onUpdate
}) {
    const [device, setDevice] = useState(null);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!selectedDevice) {
            /* eslint-disable react-hooks/set-state-in-effect */
            setDevice(null);
            setIsLoading(true);
            /* eslint-enable react-hooks/set-state-in-effect */
            return;
        }

        setErrors({});

        const timer = setTimeout(() => {
            setDevice({ ...selectedDevice });
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [selectedDevice]);

    const validateForm = () => {
        if (!device) return false;

        const newErrors = {};
        if (!device.code?.trim()) newErrors.code = "Code không được để trống";
        if (!device.user?.trim()) newErrors.user = "User không được để trống";

        // Kiểm tra định dạng IP đơn giản
        const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
        if (device.ip && !ipRegex.test(device.ip)) {
            newErrors.ip = "Địa chỉ IP không đúng định dạng (VD: 192.168.1.1)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // trả về true nếu không có lỗi
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (validateForm()) {
            onUpdate(device);
            // Mẹo Bootstrap: Tìm nút close và tự kích hoạt click để đóng modal an toàn
            const closeBtn = document.querySelector('#editModal .btn-close');
            if (closeBtn) closeBtn.click();
        }
    }

    return (
        <div
            className='modal fade'
            id='editModal'
            tabIndex='-1'
            aria-hidden='true'
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>Edit Device</h5>
                        <button
                            className='btn-close'
                            data-bs-dismiss='modal'
                        ></button>
                    </div>

                    { isLoading ? (
                        <div className="modal-body text-center">Loading device data...</div>
                    ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="modal-body">

                            {/* ô nhập Code + hiển thị lỗi */}
                            <div className="mb-2">
                                <input
                                    className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                                    placeholder='Code'
                                    value={device?.code ?? ''}
                                    onChange={(e) =>
                                        setDevice({
                                            ...device,
                                            code: e.target.value
                                        })
                                    }
                                />
                                {errors.code && <div className='invalid-feedback'>{errors.code}</div> }
                            </div>

                            {/* ô nhập user */}
                            <div className="mb-2">
                                <input
                                    className={`form-control ${errors.user ? 'is-invalid' : ''}`}
                                    placeholder='User'
                                    value={device?.user ?? ''}
                                    onChange={(e) =>
                                        setDevice({
                                            ...device,
                                            user: e.target.value
                                        })
                                    }
                                />
                                {errors.user && <div className='invalid-feedback'>{errors.user}</div> }
                            </div>

                            {/* ô nhập department */}
                            <div className="mb-2">
                                <input
                                    className='form-control'
                                    placeholder='Department'
                                    value={device?.department ?? ''}
                                    onChange={(e) =>
                                        setDevice({
                                            ...device,
                                            department: e.target.value
                                        })
                                    }
                                />
                            </div>

                            {/* ô nhập IP + hiển thị lỗi */}
                            <div className="mb-2">
                                <input
                                    className={`form-control ${errors.ip ? 'is-invalid' : ''}`}
                                    placeholder='IP Address'
                                    value={device?.ip ?? ''}
                                    onChange={(e) =>
                                        setDevice({
                                            ...device,
                                            ip: e.target.value
                                        })
                                    }
                                />
                                {errors.ip && <div className="invalid-feedback">{errors.ip}</div>}
                            </div>

                            {/* ô chọn Status */}
                            <div className="mb-2">
                                <select
                                    className="form-select"
                                    value={device.status ?? 'Online'}
                                    onChange={(e) =>
                                        setDevice({
                                            ...device,
                                            status: e.target.value
                                        })
                                    }
                                >
                                    <option >Online</option>
                                    <option>Offline</option>
                                </select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"    
                                type="button"
                            >
                                Close
                            </button>
                            <button
                                className='btn btn-primary'
                                type='submit'
                            >
                                Save
                            </button>

                        </div>
                    </form>
                    )}
                </div>
            </div>
        </div>
    )
}

