import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  // console.log(props.sushi)

  let shortenedSushiArray = [...props.sushi].slice(0,4)
  // console.log(shortenedSushiArray)
  
  let sushiComponentList = shortenedSushiArray.map(sushi => 
    <Sushi
    {...sushi}
    key={sushi.id}
    sushi={props.sushi}
    />
  )


  // console.log(sushiComponentList)

  return (
    <Fragment>
      <div className="belt">
        
          {sushiComponentList}
        
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer