import React from 'react';

//CSS
import CSS from 'csstype';

//types
import { TodoObj } from '../App';

type Props = {
    todo: TodoObj;
    deleteTodo: (id: number) => void;
    markComplete: (id: number) => void;
}

type State = {
    getStyle: () => CSS.Properties;
}

export class TodoItem extends React.Component<Props, State> {
    getStyle() {
        return {
            paddingLeft: '10px',
            backgroundColor: 'gainsboro',
            overflow: 'auto',
            fontFamily: 'Arial',
            fontSize: '18px',
            color: 'darkslategray',
            border: '1px solid darkgray',
            textDecoration: this.props.todo.isComplete ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
            <h3>
                <input type='checkbox' 
                    onChange={() => this.props.markComplete(this.props.todo.id)}
                />{' '}
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
    cursor: 'pointer',
    margin: '10px'
}

export default TodoItem;
