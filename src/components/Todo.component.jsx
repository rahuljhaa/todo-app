import React from 'react'

import './Todo.styles.scss';

const Todo = ({text}) => (
    <li className='task-item'>{text}</li>
);

export default Todo;
