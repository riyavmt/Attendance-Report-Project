const Attendance = require('../models/report');

exports.postAddAttendance = async(req,res)=>{
    try{
        const report = await Attendance.create({...req.body});
        res.json(report);
    }
    catch(err){
        console.log(err)
    }
}