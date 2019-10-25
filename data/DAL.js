var connection = require('./mysqlConnection.js');

connection.connect();

exports.executeQuery = function(sqlQuery, params, callback) {

    if(connection.state === 'disconnected')
        connection.connect();
    
    connection.query(sqlQuery, params, (err, result) => {
        callback(err, result);
    });
};