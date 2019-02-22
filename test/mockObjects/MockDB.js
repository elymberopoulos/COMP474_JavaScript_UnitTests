const mock = require('../mockObjects/MockObjects');
const database = require('../mockObjects/Database');

var db =  new database.Database();
var dbSock = new mock.Socks();
var dbPants = new mock.Pants();
db.storage.set("socks", dbSock.getPrice());
db.storage.set("pants", dbPants.getPrice());
db.storage.set("0.022", 0.022);
db.storage.set("0.023", 0.023);

module.exports.db = db;

