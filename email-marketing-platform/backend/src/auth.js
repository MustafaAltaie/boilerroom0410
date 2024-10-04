const LocalStrategy = require('passport-local').Strategy;

function initializePassport(passport) {
    passport.use(new LocalStrategy(
        (username, password, done) => {
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        
    });
}

module.exports = { initializePassport };