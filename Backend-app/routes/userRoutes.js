const express = require('express');
const router = express.Router();
const Contact = require('../Models/contacts.js');

router.post('/messages', async (req, res) => {
    console.log('POST /messages received:', req.body);

    const { name, email, phone, message } = req.body;

    try {
        const newMessage = new Contact({ name, email, phone, message });
        await newMessage.save();
        console.log('Message saved:', newMessage);
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.error('Error in POST /messages:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});


module.exports = router;
