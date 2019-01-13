const fs = require('fs');
const path = require('path');

const loadUsers = () => {
  const filePath = path.join(__dirname, 'data/users.json');
  const file = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(file);
};

module.exports = {
  loadUsers
};
