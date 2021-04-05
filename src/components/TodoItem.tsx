import React from 'react';

//CSS
import CSS from 'csstype';

//types
import { TodoObj } from '../App';

type Props = {
    todo: TodoObj;
    deleteTodo: (id: number) => void;
}
export class TodoItem extends React.Component<Props> {


    render() {
        return (
            <div>
            <h3>
                <input type='checkbox' />{'  '}
                {this.props.todo.title}
                <button
                style={buttonStyle}
                onClick={() => this.props.deleteTodo(this.props.todo.id)}
                > X </button>
            </h3>
            </div>
        )
    }
}

const buttonStyle: CSS.Properties = {
    backgroundColor: 'darkred',
    borderRadius: '30%',
    color: 'white',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem;
