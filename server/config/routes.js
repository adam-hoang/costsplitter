var controller = require('../controllers/mainController.js');

module.exports = function(app){
    app.get('/z/allGroups', function (req, res) {
        controller.index(req, res);
    })
    app.get('/z/group/:id', function (req, res) {
        controller.getGroup(req, res);
    })
    app.get('/z/user/:id', function (req, res) {
        controller.getUser(req, res);
    })
    app.get('/z/event/:id', function (req, res) {
        controller.showEvent(req, res);
    })
    app.post('/z/newUser/:id', function (req, res) {
        controller.newUser(req, res);
    })
    app.post('/z/newEvent/:id', function (req, res) {
        controller.newEvent(req, res);
    })
    app.post('/z/newPart/:id', function (req, res) {
        controller.newPart(req, res);
    })
    app.post('/z/deletePart/:id', function (req, res) {
        controller.removePart(req, res);
    })
    app.post('/z/newGroup', function (req, res) {
        controller.newGroup(req, res);
    })
    app.delete('/z/deleteGroup/:id', function (req, res) {
        controller.removeGroup(req, res);
    })
    app.post('/z/deleteEvent/:id', function (req, res) {
        controller.removeEvent(req, res);
    })
    app.post('/z/deleteUser/:id', function (req, res) {
        controller.removeUser(req, res);
    })
    app.post('/z/group/:id', function (req, res) {
        controller.updateGroup(req, res);
    })
    app.post('/z/event/:id', function (req, res) {
        controller.updateEvent(req, res);
    })
    app.post('/z/updateGroupEvent/:id', function (req, res) {
        controller.updateGroupEvent(req, res);
    })
    app.post('/z/user/:id', function (req, res) {
        controller.updateUser(req, res);
    })
}
