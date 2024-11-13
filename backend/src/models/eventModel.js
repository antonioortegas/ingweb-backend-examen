const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema(
    {
        anfitrion: {
            type: String
        },

        descripcion: {
            type: String
        },

        inicio: {
            type: Date
        },

        duracion: {
            type: Number
        },

        invitados: {
            type: [ 
            {
                email: {
                    type: String,
                    require: true
                },
                estado: {
                    type: String,
                    require: true
                }
            }
            ]
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Events', EventsSchema);