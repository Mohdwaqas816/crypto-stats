const axios = require('axios');

const fetchCryptoData = async (coin) => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
  const response = await axios.get(url);
  const {
    usd: price,
    usd_market_cap: marketCap,
    usd_24h_change: change24h,
  } = response.data[coin];
  return { coin, price, marketCap, change24h };
};

module.exports = { fetchCryptoData };
