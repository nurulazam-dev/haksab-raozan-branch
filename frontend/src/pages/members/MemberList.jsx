import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from '../../redux/userSlice';
import { Link } from 'react-router-dom';

const MemberList = () => {
    const dispatch = useDispatch();
    const members = useSelector((state) => state.user.members);
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);

    useEffect(() => {
        dispatch(fetchMembers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Member List</h1>
            <Link to="/members/add" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Add New Member
            </Link>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b py-2 px-4">Name</th>
                        <th className="border-b py-2 px-4">Role</th>
                        <th className="border-b py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td className="border-b py-2 px-4">{member.name}</td>
                            <td className="border-b py-2 px-4">{member.role}</td>
                            <td className="border-b py-2 px-4">
                                <Link to={`/members/${member.id}`} className="text-blue-500">
                                    View Profile
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MemberList;