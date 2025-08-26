import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMembers } from "../../redux/userSlice";
import Loader from "../../components/Shared/Loader";
import Error from "../../components/Shared/Error";

const MemberProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { member, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchMembers(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Member Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p>
          <strong>Name:</strong> {member.name}
        </p>
        <p>
          <strong>Email:</strong> {member.email}
        </p>
        <p>
          <strong>Role:</strong> {member.role}
        </p>
        <p>
          <strong>Attendance History:</strong>{" "}
          {member.attendanceHistory.join(", ")}
        </p>
        <p>
          <strong>Payments History:</strong> {member.paymentsHistory.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MemberProfile;
