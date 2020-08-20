const express = require('express');
const router = express.Router();
const queries = require('../db/db_queries');

router.post('/', async (req, res) => {


    let obj = { student: req.body.student }
    let data = await queries.find_query(obj, 'students')
    console.log('students found',data);
    for (let i = 0; i < data.length; i++) {
        if (data.length > 0 && data[i].status == 'active') {
            console.log(data[i])
            let obj = { student: data[i].student }
            let newObj = { $set: { status: 'suspend' } }
            let update_status = await queries.update_query(obj, newObj, 'students')
            console.log(`studen ${req.body.student} is suspended`)
        }
        else {
            console.log('already suspended or no records present for that student')
        }
    }
    res.send('API/SUSPEND');
})


module.exports = router;