const ProgramBalanceDetailsPDF = ({ balance }) => {
  return (
    <div>
      <h1>Program Balance Details</h1>
      <p>Program Date: {balance.programDate}</p>
      <p>Day: {balance.programDay}</p>
      <p>Program Type: {balance.balanceType}</p>
      <p>Balance Collector: {balance.balanceCollector}</p>
      <p>Total Income: {balance.totalIncome}/=</p>
      <p>Total Cost: {balance.totalCost}/=</p>
      <p>Available Balance: {balance.balance}/=</p>
    </div>
  );
};

export default ProgramBalanceDetailsPDF;
