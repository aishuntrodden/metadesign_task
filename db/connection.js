const uri = "mongodb+srv://metadesign:metadesign@cluster0.u7ki0.mongodb.net/<metadesign>?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;


let connection = async function () {
    return new Promise((resolve) => {
        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            console.log('err', err);
            console.log("Connected successfully to server");
            const dbo = db.db('metadesign')
            // const data = dbo.collection(collection).findOne({}, function (err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //     resolve(result);
            // });
            resolve(dbo);
        })
    });

}
module.exports = { connection }