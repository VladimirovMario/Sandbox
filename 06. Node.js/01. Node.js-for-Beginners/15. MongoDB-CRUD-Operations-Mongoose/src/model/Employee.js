const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
  lastName: { type: String, required: true },
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
