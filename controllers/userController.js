const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userController = {
    createUser: function(userObject) { 
        return new Promise((resolve, reject) => {
            bcrypt.hash(userObject.password, 10).then((hash) => {
                userObject.password = hash;
                let newUser = new User(userObject);
                newUser.save((err, result) => {
                    if(err) reject(err); 
                    resolve(result);
                });
            });
        });
    }, 

    authenticateUser: function(email, password) {
        return new Promise((resolve, reject) => {
            User.findOne({
                email: email
            }, (err, result) => {
                if(err) reject(err);
                else {
                    bcrypt.compare(password, result.password)
                        .then((isSame) => {
                                if(isSame) {
                                    resolve(result);//user
                                } else {
                                    resolve(isSame); //false
                                }
                        });
                }
            })
        });
    }
}

passport.use(new LocalStrategy( {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password,  done) { //username is now email
        userController.authenticateUser(username, password).then((isAuthenticated) => {
            return done(null, isAuthenticated);
        }).catch((err) => {
            return done(err);
        });
    } 
));

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser((user, done) => {
    User.findOne({
        _id: user._id
    }).exec((err, user) => {
        return(err, user)
    })
})

module.exports = userController; 

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));