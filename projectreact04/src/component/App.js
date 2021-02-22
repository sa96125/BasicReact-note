import React from 'react';

// 컴포넌트를 잘게 쪼개는 습관을 가지는 것도 중요하지만, 
// 어떤 콤포넌드를 어떤 데이터를 넣을 것인가?
// 방식, 흐름등을 구조적으로 잘설계하는 것도 리액트를 사용함에 있어서 중요한 사항이다.
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], onSelectVideo: null }

    // 로딩 이후 단 한번 실행되는 구문
    // 여기서는 데이터 리퀘스트가 사용된다. 디폴트는 빈문자열~
    componentDidMount() {
        this.onInputSubmit('');
    }

    // 여기서 디테일과, 리스트에 보내는 값을 처리하게 됨.
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