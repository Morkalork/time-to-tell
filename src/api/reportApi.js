import axios from 'axios';

export const loadReports = (userName = 0) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/v1/reports/${userName}`)
      .then(response => resolve(response.data.reports))
      .catch(reject);
  });
};
