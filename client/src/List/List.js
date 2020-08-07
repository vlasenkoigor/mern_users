import React from 'react';
import {Item} from "./Item";
import PropTypes from 'prop-types';
const List = ({users, userSelectedCallback})=>{

    const onUserSelected = (index)=>{
        userSelectedCallback(index)
    }

    return (
        <ul className="List">
            {
                users.map((user, i)=><Item key={i} index={i+1} user={user} onSelected = {onUserSelected}/>)
            }
        </ul>
    )
}

List.propTypes = {
    users : PropTypes.array.isRequired,
    userSelectedCallback : PropTypes.func.isRequired
}
export {List};


