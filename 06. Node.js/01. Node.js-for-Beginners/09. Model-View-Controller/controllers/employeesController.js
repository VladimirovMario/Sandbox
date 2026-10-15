const data = {};
data.employees = require('../model/employees.json');

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createEmployee = (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({
    firstName,
    lastName,
  });
};

const updateEmployee = (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({
    firstName,
    lastName,
  });
};

const deleteEmployee = (req, res) => {
  res.json({ id: req.body.id });
};

const getEmployeeById = (req, res) => {
  const id = req.params.id;
  res.json({ id });
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
};
