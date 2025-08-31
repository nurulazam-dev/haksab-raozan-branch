const AddGiyarbiSharifBalance = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Giyarbi Sharif Balance</h2>
      <form>
        <div className="mb-4">
          <label className="block text-lg mb-2">Amount:</label>
          <input type="number" className="border border-gray-300 p-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Balance
        </button>
      </form>
    </div>
  );
};

export default AddGiyarbiSharifBalance;
