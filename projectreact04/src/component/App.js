import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [], onSelectVideo: null }

    componentDidMount() {
        this.onInputSubmit('');
    }

    onInputSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            onSelectVideo: response.data.items[0]
        });
    };

    onSelectVideo = (video) => {
        this.setState({ onSelectVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onInputSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.onSelectVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;