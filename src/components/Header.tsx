import React from 'react';
// CSS
import CSS from 'csstype';

export class Header extends React.Component {
    render() {
        return (
            <div style={headerStyle}>
                <h1>Todo List</h1>
            </div>
        )
    }
}

const headerStyle: CSS.Properties = {
    backgroundColor: 'teal',
    fontFamily: 'Arial',
    color: 'white',
    padding: '20px',
    textAlign: 'center'    
}

export default Header;