import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) =>  { // destructuring const { login, avatar_url, html_url } = props.user;

        return (
            <div className= 'container mx-auto'>
                <div className="row">
                    <div className="col-4">
                        <img
                        src={avatar_url}
                        alt= ''
                        className='round-img'
                        style={{width: '60px'}}
                        />
                        <h3>{login}</h3>
                    
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More info</a>
                    </div>
                </div>
              
            </div>
        )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired, // above user is an object
}

export default UserItem
