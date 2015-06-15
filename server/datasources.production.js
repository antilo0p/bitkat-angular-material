module.exports = {
    mongoDB: {
            connector: 'loopback-connector-mongodb',
            url: process.env.OPENSHIFT_MONGODB_DB_URL
        }
};
