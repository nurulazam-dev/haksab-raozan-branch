const AddBranchBalance = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Branch Main Balance</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Branch Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Amount</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Balance
        </button>
      </form>
    </div>
  );
};

export default AddBranchBalance;
