const config = {
    env : process.env.NODE_ENV || 'development',
    port : process.env.PORT ||  3003,
    jwtSecret : process.env.JWT_SECRET|| 'your secret key',
    mongodbUri : process.env.MONGODB_URI || process.env.MONGODB_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') + 
    '/mernproject'
}

export default config