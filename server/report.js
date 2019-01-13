const fs = require('fs');
const path = require('path');

const loadReports = userId => {
  const filePath = path.join(__dirname, 'data/reports.json');
  const file = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  if (!userId || userId === '0') {
    return data;
  }

  userId = parseInt(userId, 10);
  return data.filter(report => report.userId === userId);
};

module.exports = {
  loadReports
};
