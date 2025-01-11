const calculateDeviation = (prices) => {
  const n = prices.length;
  const mean = prices.reduce((sum, price) => sum + price, 0) / n;
  const variance =
    prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / n;
  return Math.sqrt(variance).toFixed(2);
};

module.exports = calculateDeviation;
