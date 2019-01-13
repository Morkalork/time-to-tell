import axios from 'axios';

export const loadUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/v1/users')
      .then(response => resolve(response.data.users))
      .catch(reject);
  });
};
