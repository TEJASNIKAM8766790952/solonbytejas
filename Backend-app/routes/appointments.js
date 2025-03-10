const express = require('express');
const Appointments = require('../models/Appointments.js');


const router = express.Router();

router.post('/appointments', async (req, res) => {
  try {
    const { name, email, date, time, city, area, salon } = req.body;
    const newAppointment = new Appointment({ name, email, date, time, city, area, salon });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
});

router.get('/appointments', async (req, res) => {
    try {
      const appointments = await Appointments.find();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch appointments' });
    }
  });

module.exports = router;
