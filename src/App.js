import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recepies: []
    }
  }

  componentDidMount() {
    fetch("http://starlord.hackerearth.com/recipe").then((res) => res.json()).then((res) => this.setState({recepies:res}))
  }


  displayRecepie(recepie) {
    return(<div key={recepie.id}>
      <img src={recepie.image} className="App-img" />
      <ul>
        <li>Name: {recepie.name}</li>
        <li>Category: {recepie.category}</li>
        <li>Label: {recepie.label}</li>
        <li>Price: {recepie.price}</li>
        <li>Description: {recepie.description}</li>
      </ul>
    </div>)
  }

render() {
  const { recepies } = this.state;
  const recepieComponents = recepies.map((recepie) => this.displayRecepie(recepie));
  return (
    <div className="App">
      <div>
        <h1>Recepies!</h1>
        <div className="grid-container">
          {recepieComponents}
        </div>
      </div>
    </div>
  );
}
}

export default App;
