import React from 'react';
import PropTypes from 'prop-types';

const Item = ({user, index, onSelected})=>(
<li className="item">
    <span>
        {index}
    </span>
        <input type="checkbox" checked={user.selected} onChange={onSelected.bind(null, index)}/>
    <span>
        {user.username}
    </span>
    <span>
        {user.email}
    </span>
    <button onClick={()=>console.log('clicked', index)}>remove</button>
</li>);

Item.propTypes = {
    user : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    onSelected : PropTypes.func.isRequired,
}


export {Item};
