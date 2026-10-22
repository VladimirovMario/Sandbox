const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
