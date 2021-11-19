module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/createuser', user.create);

    // Retrieve all Notes
    app.get('/allusers', user.findAll);

    // Retrieve a single Note with noteId
    app.get('/getuser/:userId', user.findOne);

    // Update a Note with noteId
    app.put('/updateuser/:userId', user.update);

    // Delete a Note with noteId
    app.delete('/deleteuser/:userId', user.delete);
}