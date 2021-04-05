import React from 'react';
// CSS
import CSS from 'csstype';

type Props = {
    addTodo: (todo: string) => void;
}

type State = {
    title: string
}

export class AddTodo extends React.Component<Props, State> {
    state ={
        title: ''
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: ''})
    } 
    render() {
        return (
            <div>
                <form
                    style={formStyle}
                    onSubmit={this.onSubmit}
                >
                    <input
                        style={inputStyle}
                        type="text"
                        name="title"
                        placeholder="Add a task here..."
                        value={this.state.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.currentTarget.value })}
                    >
                    </input>
                    <input
                        style={buttonStyle}
                        type="submit"
                        value="Submit"
                    >
                    </input>
                </form>
            </div>
        )
    }
}

const formStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px'
    
}

const inputStyle: CSS.Properties = {
    height: '40px',
    width: '300px',
    fontSize: '14pt',
    border: '3px solid grey',
    borderRadius: '5px',
}

const buttonStyle: CSS.Properties = {
    backgroundColor: 'darkslategray',
    marginLeft: '5px',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
}

export default AddTodo;