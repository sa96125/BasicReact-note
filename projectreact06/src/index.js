import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export default () => {
    return <App />;
}

ReactDOM.render(<App />, document.querySelector('#root'));
