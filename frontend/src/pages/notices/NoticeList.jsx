import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../redux/userSlice";
import { Link } from "react-router-dom";

const NoticeList = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.user.notices);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notices</h1>
      <Link
        to="/notices/add"
        className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Notice
      </Link>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 px-4 py-2">Title</th>
            <th className="border-b-2 border-gray-300 px-4 py-2">Date</th>
            <th className="border-b-2 border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notices?.map((notice) => (
            <tr key={notice?.id}>
              <td className="border-b border-gray-300 px-4 py-2">
                {notice?.title}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {new Date(notice?.date).toLocaleDateString()}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                <Link
                  to={`/notices/edit/${notice?.id}`}
                  className="text-blue-500"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeList;
