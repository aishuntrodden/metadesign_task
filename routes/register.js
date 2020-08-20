const express = require('express');
const router = express.Router();
const db_get = require('../db/connection')
const queries = require('../db/db_queries');

router.post('/', async (req, res) => {
    console.log('req.body', req.body);
    let user_response = []
    req.body.students.map(async (student) => {
        let obj = { teacher: req.body.teacher, student: student, status: 'active' };
        let check_students = await queries.find_query({ student: student, teacher: req.body.teacher }, 'students')
        console.log('check_students.length',check_students.length);
        if (check_students.length ==0) {
            let data = await queries.post_query(obj, 'students')
            user_response.push(`data inserted: ${data} into students`)
        }
        else {
            user_response.push(`data already present = ${student}`)
        }

    })
    let query = { teacher: req.body.teacher };
    let check_teacher = queries.find_query(query, 'teachers');
    res.send(user_response)
})


module.exports = router;    