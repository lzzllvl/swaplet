const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = {
    createUser: function(UserObject) { 
        return new Promise((resolve, reject) => {
            bcrypt.hash(UserObject.password, 10).then((err, hash) => {
                if(err) return err;
                UserObject.password = hash;
                let newUser = new User(UserObject);
                User.save((err, result) => {
                    if(err) reject(err); 
                    resolve(result);
                });
            });
        });
    }, 

    authenticateUser: function(UserObject) {
        return new Promise((resolve, reject) => {
            User.find({
                email: UserObject.email
            }, (err, result) => {
                if(err) reject(err);
                else {
                    bcrypt.compare(UserObject.password, result.password)
                        .then((same) => {
                                resolve(same);
                        });
                }
            })
        });
    }
}