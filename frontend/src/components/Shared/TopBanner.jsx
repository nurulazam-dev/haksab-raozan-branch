import orgLogo from "../../assets/images/logo/abu_maola_rowja.png";

const TopBanner = () => {
  return (
    <section className="pb-3 text-slate-800 bg-white">
      <p className="text-center mb-2">Bismillahir Rahmanir Rahim</p>
      <div className="relative py-2">
        <img src={orgLogo} alt="" className="mx-auto h-32 object-contain" />
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
    </section>
  );
};

export default TopBanner;
