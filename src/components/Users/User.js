import React from 'react';
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'

const User = ({users, loading}) => {        
        if (loading) {
            return <Spinner/>
        } else {
            return (
                <div style={userStyle}>
                    {users.map(user => {
                    return <UserItem key={user.id} user={user}/>
                    }
                )}
                </div>
            )
        }       
}
User.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default User
