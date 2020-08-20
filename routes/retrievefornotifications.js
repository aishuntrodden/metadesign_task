const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
    res.send('API/retrievefornotifications');
})


module.exports = router;