import orgLogo from "../../assets/images/logo/abu_maola_rowja.png";

const TopBanner = ({ customClass, orgTitleClass }) => {
  return (
    <section className={`pb-3 text-slate-800 ${customClass}`}>
      <p className="text-center mb-2 anek-bangla-400">
        বিসমিল্লাহির রাহমানির রাহিম
      </p>
      <div className="relative py-3">
        <img src={orgLogo} alt="" className="mx-auto h-32 object-contain" />
        <div className="flex justify-between items-center absolute inset-0 px-2 anek-bangla-400">
          {/*  <div className="text-start">
            <p className="italic text-sm">Naraye Takbir</p>
            <p className="italic text-sm">Naraye Risalat</p>
            <p className="italic text-sm">Naraye Haydari</p>
            <p className="italic text-sm">Naraye Hasnayin</p>
            <p className="italic text-sm">Naraye Gaosiya</p>
            <p className="italic text-sm">Naraye Gaosiya</p>
            <p className="italic text-sm">Abu Maola Sultanpuri RH.</p>
          </div> */}
          <div className="text-start">
            <p className="text-sm">নারায়ে তাকবীর</p>
            <p className="text-sm">নারায়ে রিসালাত</p>
            <p className="text-sm">নারায়ে হায়দারি</p>
            <p className="text-sm">নারায়ে হাসনাইন</p>
            <p className="text-sm">নারায়ে গাউছিয়া</p>
            <p className="text-sm">নারায়ে গাউছিয়া</p>
            <p className="text-sm">আবু মাওলা সুলতানপুরী (র.)</p>
          </div>
          {/* <div className="text-end">
            <p className="italic text-sm">Allahu Akbar</p>
            <p className="italic text-sm">Yea Rasulullah S.A.W.</p>
            <p className="italic text-sm">Yea Ali Martuza A.S.</p>
            <p className="italic text-sm">Yea Hasan Yea Hossain A.S.</p>
            <p className="italic text-sm">Yea Gaosul Azam Dastagir RH.</p>
            <p className="italic text-sm">Gaosul Azam Maisvandary RH.</p>
            <p className="italic text-sm">Marhaba Marhaba</p>
          </div> */}
          <div className="text-end">
            <p className="text-sm">আল্লাহু আকবর</p>
            <p className="text-sm">ইয়া রাসূলুল্লাহ (সা.)</p>
            <p className="text-sm">ইয়া আলী মারতুজা (আ.)</p>
            <p className="text-sm">ইয়া হাসান ইয়া হোসাইন (আ.)</p>
            <p className="text-sm">ইয়া গাউছুল আজম দস্তগীর (রহ.)</p>
            <p className="text-sm">গাউছুল আজম মাইজভাণ্ডারী (রহ.)</p>
            <p className="text-sm">মারহাবা মারহাবা</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2
          className={`font-bold mb-1 galada-regular  ${
            orgTitleClass ? orgTitleClass : "text-slate-700 text-2xl"
          }`}
        >
          {/* Hazrat Abul Khair Sultanpuri RH. Association Bangladesh,  */}
          হযরত আবুল খায়ের সুলতানপুরী (র.) এসোসিয়েশন বাংলাদেশ,
          <br />
          {/* (HASKAB) - Raozan Branch */}
          (HASKAB) - রাউজান শাখা
        </h2>
        {/* <p className="text-sm">
          East Raozan, Rashidar Para, Joynagor-4340, Raozan, Chattogram.
        </p> */}
        <p className="text-sm anek-bangla-400">
          পূর্ব রাউজান, রশিদর পাড়া, জয়নগর-৪৩৪০, রাউজান, চট্টগ্রাম।
        </p>
        <p className="text-sm mb-0.5">
          {/* <strong>Email:</strong> */}
          <strong>ইমেইল:</strong> info@haskab-raozan-branch.org
        </p>
        {/* <p>
          <strong>Head Office:</strong> Satgachia Darbar Sharif, Mujibnagar,
          Haidgaon, Patia, Chattogram.
        </p> */}
        <p className="anek-bangla-400">
          <strong>প্রধান কার্যালয়:</strong> সাতগাছিয়া দরবার শরীফ, মুজিবনগর,
          হাইদগাঁও, পটিয়া, চট্টগ্রাম।
        </p>
      </div>
    </section>
  );
};

export default TopBanner;
