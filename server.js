require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db');
const fetchCryptoDataJob = require('./jobs/fetchCryptoDataJob');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const statsDeviationRoutes = require('./routes/v1/statsDeviationRoutes');
const PORT = process.env.PORT || 5000;
const app = express();

// ################ DB connection call #####################
connectToDB();

//  ################ built in middlewares ##################
app.use(express.json());

// ################ Logger custom middleware #####################
app.use(loggerMiddleware);

// ################# cron job calls #######################
fetchCryptoDataJob();

// ##################### health route for testing whether service is up or not ###########################
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'SUCCESS',
    timestamp: new Date().toISOString(),
  });
});

// ################# All routes here  ###########################
app.use('/api/v1', statsDeviationRoutes);

// #################### running the server ########################
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
