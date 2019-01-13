const express = require('express');
const app = express();

app.get('/api/v1/reports', (req, res) => {
  res.status(200).send({
    success: 'true',
    reports: [
      {
        id: 1,
        userName: 'Magnus Ferm',
        userId: 666,
        period: '2018 v52',
        status: 'Inlämnad',
        signed: true
      },
      {
        id: 2,
        userName: 'Magnus Ferm',
        userId: 666,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 3,
        userName: 'Magnus Ferm',
        userId: 666,
        period: '2019 v02',
        status: 'Ej inlämnad',
        signed: false
      },
      {
        id: 4,
        userName: 'Ida Ferm',
        userId: 333,
        period: '2018 v52',
        status: 'Inlämnad',
        signed: true
      },
      {
        id: 5,
        userName: 'Ida Ferm',
        userId: 333,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 6,
        userName: 'Melvin Butterscough',
        userId: 111,
        period: '2019 v01',
        status: 'Inlämnad',
        signed: false
      },
      {
        id: 7,
        userName: 'Melvin Butterscough',
        userId: 111,
        period: '2019 v02',
        status: 'Ej inlämnad',
        signed: false
      }
    ]
  });
});

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
