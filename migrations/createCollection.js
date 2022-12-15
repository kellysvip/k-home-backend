'use strict'

module.exports.up = function async (db) {
     return db.collection('user').updateMany({}, {$rename: {phoneNumber: "phone"}})

}

module.exports.down = function (db) {
    return db.collection('user').updateMany({}, {$rename: {phone: "phoneNumber"}})
}