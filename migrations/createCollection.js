'use strict'

module.exports.up = function async (db) {
     return db.collection('posts').updateMany({}, {$rename: {phoneNumber: "isDetele"}})

}

module.exports.down = function (db) {
    return db.collection('posts').updateMany({}, {$rename: {phone: "isDeteled"}})
}