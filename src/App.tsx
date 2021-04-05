import React from 'react';
// components
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

export type TodoObj = {
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

  handleDeleteTodo = (id: number) => {
    this.setState({ list: [...this.state.list.filter(item => item.id !== id)] })
  };

  handleMarkComplete = (id: number) => {
    console.log(id)
    this.setState({ list: [...this.state.list.map(item => {
      if(item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    })]})
  }


  render() {

    return (
      <div>
        <Header />
        <AddTodo addTodo={this.handleAddTodo}/>
        {this.state.list.map(todo => (
          <TodoItem
            key={todo.id}  
            todo={todo} 
            deleteTodo={this.handleDeleteTodo} 
            markComplete={this.handleMarkComplete} 
          />
        ))}
      </div>
    );
  }
}

export default App;
