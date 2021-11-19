module.exports = (app) => {
    const event = require('../controllers/event.controller.js');

    // Create a new Note
    app.post('/createevent', event.create);

    // Retrieve all Notes
    app.get('/allevent', event.findAll);

    // Retrieve a single Note with noteId
    app.get('/getevent/:eventId', event.findOne);

    // Update a Note with noteId
    app.put('/updateevent/:eventId', event.update);

    // Delete a Note with noteId
    app.delete('/deleteevent/:eventId', event.delete);
}