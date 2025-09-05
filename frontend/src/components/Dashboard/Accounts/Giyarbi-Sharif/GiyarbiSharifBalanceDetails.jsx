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
    <div className="px-6 text-slate-800">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">
        GS Balance Details
      </h2>

      <div className="border border-blue-600 px-3 py-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
          Balance Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {balance.giyarbiSharifDate}
            </p>
            <p>
              <span className="font-semibold">Arabic Month:</span>{" "}
              {balance.arabicMonth}
            </p>
            <p>
              <span className="font-semibold">Collector:</span>{" "}
              {balance.balanceCollector}
            </p>
          </div>
          <div>
            {" "}
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
          </div>
        </div>
      </div>
      {/* income & Cost table */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {/* Income Entries */}
        <div className="border border-green-600 px-3 py-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
            Income Entries
          </h2>
          {balance.incomeEntries.map((item, idx) => (
            <div key={idx} className="flex justify-between mb-2">
              <span>{item.donarName}</span>
              <span>{item.donationAmount}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t-2 border-slate-700 pt-1">
            <span>Total Income:</span>
            <span>{balance.totalIncome}</span>
          </div>
        </div>

        {/* Cost Entries */}
        <div className="border border-red-600 px-3 py-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
            Cost Entries
          </h2>
          {balance.costEntries.map((item, idx) => (
            <div key={idx} className="flex justify-between mb-2">
              <span>{item.costName}</span>
              <span>{item.costAmount}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t-2 border-slate-700 pt-1">
            <span>Total Cost:</span>
            <span>{balance.totalCost}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiyarbiSharifBalanceDetails;
