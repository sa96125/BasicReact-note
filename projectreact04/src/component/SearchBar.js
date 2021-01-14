import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.onSubmit(this.state.term);
                }}>
                    <label>Video Search</label>
                    <input
                        type='text'
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;