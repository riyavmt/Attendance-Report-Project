const Attendance = require('../models/report'); 
exports.postAddAttendance = async(req,res)=>{
    try{
        const report = (req.body.detailsArr.map(async(element)=>{
            return await Attendance.create(element);
        }));
        const result = await Promise.all(report);
        res.json(result)
        // console.log(req.body.detailsArr);
    }
    catch(err){
        console.log(err)
    }
} 

exports.getAddAttendance = async(req,res)=>{
    try{
        const reports = await Attendance.findAll({where:{date:req.params.date}});
        if(reports.length) res.json({"Report":reports,"message":"Found"});
        else res.json({"Report":reports,"message":"Not Found"});
    }
    catch(err){
        console.log(err);
    }
}