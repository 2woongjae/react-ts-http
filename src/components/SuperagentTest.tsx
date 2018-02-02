import * as React from 'react';
import * as request from 'superagent';

export default class SuperagentTest extends React.Component {
  async componentDidMount() {
    /*
    request.get('https://api.github.com/users').end((error, response) => {
      if (error) {
        console.log('========== ========== ==========');
        console.log(error);
        console.log('========== ========== ==========');
        return;
      }
      console.log('========== ========== ==========');
      console.log(response);
      console.log('========== ========== ==========');
    });
    */
    let response = null;
    try {
      response = await request.get('https://api.github.com/users');
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
        <h2>Superagent Test</h2>
      </div>
    );
  }
}
