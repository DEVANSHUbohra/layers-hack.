const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add AJAX request to send form data to your server here
    alert('Form submitted! (Here you would normally send data to the server)');
});
app.post('/book-appointment', (req, res) => {
    const appointmentDetails = req.body;
    console.log(appointmentDetails);
    // Here you would typically save the appointment details to a database
    res.send('Appointment booked successfully!');
  });
  