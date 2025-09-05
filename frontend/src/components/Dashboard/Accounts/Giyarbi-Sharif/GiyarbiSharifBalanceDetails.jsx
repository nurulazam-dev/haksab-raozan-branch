import { useParams, Link } from "react-router-dom";
import { gsBalancedata } from "../../../../assets/data/gsBalanceData";

const GiyarbiSharifBalanceDetails = () => {
  const { id } = useParams(); // get id from URL
  const balance = gsBalancedata.find((item) => item.id === id);

  if (!balance) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Balance not found!
        </h2>
        <Link
          to="/dashboard/giyarbi-sharif-balance"
          className="text-blue-500 underline"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Balance Details</h2>
      <div className="space-y-3">
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {balance.giyarbiSharifDate}
        </p>
        <p>
          <span className="font-semibold">Arabic Month:</span>{" "}
          {balance.arabicMonth}
        </p>
        <p className="text-green-600 font-medium">
          <span className="font-semibold text-black">Income:</span>{" "}
          {balance.totalIncome}
        </p>
        <p className="text-red-600 font-medium">
          <span className="font-semibold text-black">Cost:</span>{" "}
          {balance.totalCost}
        </p>
        <p className="text-blue-600 font-medium">
          <span className="font-semibold text-black">Balance:</span>{" "}
          {balance.balance}
        </p>
        <p>
          <span className="font-semibold">Collector:</span>{" "}
          {balance.balanceCollector}
        </p>
      </div>
      <div className="mt-6 flex justify-between">
        <Link
          to="/dashboard/giyarbi-sharif-balance"
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Back
        </Link>
        <Link
          to={`/dashboard/giyarbi-sharif-balance/update/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default GiyarbiSharifBalanceDetails;
