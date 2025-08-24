import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendanceRecords } from '../../redux/attendanceSlice';
import AttendanceTable from '../../components/AttendanceTable';
import { Spinner } from '../../components/Spinner';

const AttendanceList = () => {
    const dispatch = useDispatch();
    const { attendanceRecords, loading, error } = useSelector((state) => state.attendance);

    useEffect(() => {
        dispatch(fetchAttendanceRecords());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
            <AttendanceTable records={attendanceRecords} />
        </div>
    );
};

export default AttendanceList;