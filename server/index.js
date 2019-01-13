const express = require('express');
const app = express();
const report = require('./report');
const user = require('./user');

app.get('/api/v1/reports/:id', (req, res) => {
  const userId = req.params.id;
  const reports = report.loadReports(userId);
  res.status(200).send({
    success: 'true',
    reports
  });
});

app.get('/api/v1/users', (req, res) => {
  const users = user.loadUsers();
  res.status(200).send({
    success: true,
    users
  });
});

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
