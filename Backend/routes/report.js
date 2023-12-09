const path = require('path');
const express = require('express');

const router = express.Router();
const reportController = ('../controllers/report');

router.post('/add-attendance',reportController.postAddAttendance);
// router.get('/get-attendance',reportController.getAttendance);


module.exports = router;
