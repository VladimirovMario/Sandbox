const express = require('express');
const router = express.Router();

const data = {};
data.employees = require('../../data/employees.json');

router
  .route('/')
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    const { firstName, lastName } = req.body;
    res.json({
      firstName,
      lastName,
    });
  })
  .put((req, res) => {
    const { firstName, lastName } = req.body;
    res.json({
      firstName,
      lastName,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  res.json({ id });
});

module.exports = router;
