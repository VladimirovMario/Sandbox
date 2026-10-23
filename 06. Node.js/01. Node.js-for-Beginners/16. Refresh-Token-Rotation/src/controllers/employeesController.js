const Employee = require('../model/Employee');
const mongoose = require('mongoose');

const getAllEmployees = async (req, res) => {
  try {
    // Mongoose find() always returns an array.
    // If no documents match, it returns [] instead of null.
    // An empty array is a valid result, so return 200 OK.
    const employees = await Employee.find({});
    return res.status(200).json(employees);
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: 'Something went wrong reading employees' });
  }
};

const createEmployee = async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ message: 'First and last name are required!' });
  }

  try {
    const newEmployee = await Employee.create({ firstName, lastName });
    return res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Employee validation failed',
      });
    }

    return res
      .status(500)
      .json({ message: 'Something went wrong creating an employee' });
  }
};

const updateEmployee = async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const { invalidId, message } = validateId(id);

  if (invalidId) {
    return res.status(400).json({ message });
  }

  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(404).json({ message: `Employee ID ${id} not found!` });
    }

    employee.firstName = firstName ?? employee.firstName;
    employee.lastName = lastName ?? employee.lastName;
    await employee.save();

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Employee update failed',
      });
    }

    res.status(500).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.body;
  const { invalidId, message } = validateId(id);

  if (invalidId) {
    return res.status(400).json({ message });
  }

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id).exec();
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: `Employee with ID ${id} was removed!` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Something went wrong deleting the employee' });
  }
};

const getEmployeeById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isObjectIdOrHexString(id)) {
    return res.status(400).json({ message: 'Invalid employee ID format' });
  }

  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Something went wrong updating the employee' });
  }
};

function validateId(id) {
  if (!id) {
    return {
      invalidId: true,
      message: 'Id parameter is required',
    };
  }

  // Returns true if the given value is a Mongoose ObjectId (using instanceof)
  // or if the given value is a 24 character hex string, which is the most commonly used string representation of an ObjectId.
  if (!mongoose.isObjectIdOrHexString(id)) {
    return {
      invalidId: true,
      message: 'Invalid employee ID format',
    };
  }

  return { invalidId: false, message: '' };
}

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
};
