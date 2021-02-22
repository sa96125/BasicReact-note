import React from 'react';


// 이제는 눈 감고도 하는 서치 콤포넌트  ( 설명 생략 )
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={e => {
                    e.preventDefault();
                    this.props.onSubmit(this.state.term);
                }}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;