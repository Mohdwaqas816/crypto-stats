const CryptoData = require('../../models/cryptoData');

const saveCryptoData = async (data) => {
  const { coin, price, marketCap, change24h } = data;
  const newData = new CryptoData({ coin, price, marketCap, change24h });
  await newData.save();
};

const getLatestCryptoData = async (coin) => {
  return await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
};

const getLast100Prices = async (coin) => {
  const data = await CryptoData.find({ coin })
    .sort({ timestamp: -1 })
    .limit(100);
  return data.map((record) => record.price);
};

module.exports = { saveCryptoData, getLatestCryptoData, getLast100Prices };
