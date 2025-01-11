const cryptoService = require('../../services/v1/cryptoService');
const calculateDeviation = require('../../utils/calculateDeviation');

const getDeviation = async (req, res) => {
  const { coin } = req.query;
  if (!coin) {
    return res.status(400).json({ error: 'coin name is required!' });
  }
  try {
    const prices = await cryptoService.getLast100Prices(coin);
    if (prices.length === 0) {
      return res.status(404).json({ error: 'No data found for this coin' });
    }
    const deviation = calculateDeviation(prices);
    res.json({ deviation });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getDeviation };
