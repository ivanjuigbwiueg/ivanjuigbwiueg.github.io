import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searhing(this.state.search, this.state.type);
        }
    };

    handleFillter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searhing(this.state.search, this.state.type);
            }
        );
    };

    render(props) {
        return (
            <div>
                <div className='row'>
                    <div className='col s12'>
                        <div className='input-field inline w100'>
                            <input
                                type='search'
                                className='validate'
                                placeholder='поиск хуйни'
                                value={this.state.search}
                                onChange={(e) => {
                                    this.setState({ search: e.target.value });
                                }}
                                onKeyDown={this.handleKey}
                            />
                            <button
                                className='btn btn--search'
                                onClick={() => {
                                    this.props.searhing(
                                        this.state.search,
                                        this.state.type
                                    );
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <form action='#' className='serch__categories'>
                    <p>
                        <label>
                            <input
                                name='group1'
                                type='radio'
                                checked
                                data-type='all'
                                onChange={this.handleFillter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name='group1'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleFillter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='group1'
                                type='radio'
                                data-type='series'
                                onChange={this.handleFillter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Siries only</span>
                        </label>
                    </p>
                </form>
            </div>
        );
    }
}

export { Search };
