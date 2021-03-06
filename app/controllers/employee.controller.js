var employees = {
				employee1: {
					firstname: "Arun",
					lastname: "Annaldas",
					emailID:"test@test.com",
					stream:"institutional",
					location:"mumbai",
					age: 25,
					id: 1
				},
				employee2: {
					firstname: "Rajesh",
					lastname: "Bhatia",
					emailID:"Rajesh.Bhatia@test.com",
					stream:"digital",
					location:"mumbai",
					age: 37,
					id: 2
				},
				employee3: {
					firstname: "Ankit",
					lastname: "Bajaj",
					emailID:"test@test.com",
					stream:"institutional",
					location:"mumbai",
					age: 17,
					id: 3
				},
				employee4: {
					firstname: "Abhijit",
					lastname: "Chavan",
					emailID:"test@test.com",
					stream:"institutional",
					location:"mumbai",
					age: 17,
					id: 4
				}
			}

var text = "Published by Host";

exports.create = function(req, res) {
	var newemployee = req.body;
    employees["employee" + newemployee.id] = newemployee;
	console.log("--->After Post, employees:\n" + JSON.stringify(employees, null, 4));
    res.end(JSON.stringify(newemployee, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(employees, null, 4));
    res.end(JSON.stringify(employees, null, 4));  
};

exports.findOne = function(req, res) {
    var employee = employees["employee" + req.params.id];
    console.log("--->Find employee: \n" + JSON.stringify(employee, null, 4));
    res.end(JSON.stringify(employee, null, 4));
};

exports.findAll_QP = function(req, res) {
	console.log(req.query.id)
	var employee;
	if(req.query.id===undefined && Object.keys(req.query).length<1){
		console.log("--->Find All: \n" + JSON.stringify(employees, null, 4));
    	res.end(JSON.stringify(employees, null, 4));	
	}
	else if(req.query.id!=undefined)
    {
		for (var key in req.query) {
			if(key==='id'){
				if(employees["employee" + req.query.id]===undefined){
					employee={};
					break;
				}else{
					employee = employees["employee" + req.query.id];
					console.log(key + " -> " + req.query[key]);	
				}
			}
			else {
				if(employee.firstname!=req.query[key]){
					employee={};
					break;
				}
			}
		  }
		
    	console.log("--->Find employee: \n" + JSON.stringify(employee, null, 4));
		res.end(JSON.stringify(employee, null, 4));
	}
	else if(req.query.id===undefined && req.query.length!=0){
		employee={};
		res.end(JSON.stringify(employee, null, 4));
	}
	
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedemployee = req.body; 
	if(employees["employee" + id] != null){
		// update data
		employees["employee" + id] = updatedemployee;

		console.log("--->Update Successfully, employees: \n" + JSON.stringify(employees, null, 4))
		
		// return
		res.end(JSON.stringify(updatedemployee, null, 4));
	}else{
		res.end("Employee doesn't Exist");
	}
};

exports.delete = function(req, res) {
	var deleteemployee = employees["employee" + req.params.id];
    delete employees["employee" + req.params.id];
    console.log("--->After deletion, employee list:\n" + JSON.stringify(employees, null, 4) );
    res.end(JSON.stringify(deleteemployee, null, 4));
};

exports.getData=function(req,res){
	res.end(JSON.stringify(text,null,4));
};

exports.setData = function(req, res) {
	var textToAppend = text+ "<br/>" + Text.stringify(res.body.toString(),null,4);
	text=textToAppend
    res.end(text.toString());
};