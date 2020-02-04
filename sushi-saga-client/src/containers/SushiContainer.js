import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startIndex: 0
  }

  getMoreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  } 

  render() {
    let targetSushiArray = [...this.props.sushi].slice(this.state.startIndex, this.state.startIndex + 4)
    
    let sushiComponentList = targetSushiArray.map(sushi => 
      <Sushi
      sushi={sushi}
      key={sushi.id}
      eatSushi={this.props.eatSushi}
      />)
  
    return (
      <Fragment>
        <div className="belt">
            {sushiComponentList}
          <MoreButton 
          getMoreSushi={this.getMoreSushi}
          />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer