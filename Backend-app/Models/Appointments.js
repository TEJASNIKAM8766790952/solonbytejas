const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    salon: { type: String, required: true },
});

const Appointments = mongoose.model('Appointments', AppointmentSchema);

module.exports = Appointments;
