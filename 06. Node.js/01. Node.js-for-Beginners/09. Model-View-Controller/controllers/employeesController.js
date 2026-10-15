const data = {
  employees: require('../model/employees.json'),
  setEmployees: function (data) {
    this.employees = data;
  },
};

const getAllEmployees = (_, res) => {
  res.json(data.employees);
};

const createEmployee = (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.json({ message: 'First and last name are required!' });
  }

  const id = data.employees[data.employees.length - 1]?.id + 1 || 1;
  const newEmployee = { id, firstName, lastName };

  data.setEmployees([...data.employees, newEmployee]);
  res.status(201).json(newEmployee);
};

const updateEmployee = (req, res) => {
  const { firstName, lastName, id } = req.body;

  const employee = data.employees.find((emp) => emp.id === parseInt(id));
  if (!employee) {
    return res.status(400).json({ message: `Employee ID ${id} not found!` });
  }

  if (firstName) {
    employee.firstName = firstName;
  }
  if (lastName) {
    employee.lastName = lastName;
  }

  const filteredEmployees = data.employees.filter(
    (emp) => emp.id !== employee.id,
  );
  const unsortedEmployees = [employee, ...filteredEmployees];
  data.setEmployees(unsortedEmployees.sort((a, b) => a.id - b.id));

  res.json(employee);
};

const deleteEmployee = (req, res) => {
  const { id } = req.body;
  const employee = data.employees.find((emp) => emp.id === parseInt(id));
  if (!employee) {
    return res.status(400).json({ message: `Employee ID ${id} not found!` });
  }

  const filteredEmployees = data.employees.filter(
    (emp) => emp.id !== employee.id,
  );

  data.setEmployees([...filteredEmployees]);
  res.json({ message: `Employee with ID ${id} was  removed!` });
};

const getEmployeeById = (req, res) => {
  const id = req.params.id;
  const employee = data.employees.find((emp) => emp.id === parseInt(id));
  if (!employee) {
    return res.status(400).json({ message: `Employee ID ${id} not found!` });
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
};
