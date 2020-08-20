const express = require('express');
const app = express();

// Importing Routes
const registerRoute = require('./routes/register');
const commonstudentsRoute = require('./routes/commonstudents');
const suspendRoute = require('./routes/suspend');
const retrievefornotificationsRoute = require('./routes/retrievefornotifications');

// Request body format
app.use(express.json());

// Using Routes
app.use('/api/register', registerRoute);
app.use('/api/commonstudents', commonstudentsRoute);
app.use('/api/suspend', suspendRoute);
app.use('/api/retrievefornotifications', retrievefornotificationsRoute);

PORT = process.env.PORT || 3000;

// let test = async function () {
//     console.log('inside test');
//     try {

        // Use connect method to connect to the server
        // MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
        //     assert.equal(null, err);
        //     console.log("Connected successfully to server");

        //     const db = client.db(dbName);

        //     client.close();
        // })
       
        // client.connect(err,db => {
        //   const collection = client.db("metadesign").collection("user_roles");
        //   // perform actions on the collection object

        // });

//     } catch (e) {
//         console.log('err', e);
//     }
// }
// test()




app.listen(PORT, () => console.log(`Server Running On ${PORT}`));