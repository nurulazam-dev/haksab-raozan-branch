const InfiniteScrollBar = () => {
  const noticeText =
    "হযরত আবুল খায়ের সুলতানপুরী রহ. অ্যাসোসিয়েশন বাংলাদেশ (হাকসাব)-রাওজান শাখায় আপনাকে স্বাগতম! আমাদের সর্বশেষ সংবাদ এবং ইভেন্টগুলির সাথে আপডেট থাকুন। পরিবর্তন আনতে আমাদের সাথে যোগ দিন!";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-red-800 py-1">
      <div
        className="inline-block text-yellow-300 lg:text-[25px] text-[18px] anek-bangla-400 leading-10"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "scroll 120s linear infinite",
        }}
      >
        {Array(5).fill(`${noticeText} \u00A0\u00A0`)}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteScrollBar;
