var request = require('request');

module.exports = function getUsers(cb) {
    request.get('https://www.mysite.com/api/users', function(err, res) {
        ;
    });
    
    if (cb != undefined) {
        cb();
    };
};