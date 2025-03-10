import React, { useState } from 'react';
import './BookAppointment.css'; 

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [salon, setSalon] = useState('');
  const [message, setMessage] = useState('');

  const cityOptions = {
    Pune: [
      'Aundh', 'Baner', 'Bavdhan Khurd', 'Bavdhan Budruk', 'Balewadi', 'Shivajinagar', 'Bibvewadi',
      'Bhugaon', 'Bhukum', 'Dhankawadi', 'Dhanori', 'Dhayari', 'Erandwane', 'Fursungi', 'Ghorpadi',
      'Hadapsar', 'Hingne Khurd', 'Karve Nagar', 'Kalas', 'Katraj', 'Khadki', 'Kharadi', 'Kondhwa',
      'Koregaon Park', 'Kothrud', 'Lohagaon', 'Manjri', 'Markal', 'Mohammed Wadi', 'Mundhwa', 'Nanded',
      'Parvati (Parvati Hill)', 'Panmala', 'Pashan', 'Pirangut', 'Shivane', 'Sus', 'Undri', 'Vishrantwadi',
      'Vitthalwadi', 'Vadgaon Khurd', 'Vadgaon Budruk', 'Vadgaon Sheri', 'Wagholi', 'Wanwadi', 'Warje'
    ],
    Nashik: [
      'Panchavati', 'Gangapur Road', 'College Road', 'Indira Nagar', 'Cidco', 'Satpur', 'Mhasrul',
      'Nashik Road', 'Pathardi Phata', 'Deolali Camp', 'Govind Nagar', 'Ambad', 'Ashok Stambh',
      'Rane Nagar', 'Raviwar Peth', 'Dwarka', 'Sharanpur Road', 'Mahatma Nagar', 'Kamatwada',
      'Trimurti Chowk'
    ]
  };

  const salonNames = [
    'Salon A', 'Salon B', 'Salon C', 'Salon D', 'Salon E',
    'Salon F', 'Salon G', 'Salon H', 'Salon I', 'Salon J',
    'Salon K', 'Salon L'
  ];

  // Function to generate formatted salon data for areas
  const generateSalonData = (areas, salons) => {
    const result = {};
    areas.forEach((area, index) => {
      const formattedArea = area.replace(/\s+/g, '').replace(/[()]/g, '');
      result[formattedArea] = salons.slice(index % salons.length, (index % salons.length) + 3);
    });
    return result;
  };

  // Generate salon data for both cities
  const puneSalonData = generateSalonData(cityOptions.Pune, salonNames);
  const nashikSalonData = generateSalonData(cityOptions.Nashik, salonNames);

  // Salon data for cities
  const salonData = {
    Pune: puneSalonData,
    Nashik: nashikSalonData,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://newwebsite-1.onrender.com/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, date, time, city, area, salon }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Failed to book appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setCity('');
    setArea('');
    setSalon('');
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="appointment-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="appointment-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="appointment-input"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="appointment-input"
        />
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setArea('');
            setSalon('');
          }}
          required
          className="appointment-input"
        >
          <option value="" disabled>Select City</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
        </select>
        {city && (
          <select
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              setSalon('');
            }}
            required
            className="appointment-input"
          >
            <option value="" disabled>Select Area</option>
            {cityOptions[city].map((areaOption, index) => (
              <option key={index} value={areaOption}>{areaOption}</option>
            ))}
          </select>
        )}
        {area && salonData[city] && salonData[city][area.replace(/\s+/g, '').replace(/[()]/g, '')] && (
          <select
            value={salon}
            onChange={(e) => setSalon(e.target.value)}
            required
            className="appointment-input"
          >
            <option value="" disabled>Select Salon</option>
            {salonData[city][area.replace(/\s+/g, '').replace(/[()]/g, '')].map((salonOption, index) => (
              <option key={index} value={salonOption}>{salonOption}</option>
            ))}
          </select>
        )}
        <button type="submit" className="appointment-button">Book Appointment</button>
      </form>
      {message && <p className="appointment-message">{message}</p>}
    </div>
  );
};

export default BookAppointment;
