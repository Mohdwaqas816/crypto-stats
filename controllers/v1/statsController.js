const cryptoService = require('../../services/v1/cryptoService');

const getStats = async (req, res) => {
  const { coin } = req.query;
  if (!coin) {
    return res.status(400).json({
      error: 'coin name is required!',
    });
  }

  try {
    const data = await cryptoService.getLatestCryptoData(coin);
    if (!data) {
      return res.status(404).json({ error: 'No data found for this coin' });
    }
    res.json({
      price: data.price,
      marketCap: data.marketCap,
      '24hChange': data.change24h,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getStats };
