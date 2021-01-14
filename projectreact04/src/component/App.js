import React from 'react';
import youtube from '../apis/youtube'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { video: {} }
    }

    onInputSubmit = async (term) => {
        const response = await youtube.get('', {

        })

        this.state.video = response;
    }

    render() {
        return (
            <div>
                <SearchBar onSumit={this.onInputSubmit} />

            </div>
        );
    }
}

export default App;