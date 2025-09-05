import { useParams, Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { gsBalancedata } from "../../../../assets/data/gsBalanceData";
import logo from "../../../../assets/images/logo/abu_maola_rowja.png";
import GSBDetailsPDF from "./GSBDetailsPdf";

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
      {/* top section */}
      <section className="mb-2">
        <p className="text-center mb-2">Bismillahir Rahmanir Rahim</p>
        <div className="relative py-2">
          <img src={logo} alt="" className="mx-auto h-32 object-contain" />
          <div className="flex justify-between items-center absolute inset-0 px-2">
            <div className="text-start">
              <p className="italic text-sm">Naraye Takbir</p>
              <p className="italic text-sm">Naraye Risalat</p>
              <p className="italic text-sm">Naraye Haydari</p>
              <p className="italic text-sm">Naraye Hasnayin</p>
              <p className="italic text-sm">Naraye Gaosiya</p>
              <p className="italic text-sm">Naraye Gaosiya</p>
              <p className="italic text-sm">Abu Maola Sultanpuri RH.</p>
            </div>
            <div className="text-end">
              <p className="italic text-sm">Allahu Akbar</p>
              <p className="italic text-sm">Yea Rasulullah S.A.W.</p>
              <p className="italic text-sm">Yea Ali Martuza A.S.</p>
              <p className="italic text-sm">Yea Hasan Yea Hossain A.S.</p>
              <p className="italic text-sm">Yea Gaosul Azam Dastagir RH.</p>
              <p className="italic text-sm">Gaosul Azam Maisvandary RH.</p>
              <p className="italic text-sm">Marhaba Marhaba</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1 text-slate-700">
            Hazrat Abul Khair Sultanpuri RH. Association Bangladesh, <br />
            (HASKAB) - Raozan Branch
          </h2>
          <p className="text-sm">
            East Raozan, Rashidar Para, Joynagor-4340, Raozan, Chattogram.
          </p>
          <p className="text-sm">
            <strong>Email:</strong> info@haskab-raozan-branch.org
          </p>
          <p>
            <strong>Head Office:</strong> Satgachia Darbar Sharif, Mujibnagar,
            Haidgaon, Patia, Chattogram.
          </p>
        </div>
        <div className="border border-slate-400 mt-2"></div>
      </section>
      <h2 className="text-2xl font-bold mb-1 text-center bg-green-600 text-white py-1">
        Giyarbi Sharif Balance Details
      </h2>

      <div className="px-3 py-1 mb-2">
        {/* <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
          Balance Summary
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <p>
            <span className="font-semibold text-black">
              Giyarbi Sharif Date:
            </span>{" "}
            {balance.giyarbiSharifDate}
          </p>
          <p>
            <span className="font-semibold text-black">Arabic Month:</span>{" "}
            {balance.arabicMonth}
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
      {/* PDF Download Button */}
      <div className="flex justify-end mb-4">
        <PDFDownloadLink
          document={<GSBDetailsPDF balance={balance} />}
          fileName={`Giyarbi-Sharif-Balance-${balance.id}.pdf`}
        >
          {({ loading }) => (
            <button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
      <div className="flex justify-between items-center py-2 text-sm text-slate-600">
        <p>Powered By @nurulazam</p>
        <p>
          Print on{" "}
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
    </div>
  );
};

export default GiyarbiSharifBalanceDetails;
