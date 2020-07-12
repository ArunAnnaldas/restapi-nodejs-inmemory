module.exports = function(app) {

    var path = require('path');
    var mime = require('mime');
    var fs = require('fs');

    var employees = require('../controllers/employee.controller.js');

    // Create a new employee
    app.post('/api/employees', employees.create);

    // Retrieve all employee
    //app.get('/api/employees/getAll', employees.findAll);

    app.get('/api/employees', employees.findAll_QP);

    // Retrieve a single employee by Id
    app.get('/api/employees/:id', employees.findOne);

    // Update a employee with Id
    app.put('/api/employees/:id', employees.update);

    // Delete a employee with Id
    app.delete('/api/employees/:id', employees.delete);

    app.get('/getData',employees.getData);

    app.post('/postData',employees.setData);

    app.get('/download', function(req, res){

        var file = __dirname + '/upload-folder/testing-nodejs-restapi.zip';
      
        var filename = path.basename(file);
        var mimetype = mime.lookup(file);
      
        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);
      
        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
      });
}