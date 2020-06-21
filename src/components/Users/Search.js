import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {
    state = {
        text: '',
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        }else{
            this.props.searchUsers(this.state.text)
            this.setState({text: ''})
        }
        
    }
    
    onChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div className="container">
                <form onSubmit= {this.onSubmit} className='form'>
                    <div className="form-group row">
                        <div className="col-12">
                            <input 
                                type="text" 
                                name="text" 
                                placeholder="Search User..."
                                value={this.state.text}
                                onChange = {this.onChange}
                                className="form-control"
                                />
                        </div>                                                
                    </div>
                    <div className="form-group row">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div> 
                </form>
                <div className="form-group row">
                    { (showClear) &&
                        (<button className="btn btn-danger btn-block" onClick={clearUsers }>Clear</button>)
                    }
                </div>               
            </div>
        )
    }
}

export default Search
