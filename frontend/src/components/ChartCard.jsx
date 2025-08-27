const ChartCard = ({ title, data }) => {
  return (
    <div className="border bg-slate-900 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="chart-container">
        {/* Placeholder for chart rendering logic */}
        {/* You can use libraries like Chart.js or Recharts to render the chart here */}
        <p>Chart will be rendered here with the following data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ChartCard;
