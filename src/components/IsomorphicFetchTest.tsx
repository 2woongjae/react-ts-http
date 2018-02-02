import * as React from 'react';
import * as fetch from 'isomorphic-fetch';

export default class IsomorphicFetchTest extends React.Component {
  async componentDidMount() {
    /*
    fetch('https://api.github.com/users')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
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
      response = await fetch('https://api.github.com/users');
    } catch (error) {
      console.log('========== ========== ==========');
      console.log(error);
      console.log('========== ========== ==========');
    }
    if (response !== null) {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      console.log('========== ========== ==========');
      console.log(response);
      console.log('========== ========== ==========');
    }
  }
  render() {
    return (
      <div>
        <h2>IsomorphicFetch Test</h2>
      </div>
    );
  }
}
