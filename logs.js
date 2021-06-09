//apply destructuring
const { Router } = require('express');

//since the server does not res => pull logentry model and create a new  logentry

const LogEntry = require('../models/LogEntry'); 



const router = Router();

router.get('/', async (req, res, next) => {
    try {
      const entries = await LogEntry.find();
      res.json(entries);
    } catch (error) {
      next(error);
    }
  }); 


router.post('/',async(req, res,next)=>{
    try {
        //create a new  logEntry
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
         next(error);  
    }
});
 



module.exports = router;