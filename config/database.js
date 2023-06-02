const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose.Promise - global.Promise
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        // UseUnifieldTopology: true,
    })
        .then(() => console.log('connection successfully!'))
        .catch((err) => {
            console.log('Error connecting to database!')
            console.error(err)
            process.exit(1);
        })
}