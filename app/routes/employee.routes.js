module.exports = function(app) {

    var employees = require('../controllers/employee.controller.js');

    // Create a new employee
    app.post('/api/employees', employees.create);

    // Retrieve all employee
    app.get('/api/employees', employees.findAll);

    // Retrieve a single employee by Id
    app.get('/api/employees/:id', employees.findOne);

    // Update a employee with Id
    app.put('/api/employees/:id', employees.update);

    // Delete a employee with Id
    app.delete('/api/employees/:id', employees.delete);
}