import React from 'react';
// components
import Header from './components/Header';
import AddTodo from './components/AddTodo';

type TodoObj = {
  id: number;
  title: string;
  isComplete: boolean;
}

type State = {
  list: TodoObj[];
}

export class App extends React.Component<any, State> {
  state: State = {
    list: [],

  }
  
  handleAddTodo = (todo: string) => {
    console.log(`in add Todo ${todo}`)
    const idNum: number = (this.state.list).length + 1;
    
    const newTodo: TodoObj = {
      id: idNum,
      title: todo,
      isComplete: false
    }
    
    this.setState({ list: [...this.state.list, newTodo]})

    console.log(this.state.list)
  };


  render() {

    return (
      <div>
        <Header />
        <AddTodo addTodo={this.handleAddTodo}/>
        {this.state.list.map(todo => (
          <p>{todo.title}</p>
        ))}
      </div>
    );
  }
}

export default App;
