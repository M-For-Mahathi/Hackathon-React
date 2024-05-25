import React, { useState, useEffect } from 'react';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        const response = await fetch('/api/appointments/');
        const data = await response.json();
        setAppointments(data);
    };

    return (
        <div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        {appointment.provider_name} - {appointment.date_time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appointments;
