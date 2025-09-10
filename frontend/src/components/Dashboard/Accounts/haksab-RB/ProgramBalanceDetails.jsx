import { useParams, Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TopBanner from "../../../Shared/TopBanner";
import { programBalancedata } from "../../../../assets/data/programBalanceData";
import ProgramBalanceDetailsPDF from "./ProgramBalanceDetailsPDF";

const ProgramBalanceDetails = () => {
  const { id } = useParams(); // get id from URL
  const balance = programBalancedata?.find((item) => item.id === id);

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
      {/* top section */}
      <TopBanner />

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-center bg-green-600 text-white py-1 rounded-t-lg">
        Program Balance Details
      </h2>

      <div className="px-3 py-1 mb-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <p>
            <span className="font-semibold text-black">Program Date:</span>{" "}
            {balance.programDate}
          </p>
          <p>
            <span className="font-semibold text-black">Day:</span>{" "}
            {balance.programDay}
          </p>
          <p>
            <span className="font-semibold text-black">Program:</span>{" "}
            {balance.programName}
          </p>
          <p>
            <span className="font-semibold text-black">Program Type:</span>{" "}
            {balance.balanceType}
          </p>
          <p>
            <span className="font-semibold text-black">Balance Collector:</span>{" "}
            {balance.balanceCollector}
          </p>

          <p className="text-green-600 font-medium">
            <span className="font-semibold text-black">Total Income:</span>{" "}
            {balance.totalIncome}/=
          </p>
          <p className="text-red-600 font-medium">
            <span className="font-semibold text-black">Total Cost:</span>{" "}
            {balance.totalCost}/=
          </p>
          <p className="text-blue-600 font-medium">
            <span className="font-semibold text-black">Available Balance:</span>{" "}
            {balance.balance}/=
          </p>
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
            <div key={idx} className="flex justify-between border-t mb-1">
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
            <div key={idx} className="flex justify-between border-t mb-1">
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
      <div className="flex justify-between items-center py-2 text-sm text-slate-600">
        <p>Powered By @nurulazam</p>
        <p>
          Print :{" "}
          {new Date()
            .toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
            .replace(/\//g, "-")}{" "}
        </p>
        <p>Developed By @mnawebprogramming</p>
      </div>
      {/* PDF Download Button */}
      <div className="flex justify-end mb-4">
        <PDFDownloadLink
          document={<ProgramBalanceDetailsPDF balance={balance} />}
          fileName={`Program-Balance-${balance.id}.pdf`}
        >
          {({ loading }) => (
            <button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ProgramBalanceDetails;
