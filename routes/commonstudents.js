const express = require('express');
const router = express.Router();
const queries = require('../db/db_queries');

router.get('/',(req,res) => {
   
console.log(req.query)
let find_common_students = queries.find_query({teacher:req.query.teacher},'students');

    res.send('API/COMMONSTUDENTS');
})


module.exports = router;