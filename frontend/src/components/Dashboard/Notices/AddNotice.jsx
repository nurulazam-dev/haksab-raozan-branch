const AddNotice = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Notice</h2>
      <form>
        <div className="mb-4">
          <label className="block text-lg mb-2">Title:</label>
          <input type="text" className="border border-gray-300 p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Description:</label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Notice
        </button>
      </form>
    </div>
  );
};

export default AddNotice;
