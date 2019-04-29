import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './Developer';

const developer = new Developer('Max', 'ABC');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Первое приложение на React</h1>
        <p>Hello React!</p>
        <h3>Разработчик {developer.name}, департамент {developer.department}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));