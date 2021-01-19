import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <App />;
}

ReactDOM.render(<App />, document.querySelector('#root'));
