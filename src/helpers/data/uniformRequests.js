import axios from 'axios';

const getSingleUniform = uniformId => new Promise((resolve, reject) => {
  axios
    .get(`https://localhost:44387/api/uniforms/ID/${uniformId}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const getUniforms = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/uniforms/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteUniform = uniformId => axios.put(`https://localhost:44387/api/uniforms/delete/${uniformId}`);

const createUniform = newUniform => axios.post('https://localhost:44387/api/uniforms/', newUniform);

const updateUniform = (uniformId, uniform) => axios
  .put(`https://localhost:44387/api/uniforms/${uniformId}`, uniform);

export default {
  getUniforms,
  deleteUniform,
  createUniform,
  updateUniform,
  getSingleUniform,
};
