export function formatCurrency(amount) {
  if (isNaN(amount)) return "৳0";
  return amount.toLocaleString("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
