import * as React from 'react';
import axios from 'axios';

export default class AxiosTest extends React.Component {
  async componentDidMount() {
    /*
    axios
      .get('https://api.github.com/users')
      .then(response => {
        console.log('========== ========== ==========');
        console.log(response);
        console.log('========== ========== ==========');
      })
      .catch(error => {
        console.log('========== ========== ==========');
        console.log(error);
        console.log('========== ========== ==========');
      });
    */
    let response = null;
    try {
      response = await axios.get('https://api.github.com/users');
    } catch (error) {
      console.log('========== ========== ==========');
      console.log(error);
      console.log('========== ========== ==========');
    }
    if (response !== null) {
      console.log('========== ========== ==========');
      console.log(response);
      console.log('========== ========== ==========');
    }
  }
  render() {
    return (
      <div>
        <h2>Axios Test</h2>
      </div>
    );
  }
}
