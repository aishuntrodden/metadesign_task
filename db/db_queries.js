let connection = require('./connection')

let post_query = async function (obj, collection) {
    return new Promise(async (resolve) => {
        let db = await connection.connection();

        db.collection(collection).insertOne(obj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            resolve(res)
        });
    })
}

let find_query = async function (query, collection) {
    return new Promise(async (resolve) => {

        let db = await connection.connection();
        if (collection == 'teachers') {
            db.collection(collection).find(query).toArray(async function (err, result) {
                if (err) throw err;
                if (result.length == 0) {
                    let teacher_register_in_db = await post_query({ teacher: teacher }, collection);
                    resolve(result)
                }
                else {
                    resolve('Already present in db');
                }
            });
        }
        else if (collection == 'students') {
            db.collection(collection).find(query).toArray(async function (err, result) {
                if (err) throw err;
                resolve(result);
            })
        }
    })

}


let update_query = async function (obj, newObj, collection) {
    return new Promise(async (resolve) => {
        let db = await connection.connection();

        db.collection(collection).updateOne(obj, newObj, function (err, res) {
            if (err) throw err;
            resolve("active status changed");
        });
    })
}
module.exports = { post_query, find_query, update_query }