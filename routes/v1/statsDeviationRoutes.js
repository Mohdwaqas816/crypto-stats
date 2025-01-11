const express = require('express');
const router = express.Router();
const statsController = require('../../controllers/v1/statsController');
const deviationController = require('../../controllers/v1/deviationController');

router.get('/stats', statsController.getStats);
router.get('/deviation', deviationController.getDeviation);

module.exports = router;
