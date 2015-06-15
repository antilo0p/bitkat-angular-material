module.exports = {
    mongoDB: {
            connector: 'mongodb',
            url: process.env.OPENSHIFT_MONGODB_DB_URL + process.env.BITKAT_DB
        }
};
