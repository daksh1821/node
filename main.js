const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('test-event', () => {
    console.log('test-event triggered');
});
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    myEvent.emit('test-event');
    res.send("Hello World");
});
app.post('/test', (req, res) => {
    myEvent.emit('test-event');
    res.send("Test event triggered");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
