const cron = require('node-cron');
const coinGeckoService = require('../services/v1/coingeckoService');
const cryptoService = require('../services/v1/cryptoService');

const fetchCryptoDataJob = () => {
  cron.schedule('*/2 * * * *', async () => {
    console.log('Fetching cryptocurrency data...');
    try {
      const coins = ['bitcoin', 'matic-network', 'ethereum'];
      for (const coin of coins) {
        const data = await coinGeckoService.fetchCryptoData(coin);
        await cryptoService.saveCryptoData(data);
      }
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
    }
  });
};

module.exports = fetchCryptoDataJob;
