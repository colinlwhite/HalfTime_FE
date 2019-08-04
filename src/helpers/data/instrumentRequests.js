import axios from 'axios';

const getSingleInstrument = instrumentId => new Promise((resolve, reject) => {
  axios
    .get(`https://localhost:44387/api/instruments/ID/${instrumentId}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const getInstruments = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/instruments/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteInstrument = instrumentId => axios.put(`https://localhost:44387/api/instruments/delete/${instrumentId}`);

const createInstrument = newInstrument => axios.post('https://localhost:44387/api/instruments/', newInstrument);

const updateInstrument = (instrumentId, instrument) => axios
  .put(`https://localhost:44387/api/instruments/${instrumentId}`, instrument);

export default {
  getInstruments,
  deleteInstrument,
  createInstrument,
  updateInstrument,
  getSingleInstrument,
};
