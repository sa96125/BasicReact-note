import React from 'react';

class SearchBar extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={event => {
                    event.preventDefault()
                    this.props.onSubmit(this.state.text)
                }}>
                    <label>Image search</label>
                    <input
                        value={this.state.text}
                        onChange={event => this.setState({ text: event.target.value })}
                        type='text'
                    />
                    {this.state.text.length > 8 ? '초과하였습니다. 하지마라니까 더하고 있노' : '입력란에 8글자 이하로 입력하세용~~'}
                </form>
            </div>

        );
    }
}

export default SearchBar;
