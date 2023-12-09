const path = require('path');
const express = require('express');

const router = express.Router();
const reportController = require('../controllers/report');

router.post('/add-attendance',reportController.postAddAttendance);
router.get('/get-attendance/:date',reportController.getAddAttendance);


module.exports = router;
