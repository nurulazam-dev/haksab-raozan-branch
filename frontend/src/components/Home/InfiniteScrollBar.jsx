const InfiniteScrollBar = () => {
  const noticeText =
    "Welcome to Haksab-Raozan-Branch! Stay updated with our latest news and events. Join us in making a difference!";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-green-500 py-1">
      <div
        className="inline-block text-black lg:text-[25px] text-[18px] font-serif leading-10"
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
