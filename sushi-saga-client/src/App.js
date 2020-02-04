import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushi: [],
    budget: 100
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiData => this.setState({
      sushi: sushiData
    }))
  }

  eatSushi = (id) => {
    let targetSushi = this.state.sushi.find(sushi => sushi.id === id)

    if (this.state.budget >= targetSushi.price) {
      targetSushi.eaten = true
        this.state.eatenSushi.push(targetSushi)
        this.setState({
          sushi: this.state.sushi,
          budget: this.state.budget - targetSushi.price
        })
    } else {
      alert("Out of budget!")
    }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer 
        sushi={this.state.sushi}
        eatSushi={this.eatSushi}
        />
        <Table 
        eatenSushi={this.state.eatenSushi}
        budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;