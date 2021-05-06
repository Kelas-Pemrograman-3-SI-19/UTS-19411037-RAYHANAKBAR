const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    NomorKartuAtm: {
        type: String,
    },
    NomorHandphone: {
        type: String,
    },
    PinMbanking: {
        type: String,
    },
    Kodeakses: {
        type: String
    }
})

module.exports = mongoose.model('user',UserSchema)