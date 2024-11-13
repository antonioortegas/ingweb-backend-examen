const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true
        },
        nombre: {
            type: String,
            require: true
        },
        contactos: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Users', UsersSchema);