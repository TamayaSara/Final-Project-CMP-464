const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new eachHourOfInterval('Not allowed by CORS'))
        }
    }, 
    credentials: true, 
    optionsSuccessStation: 200
}

module.exports = corsOptions 